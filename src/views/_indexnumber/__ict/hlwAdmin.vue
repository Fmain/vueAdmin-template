<template>
    <div class="app-container">
      <h2>{{msg}}</h2>
      <el-button @click="test"></el-button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'this is testUser page'
      }
    },
    methods: {
      test(){
         this.$http.post("http://10.35.16.70:8080/myinfo/timeS",{
            times: "today",
            inclination: "allsentiment",
            mediatmp: "allmedia",
            flag :0
            },{emulateJSON:true})
        .then(function (res) {
              alert('请求成功了！');
              console.log(res.data)
            },function (err) {
            // 处理失败的结果
            console.log('error:'+err)
            }
        );

      }
    }
  }
</script>

<style scoped>

</style>
