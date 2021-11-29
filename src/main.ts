/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: coderdeh
 * @Date: 2021-07-16 11:30:25
 * @LastEditors: coderdeh
 * @LastEditTime: 2021-11-29 23:31:38
 * @Function: 
 */
import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import rcities from '@/const/cities'
import * as echarts from 'echarts'
import VideoPlayer from 'vue-video-player'


// 组件
import App from './App.vue'

import ElementPlus from 'element-plus'
// 样式
import '@/styles/tailwind.css'
import 'element-plus/lib/theme-chalk/index.css'

// 标签样式初始化
import 'normalize.css'
require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

// svg
import 'vite-plugin-svg-icons/register'

const app = createApp(App)
app.use(router).use(store).use(VideoPlayer).mount('#app')

app.config.globalProperties.$rcities = rcities

app.use(ElementPlus)

app.config.globalProperties.$api = api

app.config.globalProperties.$echarts = echarts
