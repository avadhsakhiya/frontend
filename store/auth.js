'use client'
export default {
    user:undefined,
    getUser(){
        if(this.user !== undefined){
          return this.user;
        }

     if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : undefined;
    }
        return this.user
    },
    hasLogin(){
     return this.getUser() !== undefined
    }
}