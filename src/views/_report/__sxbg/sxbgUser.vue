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
          <span>类别:</span>
          <Radio-group v-model="button1" type="button" size="small">
            <a id="allsentiment" onclick="checkDetails('allsentiment');" value="allsentiment">
              <Radio label="全部 "></Radio>
            </a>
            <a id="positive" onclick="checkDetails('positive');" value="positive">
              <Radio label="AI报告"></Radio>
            </a>
            <a id="neutral" onclick="checkDetails('neutral');" value="neutral">
              <Radio label="专题"></Radio>
            </a>
            <a id="negative" onclick="checkDetails('negative');" value="negative">
              <Radio label="精品"></Radio>
            </a>
            <a id="negative" onclick="checkDetails('negative');" value="negative">
              <Radio label="深度"></Radio>
            </a>
          </Radio-group>
        </li>
  
        <li id="media1" style="height=32px;line-height:32px;">
          <span>领域:</span>
          <Radio-group v-model="button2" type="button" size="small">
            <a id="allmedia" onclick="mediaSelect('allmedia');" value="allmedia">
              <Radio label="全部 "></Radio>
            </a>
            <a id="webpage" onclick="mediaSelect('webpage');" value="webpage">
              <Radio label="政策解读"></Radio>
            </a>
            <a id="weixin" onclick="mediaSelect('weixin');" value="weixin">
              <Radio label="通信"></Radio>
            </a>
            <a id="weibo" onclick="mediaSelect('weibo');" value="weibo">
              <Radio label="互联网"></Radio>
            </a>
            <a id="newspaper" onclick="mediaSelect('newspaper');" value="newspaper">
              <Radio label="移动互联网"></Radio>
            </a>
            <a id="client" onclick="mediaSelect('client');" value="client">
              <Radio label="投融资"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="信息基础设施"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="一带一路"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="智慧城市"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="人工智能"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="AR/VR"></Radio>
            </a>
          </Radio-group>
        </li>
      </ul>
    </div>
  
    <div class="line"></div>
  
    <label>
      <input type="text">
      <Button type="ghost" shape="circle" icon="ios-search"  v-model="value" v-on:change="change"></Button>
    </label>
  
    <div class="" style="margin-top:20px;">
      <Table border :data="tableData1" :columns="tableColumns1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: left;">
          <Page :total="198" show-total :current="1" @on-change="changePage" show-elevator show-sizer></Page>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      button1: true,
      button2: true,
      isShow: false,
      tableData1: this.mockTableData1(),
      tableColumns1: [
        {
          title: '文档编号',
          key: 'name',
          width: '100'
        },
        {
          title: '标题',
          key: 'status',
        },
        {
          title: '行业',
          key: 'portrayal',
        },
        {
          title: '领域',
          key: 'people',
        },
        {
          title: '来源',
          key: 'people',
        },
        {
          title: '关键字',
          key: 'people',
        },
        {
          title: '摘要',
          key: 'time',
          render: (h, params) => {
            return h('div', '近' + params.row.time + '天');
          }
        },
        {
          title: '地址',
          key: 'people',
        },
        {
          title: '时间',
          key: 'update',
          render: (h, params) => {
            return h('div', this.formatDate(this.tableData1[params.index].update));
          }
        },
      ]
    }
  },
  methods: {
    change() {
      this.isShow = !(this.isShow)
    },
    change(value) {
      // 目的是去掉输入框中的小数点
      if (this.value) {
        this.value = parseInt(value);
      }

    },
    mockTableData1() {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          name: '0' + Math.floor(Math.random() * 1000 + 1),
          status: Math.floor(Math.random() * 3 + 1),
          portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数',],
          people: '0' + Math.floor(Math.random() * 1000 + 1),
          time: Math.floor(Math.random() * 7 + 1),
          update: new Date()
        })
      }
      return data;
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? '0' + m : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      return y + '-' + m + '-' + d;
    },
    changePage() {
      // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
      this.tableData1 = this.mockTableData1();
    }
  },
  computed: {

  }
}

</script>

<style scoped>
.xxhzUser {
  /* margin-top: 20px; */
  padding: 40px 0 30px 0;
  margin-left: 2%;
  width: 96%;
}

.line {
  width: 100%;
  height: 2px;
  margin: 15px 0 15px 0;
  background-color: #C1C1C1;
}
</style>