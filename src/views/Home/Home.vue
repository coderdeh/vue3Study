<template>
  <div class="echats_wrap">
    <div id="lineChart"></div>
    <div id="histogram"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRefs,
  onMounted,
  onUnmounted,
} from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const echarts =
      getCurrentInstance()?.appContext.config.globalProperties.$echarts

    const state = reactive({})
    // 折线图
    function initLineEcharts() {
      const echartsInstance = echarts.init(
        document.getElementById('lineChart'),
        'dark'
      )
      echartsInstance.setOption({
        title: {
          id: 'lineChart',
          show: true,
          text: 'Echarts Study',
          x: 'center',
          y: 'top',
          padding: [10, 5, 5, 5],
          link: 'https://www.baidu.com',
          target: 'blank',
          textStyle: {
            color: '#ffffff',
          },
        },
        xAxis: {
          type: 'category',
          data: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月',
          ],
          name: '月份',
        },
        tooltip: {
          trigger: 'axis',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [
              820, 932, 901, 934, 1290, 1330, 1320, 801, 102, 2344, 4321, 4129,
            ],
            type: 'line',
            smooth: true,
          },
        ],
      })
    }
    // 柱状图
    function initHistogram() {
      const echartsHistogram = echarts.init(
        document.getElementById('histogram'),
        'dark'
      )
      echartsHistogram.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#a90000',
                },
              },
              150,
              80,
              70,
              110,
              130,
            ],
            type: 'bar',
          },
        ],
      })
    }
    onMounted(() => {
      initLineEcharts()
      initHistogram()
    })
    onUnmounted(() => {
      // echarts.dispose()
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="less">
.echats_wrap {
  display: flex;
  // flex-direction: column;
}
#lineChart,
#histogram {
  width: 45vw;
  height: 45vh;
}
</style>
