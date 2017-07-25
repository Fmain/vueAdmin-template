<template>
  <div class="xxhzUser">
    <div class="tmt_top_left">
      <ul>
        <li id="selectTime1" style="height=32px;line-height:32px;">
          <span>时间:</span>
          <Radio-group v-model="button1" type="button" size="small">
            <a id="alltime" onclick="timeSelect('alltime');" class="tmt_a" value="alltime">
              <Radio label="全部 "></Radio>
            </a>
            <a id="today" onclick="timeSelect('today');" value="today">
              <Radio label="今天"></Radio>
            </a>
            <a id="lastOne" onclick="timeSelect('lastOne');" value="lastOne">
              <Radio label="昨天"></Radio>
            </a>
            <a id="lastseven" onclick="timeSelect('lastseven');" value="lastseven">
              <Radio label="近7天"></Radio>
            </a>
            <a id="lastmonth" onclick="timeSelect('lastmonth');" value="lastmonth">
              <Radio label="近30天"></Radio>
            </a>
            <a id="definetime" @click.prevent="change()">
              <Radio label="自定义"></Radio>
            </a>
          </Radio-group>
          <Date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间" style="width: 300px" v-show="isShow"></Date-picker>
        </li>
  
        <li id="sentiment1" style="height=32px;line-height:32px;">
          <span>情感:</span>
          <Radio-group v-model="button2" type="button" size="small">
            <a id="allsentiment" onclick="checkDetails('allsentiment');" value="allsentiment">
              <Radio label="全部 "></Radio>
            </a>
            <a id="positive" onclick="checkDetails('positive');" value="positive">
              <Radio label="正面"></Radio>
            </a>
            <a id="neutral" onclick="checkDetails('neutral');" value="neutral">
              <Radio label="中性"></Radio>
            </a>
            <a id="negative" onclick="checkDetails('negative');" value="negative">
              <Radio label="负面"></Radio>
            </a>
          </Radio-group>
        </li>
  
        <li id="media1" style="height=32px;line-height:32px;">
          <span>媒体:</span>
          <Radio-group v-model="button3" type="button" size="small">
            <a id="allmedia" onclick="mediaSelect('allmedia');" value="allmedia">
              <Radio label="全部 "></Radio>
            </a>
            <a id="webpage" onclick="mediaSelect('webpage');" value="webpage">
              <Radio label="网页"></Radio>
            </a>
            <a id="weixin" onclick="mediaSelect('weixin');" value="weixin">
              <Radio label="微信"></Radio>
            </a>
            <a id="weibo" onclick="mediaSelect('weibo');" value="weibo">
              <Radio label="微博"></Radio>
            </a>
            <a id="newspaper" onclick="mediaSelect('newspaper');" value="newspaper">
              <Radio label="报刊"></Radio>
            </a>
            <a id="client" onclick="mediaSelect('client');" value="client">
              <Radio label="客户端"></Radio>
            </a>
            <a id="forum" onclick="mediaSelect('forum');" value="forum">
              <Radio label="论坛"></Radio>
            </a>
          </Radio-group>
        </li> 
      </ul>
    </div>

    <div class="line"></div>
  
    <div class="tabs-container">
      <ul class="nav nav-tabs">
        <li class="defaultli active " id="li1">
          <a data-toggle="tab" href="#tab-1" aria-expanded="true">资讯</a>
        </li>
      </ul>
    </div>
    
    <Loading></Loading>
    <!-- <div class="" style="margin-top:20px;">
      <Table border :data="tableData1" :columns="tableColumns1"></Table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: left;">
          <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
      </div>
    </div> -->
  
  </div>
</template>

<script>
import Loading from '../__hyzx/Loading'
export default {
  components: {
    Loading,
  },
  data() {
    return {
      button1: true,
      button2: true,
      button3: true,
      isShow: false,
    }
  },
  methods:{
    change() {
      this.isShow = !(this.isShow)
    },
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "src/styles/yuan.scss";
.xxhzUser {
    // margin-top: 20px;
    padding: 40px 0 30px 0;
    margin-left: 2%;
    width: 96%;
}

.line{
    width: 100%;
    height: 2px;
    margin: 15px 0 15px 0;
    background-color: #C1C1C1;
}

</style>