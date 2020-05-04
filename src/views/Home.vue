<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    getList(){
      // this.$http.get('http://18183-img.bj.bcebos.com/image/2020/04/17/bcf8b043c130137dc3950d05085fd4d8.png'),then(res=>{
      //    console.log(res);
      // }).catch(function (error) {
      //     console.log(res);
      // });
   
            // this.$http({
            //         method:"post",
            //         url: '/api/home/UserInfo',
            //         data: {},
            //         headers: {  "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"},
            //     }).then(res => {
            //         console.log(res);
            //    })
    }
  },
  mounted:function(){
   
  },
  created: function () {
   this.wxPromise.wxPromise('/api/home/UserInfo');
    // this.getList();
  }
}


</script>
