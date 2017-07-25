<template>
  <div class="app">
    <div class="app-body">
      <Sidebar/>
      <div class="place-fix">
      <main class="main">
        <breadcrumb :list="list" />
        <div class="container-fluid">
          <div class="animated fadeIn">
  
            <div class="pane-count">
              <Card class="pane-count-table col-sm-6 col-md-2">
                <Icon type="ios-people-outline" class="pane-count-icon" />
                <div class="pane-count-position">999</div>
                <div class="pane-count-font">用户总量</div>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              </Card>
  
              <Card class="pane-count-table col-sm-6 col-md-2">
                <Icon type="ios-search-strong" class="pane-count-icon" />
                <div class="pane-count-position">11247</div>
                <div class="pane-count-font">昨日查询量</div>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              </Card>
  
              <Card class="pane-count-table col-sm-6 col-md-2">
                <Icon type="ios-chatboxes-outline" class="pane-count-icon" />
                <div class="pane-count-position">60%</div>
                <div class="pane-count-font">日均活跃度</div>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              </Card>
  
              <Card class="pane-count-table col-sm-6 col-md-2">
                <Icon type="ios-list-outline" class="pane-count-icon" />
                <div class="pane-count-position">1024</div>
                <div class="pane-count-font">文章总数</div>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              </Card>
  
              <Card class="pane-count-table col-sm-6 col-md-2">
                <Icon type="ios-personadd-outline" class="pane-count-icon" />
                <div class="pane-count-position">20</div>
                <div class="pane-count-font">今日新增</div>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              </Card>
  
              <Card class="pane-count-table col-sm-6 col-md-2">
                <Icon type="social-twitch-outline" class="pane-count-icon" />
                <div class="pane-count-position">98</div>
                <div class="pane-count-font">评论总数</div>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
              </Card>
  
            </div>
  
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <section class="panel">
                  <div class="panel-heading">
                    查询信息
                    <a href="javascript:;" class="pull-right panel-toggle">
                      <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div class="panel-body" style="height: 130px;">
                    <div class="">
                      <div style="float: left">
                        <h5>&nbsp;&nbsp;&nbsp;&nbsp;浏览量</h5>
                      </div>
                      <div style="float: right">
                        <span style="color: #17a084;">周&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      </div>
                    </div>
                    <br/>
                    <div>
                      <div style="float: left">
                        <h1 style="font-size: 22px;color: #1a1a1a" id="userview7"> </h1>
                      </div>
                      <div style="float: right">
                        <div id="userpercent">
                          <i class="fa fa-bolt"></i>
                        </div>
                        <small>总计浏览量</small>
                      </div>
  
                    </div>
                  </div>
                </section>
              </div>
            </div>
  
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <section class="panel log">
                  <div class="panel-heading">
                    最近七天用户浏览量
                    <a href="javascript:;" class="pull-right panel-toggle">
                      <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div class="panel-body">
                    <div id="myechart" style="width:513px;height: 350px;"></div>
                  </div>
                </section>
  
              </div>
  
              <div class="col-xs-12 col-md-6">
                <section class="panel">
                  <div class="panel-heading">
                    事件情感分析
                    <a href="javascript:;" class="pull-right panel-toggle">
                      <i class="fa fa-angle-double-down" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div class="panel-body">
                    <div id="myecharts" style="width:513px; height: 350px;"></div>
                  </div>
                </section>
              </div>
            </div>
  
          </div>
          <router-view></router-view>
        </div>
      </main>
      </div>
      <AppAside/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation',
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
  mounted() {
    var mye = this.$echarts.init(document.getElementById('myechart'));
    this.dre();
    var myec = this.$echarts.init(document.getElementById('myecharts'));
    this.are();
  },
  methods: {
    dre() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('myechart'));
      wChart.setOption({
        title: {
          text: '最近七天用户查询量',
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['查询量']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          data: ['2017-07-06', '', '2017-07-08', '', '2017-07-10', '', '2017-07-12']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '查询量',
          type: 'bar',
          data: [20, 40, 71, 423, 25, 76, 135],
          markLine: {
            data: [{
              type: 'average',
              name: '平均值'
            }]
          }
        }
        ]
      });
    },
    are() {
      var wChart = this.$echarts.getInstanceByDom(document.getElementById('myecharts'));
      wChart.setOption({
        title: {
          text: '事件情感分析',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['正面', '中性', '负面']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 1, name: '正面' },
              { value: 30, name: '中性' },
              { value: 2, name: '负面' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    },
  }
}

</script>



<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/yuan.scss";

.place-fix{
  padding: 30px 0 40px 0;
}

.pane-count {
  margin-top: 25px;
  height: 175px;
}

.pane-count-table {
  height: 150px;
  background-color: #FFFFFF;
}

.pane-count-icon {
  font-size: 50px;
  color: #B0BEC5;
  float: right;
}

.pane-count-position {
  margin-top: 55px;
  font-size: 24px;
  color: #009688;
}

.pane-count-font {
  margin-left: 15px;
  font-size: 12px;
  color: #2D2D2D;
}

.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
  float: right;
  margin-right: -20px;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
