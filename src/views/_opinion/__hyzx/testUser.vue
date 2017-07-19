<template>
    <div class="app-container">
      <h2>{{msg}}</h2>
      <div class="charts">
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
        <div id="main" style="width: 600px;height:400px;"></div>
      </div>
    </div>
</template>

<script>
// var echarts = require('echarts');

import echarts from 'echarts' 

  export default {
    data() {
      return {
        msg: 'this is testUser page'
      }
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
        }
        var option = {
            title: {
                text: '柱状图动画延迟'
            },
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {
            },
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

      }
    },
    mounted() {
      this.drawLine();
    }
  }
</script>

<style scoped>

</style>
