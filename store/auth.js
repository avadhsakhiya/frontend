'use client'
export default {
    user:undefined,
    getUser(){
        if(this.user !== undefined){
          return this.user;
        }
        const user =  JSON.parse(localStorage.getItem('user'))
        this.user = user
        return this.user
    },
    hasLogin(){
     return this.getUser() !== undefined
    }
}