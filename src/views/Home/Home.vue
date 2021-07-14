<template>
  <div id="myEcharts"></div>
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
  name:'Home',
  setup() {
    const echarts = getCurrentInstance()?.appContext.config.globalProperties.$echarts

    const state = reactive({})
    function initEcharts(){
      let echartsInstance = echarts.init(document.getElementById('myEcharts'),'dark')
      echartsInstance.setOption({
        title:{
          id: 'myEcharts',
          show: true,
          text:'Echarts Study',
          // textAlign:'left',
          x:'center',
          y:'top',
          padding:[10,5,5,5],
          link:'https://www.baidu.com',
          target:'blank',
          textStyle:{
            color:'#ffffff'
          }
        },
        xAxis: {
          type: "category",
          data: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ],
          name:'月份'
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [
              820,
              932,
              901,
              934,
              1290,
              1330,
              1320,
              801,
              102,
              230,
              4321,
              4129
            ],
            type: "line",
            smooth: true
          }
        ]
      })
    }

    onMounted(()=>{
      initEcharts()
    })
    onUnmounted(()=>{
      echarts.dispose()
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="less">
#myEcharts{
  position: absolute;
  top: 25vh;
  left: 25vw;
  width: 50vw;
  height: 50vh;
}
</style>
