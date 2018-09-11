<template>
    <div>
      <button @click="handle">测试</button>
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  methods: {
    handle () {
      const myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [20, 20, 20, 10, 10, 20]
        }]
      })
    }
  },
  mounted () {
    setInterval(() => {
      const myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }, 1000)
  }
}
</script>

<style>

</style>
