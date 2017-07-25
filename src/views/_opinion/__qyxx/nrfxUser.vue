<template>
  <div class="xxhzUser">
    <div class="tmt_top_left">
      <ul>
        <li id="selectTime1" style="height=32px;line-height:32px;">
          <span>时间:</span>
          <Radio-group v-model="button1" type="button" size="small">
            <a id="alltime" onclick="timeSelect('alltime');" class="tmt_a" value="alltime">
              <Radio label="全部 "></Radio>
            </a>
            <a id="today" onclick="timeSelect('today');" value="today">
              <Radio label="今天"></Radio>
            </a>
            <a id="lastOne" onclick="timeSelect('lastOne');" value="lastOne">
              <Radio label="昨天"></Radio>
            </a>
            <a id="lastseven" onclick="timeSelect('lastseven');" value="lastseven">
              <Radio label="近7天"></Radio>
            </a>
            <a id="lastmonth" onclick="timeSelect('lastmonth');" value="lastmonth">
              <Radio label="近30天"></Radio>
            </a>
            <a id="definetime" @click.prevent="change()">
              <Radio label="自定义"></Radio>
            </a>
          </Radio-group>
          <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间" style="width: 300px" v-show="isShow"></Date-picker>
        </li>
  
        <li id="sentiment1" style="height=32px;line-height:32px;">
          <span>情感:</span>
          <Radio-group v-model="button1" type="button" size="small">
            <a id="allsentiment" onclick="checkDetails('allsentiment');" value="allsentiment">
              <Radio label="全部 "></Radio>
            </a>
            <a id="positive" onclick="checkDetails('positive');" value="positive">
              <Radio label="正面"></Radio>
            </a>
            <a id="neutral" onclick="checkDetails('neutral');" value="neutral">
              <Radio label="中性"></Radio>
            </a>
            <a id="negative" onclick="checkDetails('negative');" value="negative">
              <Radio label="负面"></Radio>
            </a>
          </Radio-group>
        </li>
  
        <li id="media1" style="height=32px;line-height:32px;">
          <span>媒体:</span>
          <Radio-group v-model="button2" type="button" size="small">
            <a id="allmedia" onclick="mediaSelect('allmedia');" value="allmedia">
              <Radio label="全部 "></Radio>
            </a>
            <a id="webpage" onclick="mediaSelect('webpage');" value="webpage">
              <Radio label="网页"></Radio>
            </a>
            <a id="weixin" onclick="mediaSelect('weixin');" value="weixin">
              <Radio label="微信"></Radio>
            </a>
            <a id="weibo" onclick="mediaSelect('weibo');" value="weibo">
              <Radio label="微博"></Radio>
            </a>
            <a id="newspaper" onclick="mediaSelect('newspaper');" value="newspaper">
              <Radio label="报刊"></Radio>
            </a>
            <a id="client" onclick="mediaSelect('client');" value="client">
              <Radio label="客户端"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="论坛"></Radio>
            </a>
          </Radio-group>
        </li>
      </ul>
    </div>
  
    <div class="line"></div>
  
    <div class="table-pro">
      <Table border :columns="columns2" :show-header="showHeader" :data="data2"></Table>
      <Table border :columns="columns1" :show-header="showHeader" :data="data1"></Table>
    </div>
  
    <div class="row" style="float:right;width:40%;">
      <div class="col-xs-12 col-md-12 col-lg-12">
        <section class="panel log">
          <div class="panel-heading">
            情感属性
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main1" style="width:413px;height: 372px;"></div>
          </div>
        </section>
      </div>
    </div>
  
    <div class="row">
      <div class="col-xs-12 col-md-9 col-lg-9">
        <section class="panel log">
          <div class="panel-heading">
            情感走势
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main2" style="width:813px;height: 350px;"></div>
          </div>
        </section>
      </div>
      <div class="col-xs-12 col-md-3 col-lg-3">
        <section class="panel log">
          <div class="panel-heading">
            文章类型
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main3" style="width:313px;height: 350px;"></div>
          </div>
        </section>
      </div>
    </div>
  
  </div>
  
  </div>
</template>

<script>

