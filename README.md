## 提交规范
### 相关文档
- [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)

### 提交说明的结构
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
### 提交类型
- feat     新功能
- fix      修BUG
- docs     改文档
- style    页面样式
- refactor 代码重构
- perf     性能优化
- test     测试代码
- merge    分支合并
- chore    其他

### 使用示例
- 开发了新功能
  git commit -m 'feat: 登录模块'
- 修复了BUG
  git commit -m 'fix: 验证码未正确发送'


### 相关工具
- husky：git hooks
- lint-staged: 对git暂存区的代码做lint检测
- commitlint: 检测是否符合提交规范

## 代码规范

### 相关文档
- [Standard](https://standardjs.com/rules-zhcn.html#javascript-standard-style)
- [vue/vue3-recommended](https://eslint.vuejs.org/rules/)

### 自定义规范
- 限制函数最大深度
- 限制函数最大行数
- 限制文件最大行数
- 限制代码最大长度

## UI
### icon
- icon同一采用svg格式，放在assets/icons下

- [使用](https://github.com/anncwb/vite-plugin-svg-icons/blob/main/README.zh_CN.md)
  
  eg. 使用test.svg
  
  ```html
  <svg-icon name="test" ></svg-icon>
  ```

### less - CSS预处理器

### tailwindcss - CSS框架

- [开发初衷](https://tailwindchina.com/translationscss-utility-classes-and-separation-of-concerns.html)

- [官方文档](https://www.tailwindcss.cn/docs)

  [Echarts]https://echarts.apache.org
  [vCharts]https://zizorg.github.io/v-charts
  [印记中国]https://docschina.org
  [测试接口，网上找的]https://www.showdoc.com.cn/128719739414963/2513235043485226
  [防抖节流]https://segmentfault.com/a/1190000018428170
  [lodash]https://www.lodashjs.com
  [vue3]https://www.vue3js.cn
  


- **配置**
  - 文件：tailwind.config.js
  - 如：可以设置常用的颜色变量，用于主题色。

- **自定义类名**
  - 文件: ./src/styles/index.css
