<template>
    <div class="app-container">
      <h2>{{msg}}</h2>
      <el-button @click="test"></el-button>
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
           username: "admin",
           password: "12345"
         })).then(res => {
           console.log(res.data.code, typeof(Number(res.data.code)))
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
