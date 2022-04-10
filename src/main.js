import Vue from 'vue'
import App from './App.vue'

// 导入打包后的组件
// import AUI from '../lib/index' // 导入全部组件
// import sffBox from '../lib/sff-box' // 导入单个组件

// 导入打包前的组件源码
import AUI from '../packages' // 导入全部组件
// import sffBox from '../packages/sff-box' // 导入单个组件


console.log(AUI);
Vue.use(AUI); // 使用插件方式注册组件


// console.log(sffBox);
// Vue.use(sffBox);
// Vue.component(sffBox.name, sffBox);

new Vue({
  el: '#app',
  render: h => h(App)
})
