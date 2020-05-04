<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },  
    methods: {
   async mo(){
      try{
          console.log("111");
          var xhr= await this.global.wxPromise('/api/home/UserInfo')
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
      //  this.ko();
  }
}
</script>
