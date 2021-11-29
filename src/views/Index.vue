<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: coderdeh
 * @Date: 2021-11-29 22:16:16
 * @LastEditors: coderdeh
 * @LastEditTime: 2021-11-29 23:25:26
 * @Function: 
-->
<template>
  <div class="wrap">
    <ul class="nav_wrap">
      <li
        :class="{ active_nav: item.path === currentNav }"
        v-for="(item, index) in navLists"
        :key="index"
        @click="changeNav(item.path)"
      >
        {{ item.label }}
      </li>
    </ul>
    <div class="router">
      <keep-alive>
        <router-view v-if="route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!route.meta.keepAlive" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'Index',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      currentNav: 'echarts',
      navLists: [
        {
          label: 'Echarts',
          path: 'echarts',
        },
        {
          label: 'Video',
          path: 'video',
        },
      ],
    })
    function changeNav(path: string) {
      state.currentNav = path
      // console.log(window.location.pathname, route.meta.keepAlive)
      router.push({
        name: path,
      })
    }
    return {
      route,
      ...toRefs(state),
      changeNav,
    }
  },
})
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  flex-direction: column;
}
.nav_wrap {
  user-select: none;
  padding: 0 20px;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: flex-end;
  background: -moz-linear-gradient(top, #061de7 0%, #ffffff 100%);
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #061de7),
    color-stop(100%, #ffffff)
  );
  background: -webkit-linear-gradient(top, #061de7 0%, #ffffff 100%);
  background: -o-linear-gradient(top, #061de7 0%, #ffffff 100%);
  background: -ms-linear-gradient(top, #061de7 0%, #ffffff 100%);
  background: linear-gradient(to bottom, #061de7 0%, #ffffff 100%);
  > li {
    margin-right: 10px;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
  .active_nav {
    background: #061de7;
    opacity: 0.5;
    color: #ffffff;
  }
}
.router {
  width: 100vw;
}
</style>
