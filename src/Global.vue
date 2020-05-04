<script>
const serverSrc='www.baidu.com';
const token='12345678';
const hasEnter=false;
const userSite="中国钓鱼岛";
import axios from 'axios'
const wxPromise = (url, data) => {
  return  axios({
            method:"post",
            url: url,
            data: data,
            dataType: 'json',
            responseType: 'text',
            headers: { 'content-type': 'application/json',},
        })
        .then(xhr => {
          return xhr;
        })
        .catch(err => {
             return err
        })
}

const open=(url)=>{
    var url=url||'空'
    return setTimeout(()=>{
        console.log(url)
     },1000);
}


  export default
  {
    userSite,//用户地址
    token,//用户token身份
    serverSrc,//服务器地址
    hasEnter,//用户登录状态
    wxPromise,
    open
  }
</script>