export default {
  name: 'hotspotmon',
  components: {

  },
  computed: {
    name() {
      return this.$route.name
    },

    list() {
      return this.$route.matched
    }
  },
  data() {
    return {
      button1: true,
      button2: true,
      isShow: false,
      showHeader: false,
      columns1: [
        {
          title: '姓名',
          key: 'name',
        },
        {
          title: '年龄',
          key: 'age'
        }
      ],
      columns2: [
        {
          title: '重要舆情',
          key: 'title',
          align: 'center',
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18
        },
        {
          name: '张小刚',
          age: 25
        },
        {
          name: '李小红',
          age: 30
        },
        {
          name: '周小伟',
          age: 26
        },
        {
          name: '周小伟',
          age: 26
        },
        {
          name: '周小伟',
          age: 26
        },
        {
          name: '周小伟',
          age: 26
        },
        {
          name: '周小伟',
          age: 26
        }
      ],
      data2: [
        {
          title: '重要舆情'
        }
      ]
    }
  },
  mounted() {
    var myChart1 = this.$echarts.init(document.getElementById('main1'));
    this.are();
    var myChart2 = this.$echarts.init(document.getElementById('main2'));
    this.bre();
    var myChart3 = this.$echarts.init(document.getElementById('main3'));
    this.cre();
  },
  methods: {
    change() {
      this.isShow = !(this.isShow)
    },
    insert: function () {
      this.users.push(this.user)
    },
    are() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main1'));
      wChart.setOption({
        title: {
          text: '情感属性',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          y: 'bottom',
          data: ['正面', '中性', '负面']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: false,
        series: [{
          name: '情感属性',
          type: 'pie',
          radius: [100, 140],

          // for funnel
          x: '60%',
          width: '35%',
          funnelAlign: 'left',
          max: 1048,

          data: [
            { value: 1, name: '正面' },
            { value: 20, name: '中性' },
            { value: 30, name: '负面' }
          ]
        }
        ]
      });
    },
    bre() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main2'));
      // var tlegend = 0;
      // var tData_property = [0,1,2]
      wChart.setOption({
        title: {
          text: '情感走势',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['正面', '中性', '负面'],
          y: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2017-07-06', '', '2017-07-08', '', '2017-07-10', '', '2017-07-12']
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value} 条'
            },
            textStyle: {
              fontSize: 1
            },
            //data : tData_property[0].data+tData_property[1].data+tData_property[2].data
          }
        ],
        series: [
          {
            name: '正面',
            type: 'line',
            data: ['12', '50', '2', '10', '60', '30', '50'],

          },
          {
            name: '中性',
            type: 'line',
            data: ['58', '5', '96', '80', '30', '50', '60'],
          },
          {
            name: '负面',
            type: 'line',
            data: ['72', '150', '55', '80', '30', '50', '300'],
          }
        ]
      });
    },
    cre() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main3'));
      wChart.setOption({
        title: {
          text: '文章类型',
          x: 'center'
        },
        legend: {
          x: 'center',
          data: ['科技', '金融', '政治', '娱乐', '教育', '文化', '军事', '体育', '法律']
        },
        tooltip: {
          trigger: 'axis'
        },
        polar: [
          {
            indicator: [
              { text: '科技', max: 10 },
              { text: '金融', max: 10 },
              { text: '政治', max: 10 },
              { text: '娱乐', max: 10 },
              { text: '教育', max: 10 },
              { text: '文化', max: 10 },
              { text: '军事', max: 10 },
              { text: '体育', max: 10 },
              { text: '法律', max: 10 }
            ],
            radius: 70
          }
        ],
        calculable: true,
        series: [
          {
            name: '深圳 vs 全国',
            type: 'radar',
            itemStyle: {
              normal: {
                areaStyle: {
                  type: 'default',
                }
              }
            },
            data: [
              {
                value: [0, 0, 0, 0, 0, 0, 0, 0, 0]
              }
            ]
          }
        ]
      });
    },
  }
}

</script>

<style rel="stylesheet/scss" lang="scss">
@import "src/styles/yuan.scss";
.xxhzUser {
  // margin-top: 20px;
  padding: 40px 0 40px 0;
  margin-left: 2%;
  width: 96%;
}

.line {
  width: 100%;
  height: 2px;
  margin: 15px 0 15px 0;
  background-color: #C1C1C1;
}

.table-pro {
  width: 60%;
  float: left;
}
</style>
