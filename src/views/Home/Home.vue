<template>
  <div class="h-screen w-screen"></div>
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

<style scoped lang="less"></style>
