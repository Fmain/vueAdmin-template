<template>
    <div class="xxhzUser">
        <div class="tmt_top_left">
            <ul>
                <li id="selectTime1" style="height=32px;line-height:32px;">
                    <span>时间:</span>
                    <Radio-group v-model="button1" type="button" size="small">
                        <a id="alltime" @click="getInfo(id)" class="tmt_a" value="alltime">
                            <Radio label="全部 "></Radio>
                        </a>
                        <a id="today" @click="timeSelect(today)" value="today">
                            <Radio label="今天"></Radio>
                        </a>
                        <a id="lastOne" @click="timeSelect(lastOne)" value="lastOne">
                            <Radio label="昨天"></Radio>
                        </a>
                        <a id="lastseven" @click="timeSelect(lastseven);" value="lastseven">
                            <Radio label="近7天"></Radio>
                        </a>
                        <a id="lastmonth" @click="timeSelect(lastmonth)" value="lastmonth">
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
                        <a id="allsentiment" @click="checkDetails(allsentiment)" value="allsentiment">
                            <Radio label="全部 "></Radio>
                        </a>
                        <a id="positive" @click="checkDetails(positive)" value="positive">
                            <Radio label="正面"></Radio>
                        </a>
                        <a id="neutral" @click="checkDetails(neutral);" value="neutral">
                            <Radio label="中性"></Radio>
                        </a>
                        <a id="negative" @click="checkDetails(negative)" value="negative">
                            <Radio label="负面"></Radio>
                        </a>
                    </Radio-group>
                </li>
    
                <li id="media1" style="height=32px;line-height:32px;">
                    <span>媒体:</span>
                    <Radio-group v-model="button3" type="button" size="small">
                        <a id="allmedia" @click="mediaSelect(allmedia)" value="allmedia">
                            <Radio label="全部 "></Radio>
                        </a>
                        <a id="webpage" @click="mediaSelect(webpage)" value="webpage">
                            <Radio label="网页"></Radio>
                        </a>
                        <a id="weixin" @click="mediaSelect(weixin)" value="weixin">
                            <Radio label="微信"></Radio>
                        </a>
                        <a id="weibo" @click="mediaSelect(weibo)" value="weibo">
                            <Radio label="微博"></Radio>
                        </a>
                        <a id="newspaper" @click="mediaSelect(newspaper)" value="newspaper">
                            <Radio label="报刊"></Radio>
                        </a>
                        <a id="client" @click="mediaSelect(client)" value="client">
                            <Radio label="客户端"></Radio>
                        </a>
                        <a id="forum" @click="mediaSelect(forum)" value="forum">
                            <Radio label="论坛"></Radio>
                        </a>
                    </Radio-group @onchange="sjkhdakj">
                </li>
            </ul>
        </div>
    
        <div class="clear_float"></div>
    
        <div class="tabs-container">
            <a data-toggle="tab" href="#tab-1" aria-expanded="true">资讯</a>
        </div>
    
        <div class="line"></div>
        <!-- <div class="tabs-container">
                      <ul class="nav nav-tabs">
                        <li class="defaultli active " id="li1">
                          <a data-toggle="tab" href="#tab-1" aria-expanded="true">资讯</a>
                        </li>
                      </ul>
                    </div>  -->
    
        <Loading v-if="!tableColumns1"></Loading>
        <div class="" style="margin-top:20px;">
            <Table border :data="tableData1" :columns="tableColumns1"></Table>
            <div style="margin: 10px;overflow: hidden">
                <div style="float: left;">
                    <!-- <Page :total="100" :current="1" @on-change="changePage"></Page> -->
                    <Page :total="200" show-total :current="1" @on-change="changePage" show-elevator show-sizer></Page>
                </div>
            </div>
        </div>
    
    </div>
</template>
<script>

</script>

<script>
import Loading from '../__hyzx/Loading'
import axios from 'axios'
export default {
    name: 'industryinfo',
    components: {
        Loading,
    },
    data() {
        return {
            button1: true,
            button2: true,
            button3: true,
            isShow: false,
            timetype:'all',
            tableData1: [],
            tableColumns1: [
                {
                    title: '序号',
                    // type:'index',
                    key: 'name',
                    width: '100'
                },
                {
                    title: '标题',
                    key: 'status',
                },
                {
                    title: '性质',
                    key: 'portrayal',
                },
                {
                    title: '时间',
                    key: 'people',
                },
                {
                    title: '来源',
                    key: 'time',
                    render: (h, params) => {
                        return h('div', '近' + params.row.time + '天');
                    }
                },
                {
                    title: '摘要',
                    key: 'update',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].update));
                    }
                }
            ]
        }
    },
    computed: {
        name() {
            return this.$route.name
        },
        list() {
            return this.$route.matched
        },
    },
    created() {
        this.getList();
        this.getInfo();
    },
    methods: {
        getInfo(){
            axios.get('https://cnodejs.org/api/v1/topics')
            .then(res=>{
                alert('请求成功了！');
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })
        },
        dsjkahdsakj(data){
            // this.$http
            var data={
                timetype:this.timetype,
                jhdaskj:'all',
                media:'all'
            }
        },
        getList(dataType) {
            // url是请求的接口地址，具体请询问你们的后端
            var url = 'https://cnodejs.org/api/v1/topics';
            //data是请求携带的参数，比如登录要带上用户名密码
            var data = {
                "userName": this.user,
                "passWord": this.psw
            };
            //请求头，或者是其他的一些设置内容，比如请求跨域
            //名字随便起的，和下面post的时候一致就行
            var hearder = {};
            this.$http.post(url, {
                "userName": this.user,
                "pageSize": 10,
                "pageIndex": 1,
                "passWord": this.psw
            })
                //res是请求返回的内容，通常是一个json对象
                .then(res => {
                    alert('请求成功了！');
                    // console.log(res);res.meassage
                    var table = [{
                        a: '1',
                        age: '1'
                    }, {
                        name: '2',
                        age: '2'
                    }
                    ];
                    this.tableData1 = res.data;
                    // alert(res.body.data[0].author.loginname);
                }, res => {
                    alert('请求失败了！');
                })
        },
        change() {
            this.isShow = !(this.isShow)
        },
        mockTableData1() {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: '0' + Math.floor(Math.random() * 1000 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数',],
                    people: [
                        {
                            n: '0' + Math.floor(Math.random() * 1000 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '0' + Math.floor(Math.random() * 1000 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '0' + Math.floor(Math.random() * 1000 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        }
                    ],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                })
            }
            return data;
        },
        formatDate(date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        changePage() {
            // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
            this.tableData1 = this.mockTableData1();
        }
    },
    events: {
        // 分页组件传回的表格数据（这里即为服务器传回的数据）
        'data'(data) {
            this.tableList = data
        },
        // 刷新数据
        'refresh'() {
            this.refresh()
        }
    }
}
</script>

<style scoped>
.tabs-container {
    margin-top: 20px;
}

.xxhzUser {
    /* margin-top: 20px; */
    padding: 40px 0 30px 0;
    margin-left: 2%;
    width: 96%;
}

.ivu-table .demo-table-row td {
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
}

.line {
    width: 100%;
    height: 2px;
    margin: 15px 0 15px 0;
    background-color: #C1C1C1;
}
</style>


