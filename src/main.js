import Vue from 'vue'
import App from './App.vue'
import router from './router'

import wxPromise from '../public/js/lol'
import global_ from './Global.vue'

 Vue.prototype.global=global_;
 Vue.prototype.wxPromise=wxPromise;

 
Vue.config.productionTip = false
// Vue.prototype.$http=axios;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')





// const wxPromise = (url, data) => {
//   var autoken = wx.getStorageSync("autoken")|| "";
//  // var wxtoken = wx.getStorageSync("wxtoken");
//   // 返回一个Promise实例对象
//   //Promise es6异步类
//   return new Promise((resolve, reject) => {
  
//     wx.showNavigationBarLoading();
//     wx.request({
//       url: `${host}/applet/${url}`,
//       data: data,
//       header: { 'content-type': 'application/json', "autoken": autoken },
//       method: 'POST',
//       dataType: 'json',
//       responseType: 'text',
//       success: (xhr) => {
//         //只会判断状态是不是200 
//         console.log(xhr);
//         if (xhr.data.Code == 1) {
//           resolve(xhr.data)
//         } else if (xhr.data.Code == -99) {
//             wx.setStorageSync('isLogin', "0");
//           return;
//         } else {
//           reject(xhr.data);
//         }
//       },
//       fail: (e) => {
//         console.log(e);
//         reject({Code:-1,Msg:"request异常"})
//       } ,complete:()=>{
//         wx.hideNavigationBarLoading();
//       }
//     });
//   })
//   }