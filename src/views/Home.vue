<template>
  <div class="home">
    <p class="op" >
 重庆鸿章网络有限公司是一家老牌的软件、网站、微信开发商，6年来，服务于重庆电信、腾讯云、腾讯科技等知名企业，专业型稳定技术定制开发团队，团队成员均为4-8年在职于本公司的经验开发人员，对系统开发、活动开发、用户界面设计、用户产品分析、数据处理、数据分析、软件开发、微信开发、网站开发、APP开发等领域拥有绝对的经验与水平，技术上，我们一直在超越并不断的得到各个合作伙伴的高度认可，服务态度上，我们一直在进步从未被质疑，效率上，我们一直在提高，只为服务客户，感恩客户，成就客户，我们坚信，客户的成功才是我们的成功！
    </p>
     
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
  //  this.wxPromise.wxPromise('/api/home/UserInfo');
    // this.getList();
  }
}


</script>

<style>
 .op{padding:60px 20%; }
</style>
