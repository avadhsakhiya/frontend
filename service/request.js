import axios from "axios"

export default {
    async httpRequest(method,url,payload){
     let isSuccess = true;
     const response = await axios[method](process.env.NEXT_PUBLIC_API_URL+url,payload)
     console.log(response);
     if(response.status !== 200){
        isSuccess = false
     }
     return {data:response.data,isSuccess}
    }
}