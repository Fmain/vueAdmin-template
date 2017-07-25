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
  
        <li id="media1" style="height=32px;line-height:32px;">
          <span>情感:</span>
          <Radio-group v-model="button2" type="button" size="small">
            <a id="allmedia" onclick="mediaSelect('allmedia');" value="allmedia">
              <Radio label="全部 "></Radio>
            </a>
            <a id="webpage" onclick="mediaSelect('webpage');" value="webpage">
              <Radio label="正面"></Radio>
            </a>
            <a id="weixin" onclick="mediaSelect('weixin');" value="weixin">
              <Radio label="中性"></Radio>
            </a>
            <a id="weibo" onclick="mediaSelect('weibo');" value="weibo">
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
  
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <section class="panel log">
          <div class="panel-heading">
            舆情走势
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main1" style="width:513px;height: 350px;"></div>
          </div>
        </section>
  
      </div>
  
      <div class="col-xs-12 col-md-6">
        <section class="panel">
          <div class="panel-heading">
            媒体分布
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main2" style="width:513px; height: 350px;"></div>
          </div>
        </section>
      </div>
  
      <div class="col-xs-12 col-md-6">
        <section class="panel log">
          <div class="panel-heading">
            活跃媒体
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main3" style="width:513px;height: 350px;"></div>
          </div>
        </section>
      </div>
  
      <div class="col-xs-12 col-md-6">
        <section class="panel log">
          <div class="panel-heading">
            提及热区
            <a href="javascript:;" class="pull-right panel-toggle">
              <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </a>
          </div>
          <div class="panel-body">
            <div id="main4" style="width:513px;height: 350px;"></div>
          </div>
        </section>
      </div>
  
    </div>
  
  </div>
</template>

<script>
import china from './../../../../static/china'

export default {
  data() {
    return {
      button1: true,
      button2: true,
      isShow: false,
    }
  },
  mounted() {
    var myChart1 = this.$echarts.init(document.getElementById('main1'));
    this.are();
    var myChart2 = this.$echarts.init(document.getElementById('main2'));
    this.bre();
    var myChart3 = this.$echarts.init(document.getElementById('main3'));
    this.cre();
    var myChart4 = this.$echarts.init(document.getElementById('main4'));
    this.dre();
  },
  methods: {
    change() {
      this.isShow = !(this.isShow)
    },
    are() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main1'));
      wChart.setOption({
        title: {
          text: '舆情走势',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          // data: tlegend,
          data: ['网页', '微信', '微博', '报刊', '客户端', '论坛'],
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
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['2017-07-06', '', '2017-07-08', '', '2017-07-10', '', '2017-07-12']
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} 条'
          },
          textStyle: {
            fontSize: 1
          },
        }],
        series: [
          {
            name: '网页',
            type: 'line',
            data: ['20', '10', '60', '30', '50', '10', '60'],

          },
          {
            name: '微信',
            type: 'line',
            data: ['10', '80', '30', '50', '60', '0', '90'],
          },
          {
            name: '微博',
            type: 'line',
            data: ['30', '20', '20', '20', '20'],
          },
          {
            name: '报刊',
            type: 'line',
            data: ['60', '20', '20', '20', '20'],
          },
          {
            name: '客户端',
            type: 'line',
            data: ['40', '20', '20', '20', '20'],
          },
          {
            name: '论坛',
            type: 'line',
            data: ['50', '20', '20', '20', '20'],
          }
        ]
      });
    },
    bre() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main2'));
      wChart.setOption({
        title: {
          text: '媒体分布',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          y: 'bottom',
          data: ['网页', '微信', '微博', '报刊', '客户端', '论坛'],
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
        series: [
          {
            name: '媒体分布',
            type: 'pie',
            radius: [100, 140],
            x: '60%',
            width: '35%',
            funnelAlign: 'left',
            max: 1048,
            data: [
              { value: 20, name: '网页' },
              { value: 30, name: '微信' },
              { value: 5, name: '微博' },
              { value: 92, name: '报刊' },
              { value: 52, name: '客户端' },
              { value: 8, name: '论坛' }
            ]
          }
        ]
      });
    },
    cre() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main3'));
      wChart.setOption({
        title: {
          text: '活跃媒体',
          x: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['文章数量']
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
            data: ['1网', '2网', '3网', '4网', '5网', '6网', '7网', '8网', '9网', '10网']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            type: 'bar',
            data: ['2245', '1107', '932', '659', '363', '296', '254', '238', '205', '176']
          }
        ]
      });
    },
    dre() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('main4'));
      wChart.setOption({
        title: {
          text: '提及热区',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        dataRange: {
          min: 0,
          max: 2500,
          // orient: 'vertical',
          x: 'left',
          y: 'bottom',
          text: ['高', '低'],           // 文本，默认为数值文本
          calculable: true
        },
        toolbox: {
          show: false,
        },
        roamController: {
          show: true,
          x: 'right',
          mapTypeControl: {
            'china': true
          }
        },
        series: [
          {
            type: 'map',
            mapLocation: { x: 'center', y: 'top' },
            mapType: 'china',
            roam: false,
            itemStyle: {
              normal: { label: { show: false } },  //省会名标记
              emphasis: { label: { show: true } }  //色彩渲染
            },
             data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '重庆',value: Math.round(Math.random()*1000)},
                {name: '河北',value: Math.round(Math.random()*1000)},
                {name: '河南',value: Math.round(Math.random()*1000)},
                {name: '云南',value: Math.round(Math.random()*1000)},
                {name: '辽宁',value: Math.round(Math.random()*1000)},
                {name: '黑龙江',value: Math.round(Math.random()*1000)},
                {name: '湖南',value: Math.round(Math.random()*1000)},
                {name: '安徽',value: Math.round(Math.random()*1000)},
                {name: '山东',value: Math.round(Math.random()*1000)},
                {name: '新疆',value: Math.round(Math.random()*1000)},
                {name: '江苏',value: Math.round(Math.random()*1000)},
                {name: '浙江',value: Math.round(Math.random()*1000)},
                {name: '江西',value: Math.round(Math.random()*1000)},
                {name: '湖北',value: Math.round(Math.random()*1000)},
                {name: '广西',value: Math.round(Math.random()*1000)},
                {name: '甘肃',value: Math.round(Math.random()*1000)},
                {name: '山西',value: Math.round(Math.random()*1000)},
                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                {name: '陕西',value: Math.round(Math.random()*1000)},
                {name: '吉林',value: Math.round(Math.random()*1000)},
                {name: '福建',value: Math.round(Math.random()*1000)},
                {name: '贵州',value: Math.round(Math.random()*1000)},
                {name: '广东',value: Math.round(Math.random()*1000)},
                {name: '青海',value: Math.round(Math.random()*1000)},
                {name: '西藏',value: Math.round(Math.random()*1000)},
                {name: '四川',value: Math.round(Math.random()*1000)},
                {name: '宁夏',value: Math.round(Math.random()*1000)},
                {name: '海南',value: Math.round(Math.random()*1000)},
                {name: '台湾',value: Math.round(Math.random()*1000)},
                {name: '香港',value: Math.round(Math.random()*1000)},
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ]
          },
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