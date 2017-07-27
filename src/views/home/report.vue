<template>
    <div>
      <h2>{{msg}}
      <router-link :to="'/login'" id="duer-forum"><button @click="test">登录</button></router-link>
      </h2>
      <button @click="test">testLogin</button> 

    </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
  export default {
    data() {
      return {
        msg: 'this is testUser page'
      }
    },
    methods: {
      test(){
         axios.post('http://58.251.138.41:8083/user/login', qs.stringify({
           username: "xiaolajiao",
           password: "xlj123"
         })).then(res => {
           console.log("res.data:"+res.data, typeof(res.data))
           console.log("res.data.data:"+res.data.data, typeof(res.data.data))
           console.log("res.data.code:"+res.data.code, typeof(res.data.code))
           this.testData = res.data
         }).catch(err => {
           console.log(err)
         })


      }
    }
  }
</script>

<style scoped>

</style>
