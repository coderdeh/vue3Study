<template>
  <LeftNav class="left-nav"></LeftNav>
  <router-view class="content" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftNav from '@/components/leftNav/LeftNav.vue'

export default defineComponent({
  name: 'App',
  components: {
    LeftNav,
  },
})
</script>
<style scoped lang="less">
.left-nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
.content {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-left: 60px;
  width: calc(100vw - 60px);
  height: 100vh;
}
</style>
