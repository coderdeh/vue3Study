<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: coderdeh
 * @Date: 2021-11-29 22:59:44
 * @LastEditors: coderdeh
 * @LastEditTime: 2021-11-29 23:03:44
 * @Function: 
-->
<template>
  <div class="video_wrap">
    <p>{{ txt }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      txt: '视频播放',
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
<style lang="less" scoped></style>
