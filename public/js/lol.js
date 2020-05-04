
import axios from 'axios'
const wxPromise=(url,data)=>{
    return new Promise((resolve, reject) => {
        axios({
            method:"post",
            url: url,
            data: data,
            dataType: 'json',
            responseType: 'text',
            headers: { 'content-type': 'application/json',},
        }).then(res => {
           
        }).catch(err => {
                
        })
    });
}

  export default {
    wxPromise:wxPromise
}