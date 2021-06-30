<template>
  <ul class="flex flex-col justify-around items-center nav h-screen bg-red-50">
    <li class="itemnav flex flex-col justify-center items-center">
      <img src="~assets/images/nav/home.png" alt="" />
      <p class="txt text-fs14 text-center text-light">首页</p>
    </li>

    <li class="itemnav flex flex-col justify-center items-center">
      <img src="~assets/images/nav/category.png" alt="" />
      <p class="txt text-fs14 text-center text-light">分类</p>
    </li>

    <li class="itemnav flex flex-col justify-center items-center">
      <img src="~assets/images/nav/car.png" alt="" />
      <p class="txt text-fs14 text-center text-light">购物车</p>
    </li>

    <li class="itemnav flex flex-col justify-center items-center">
      <img src="~assets/images/nav/mine.png" alt="" />
      <p class="txt text-fs14 text-center text-light">我的</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less" scoped>
.nav {
  width: 60px;
  height: 100vh;
  .itemnav {
    width: 60px;
    height: 160px;
    cursor: pointer;
    .txt {
      width: 60px;
      margin-top: 10px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
