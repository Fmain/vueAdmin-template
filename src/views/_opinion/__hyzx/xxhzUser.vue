<template>
  <div class="xxhzUser">
    <!-- 选择栏 -->
    <div class="tmt_top_left">
      <ul>
        <li class="selectTime">
          <span>时间:</span>
          <Radio-group v-model="selectTime" type="button" size="small">
            <Radio v-for="option in optionTimes" :key="option.id" :label="option.value">{{option.time}}</Radio>
          </Radio-group>
          <!-- 自定义时间选择框 -->
          <Date-picker v-show="showPicker" type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间" style="width: 250px"></Date-picker>
        </li>
        <li class="selectSentiment">
          <span>情感:</span>
          <Radio-group v-model="selectSentiment" type="button" size="small">
            <Radio v-for="option in optionSentiment" :key="option.id" :label="option.value">{{option.time}}</Radio>
          </Radio-group>
        </li>
        <li class="selectMedia">
          <span>媒体:</span>
          <Radio-group v-model="selectMedia" type="button" size="small">
            <Radio v-for="option in optionMedia" :key="option.id" :label="option.value">{{option.time}}</Radio>
          </Radio-group>
        </li>
      </ul>
    </div>
    <div class="clear_float"></div>
    <!-- 标题 -->
    <div class="tabs-container">
      <a data-toggle="tab" href="#tab-1" aria-expanded="true">资讯</a>
      <el-button @click="getInfo">测试按钮</el-button>
    </div>
    <div class="line"></div>
    <!-- 加载动画 -->
    <Loading v-if="!tableColumns"></Loading>
    <!-- 表格 -->
    <div class="table">
      <!-- 表格 -->
      <Table border :columns="tableColumns" :data="tableData"></Table>
      <!-- 分页 -->
      <div class="paging">
        <div class="fr">
          <!-- <Page :total="100" :current="1" @on-change="changePage"></Page> -->
          <Page :total="tableData.length" :page-size="10" show-total :current="1" @on-change="changePage" show-elevator show-sizer></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Loading from '../__hyzx/Loading'
  import axios from 'axios'
  export default {
    name: 'industryinfo',
    components: {
      Loading,
    },
    data() {
      return {
        testData: '', ///////////////
        selectTime: 'alltime',
        showPicker: false,
        selectSentiment: 'allsentiment',
        selectMedia: 'allmedia',
        optionTimes: [{
            time: '全部',
            value: "alltime"
          },
          {
            time: '今天',
            value: "today"
          },
          {
            time: '昨天',
            value: "lastOne"
          },
          {
            time: '近7天',
            value: "lastseven"
          },
          {
            time: '近30天',
            value: "lastmonth"
          },
          {
            time: '自定义',
            value: "custom"
          },
        ],
        optionSentiment: [{
            time: '全部',
            value: "allsentiment"
          },
          {
            time: '正面',
            value: "positive"
          },
          {
            time: '中性',
            value: "neutral"
          },
          {
            time: '负面',
            value: "negative"
          },
        ],
        optionMedia: [{
            time: '全部',
            value: "allmedia"
          },
          {
            time: '网页',
            value: "webpage"
          },
          {
            time: '微信',
            value: "weixin"
          },
          {
            time: '微博',
            value: "weibo"
          },
          {
            time: '报刊',
            value: "newspaper"
          },
          {
            time: '客户端',
            value: "client"
          },
          {
            time: '论坛',
            value: "forum"
          },
        ],
        tableColumns: [{
            title: '序号',
            type: 'index',
            key: 'index',
            align: 'center',
            width: '60'
          },
          {
            title: '标题',
            align: 'center',
            key: 'title',
            render: (h, params) => {
              return h('div', [
                h('a', {
                  domProps: {
                    href: params.row.url
                  }
                }, params.row.title)
              ]);
            }
          },
          {
            title: '性质',
            key: 'inclination',
            align: 'center',
            width: '80'
          },
          {
            title: '时间',
            align: 'center',
            key: 'crawl_time',
            width: '150'
          },
          {
            title: '来源',
            align: 'center',
            key: 'source',
            width: '90'
          },
          {
            title: '摘要',
            align: 'center',
            key: 'summary',
          }
        ],
        tableData: []
      }
    },
    watch: {
      selectTime(newVal, oldVal) {
        if (newVal == "custom") {
          this.showPicker = true
        } else {
          this.showPicker = false
        }
      }
    },
    beforeMount() {
      this.getInfo()
    },
    methods: {
      getInfo() {
        // axios.post('http://10.35.16.70:8080/myinfo/timeS',{
        //   times: "today",
        //   inclination: "allsentiment",
        //   mediatmp: "allmedia",
        //   flag :0
        // }).then(res => {
        //   console.log(res.data)
        //   this.testData = res.data
        // }).catch(err => {
        //   console.log(err)
        // })
        this.$http.post("http://10.35.16.70:8080/myinfo/timeS", {
            times: "today",
            inclination: "allsentiment",
            mediatmp: "allmedia",
            flag: 1
          }, {
            emulateJSON: true
          })
          .then(function(res) {
            console.log(res.data[0])
            this.tableData = res.data
            // console.log(this.tableData)
          }, function(err) {
            // 处理失败的结果
            console.log('error:' + err)
          });
      },
      changePage() {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.getInfo()
      }
    },
    // events: {
    //   // 分页组件传回的表格数据（这里即为服务器传回的数据）
    //   'data' (data) {
    //     this.tableList = data
    //   },
    //   // 刷新数据
    //   'refresh' () {
    //     this.refresh()
    //   }
    // }
  }
</script>

<style scoped>
  .tabs-container {
    margin-top: 20px;
  }
  .xxhzUser {
    /* margin-top: 20px; */
    padding: 40px 0 30px 0;
    margin-left: 2%;
    width: 96%;
  }
  .xxhzUser .tmt_top_left ul li {
    height: 32px;
    line-height: 32px;
  }
  .xxhzUser .table {
    margin-top: 20px;
  }
  .xxhzUser .table .paging {
    margin: 10px;
    overflow: hidden;
  }
  .xxhzUser .table .paging .fr {
    float: right;
  }
  .ivu-table .demo-table-row td {
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
  }
  .line {
    width: 100%;
    height: 2px;
    margin: 15px 0 15px 0;
    background-color: #C1C1C1;
  }
</style>


