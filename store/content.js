import { toast } from "@/hooks/use-toast";
import request from "@/service/request";

export default {
    list:[],
    isLoading:false,
    async getContentList(){
        const { data, isSuccess } = await request.httpRequest('get', '/content/list')
        if (!isSuccess || data.error !== undefined) {
            toast({
                title: data.error,
                description: '',
            })
            return;
        }
        this.list = data.data
        console.log(this.list,data);
        
    },
    getList(){
        console.log(this.list);
        
        return this.list
    }
}