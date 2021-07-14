import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import rcities from '@/const/cities'
import * as echarts from 'echarts'

// 组件
import App from './App.vue'

import ElementPlus from 'element-plus'
// 样式
import '@/styles/tailwind.css'
import 'element-plus/lib/theme-chalk/index.css'

// 标签样式初始化
import 'normalize.css'

// svg
import 'vite-plugin-svg-icons/register'

const app = createApp(App)
app.use(router).use(store).mount('#app')

app.config.globalProperties.$rcities = rcities

app.use(ElementPlus)

app.config.globalProperties.$api = api

app.config.globalProperties.$echarts = echarts
