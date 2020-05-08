<template>
  <div class="about">
  <p class="op" >
 我们正积努力建设官方网站中~~~~~！合作电话：18166478224
    </p>
  </div>
</template>
<script>
export default {
    data() {
      return {
        id:null
      }
    },  
    methods: {
       voido(){
        this.id=this.$route.params.id
       },
   async mo(){
      try{
          console.log("111");
          var xhr= await this.global.wxPromise('http://mltk.cqkfzx.com/WX/Default/Test')
          console.log(xhr);
            console.log("222");
       }
       catch(ex){
        console.log(ex);
       }

      },

      async ko(){
      
    var  open= await this.global.open("open");
      
      }
    },
  created(){
       this.mo();
         this.voido();
      //  this.ko();
  }
}
</script>
