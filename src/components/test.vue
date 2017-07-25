<template>
  <div>
    <Radio-group v-model="button4" type="button" size="large" @on-change="test">
        <Radio label="全部"></Radio>
        <Radio label="今天"></Radio>
        <Radio label="明天"></Radio>
        <Radio label="后天"></Radio>
    </Radio-group>
    <br>
    <Radio-group v-model="button5" type="button" @on-change="test">
        <Radio label="全部"></Radio>
        <Radio label="女"></Radio>
        <Radio label="狗"></Radio>
        <Radio label="猪"></Radio>
    </Radio-group>
    <br>
    <Radio-group v-model="button6" type="button" size="small" @on-change="test">
        <Radio label="全部"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
    </Radio-group>
    <br>
    <Button @click="getList">登录</Button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      button4:'全部',
      button5:'全部',
      button6:'全部',
    }
  },
  created(){
    // this.getList();
  },
  methods:{
    test(){
      alert(this.button4+this.button5+this.button6);
      post(url,{time:this.b4,sdjkhs:this.b5,sjhdksaj:this.b6,})
      this.getmuinfo();
      this.shdjksh();
    },
    hdksajh(){},
    getList(){
      // url是请求的接口地址，具体请询问你们的后端
      var url ='https://cnodejs.org/api/v1/topics';
      //data是请求携带的参数，比如登录要带上用户名密码
      var data = {
        "userName":this.user,
        "passWord":this.psw
      };
      //请求头，或者是其他的一些设置内容，比如请求跨域
      //名字随便起的，和下面post的时候一致就行
      var hearder={};
      this.$http.post(url,{
        "userName":this.user,
        "passWord":this.psw
      })
      //res是请求返回的内容，通常是一个json对象
      .then(res=>{
        // alert('请求成功了！');
        console.log(res);
        this.button4 = res.body.data.timetype;
        // alert(res.body.data[0].author.loginname);
      },res=>{
        alert('请求失败了！');
      })
    },
  }
}
</script>

