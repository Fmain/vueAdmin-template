<template>
    <!--<router-link :to="'/Login'" @click="handleClick">注册</router-link>-->
    <!--<router-link :to="'/Login'" @click="handleClick">登陆</router-link>-->
  <div class="index-container">
    <div class="header-wraper">
      <div class="out-box">
        <div class="box-header">
          <a class="Dueros-header-left" href="#">
            <img class="img" src="assets/index/index-logo.png" />
            <span class="center-text">&middot;</span>
            <span class="h-text">智训咨询服务平台</span>
          </a>
          <div class="Dueros-header-right">
            <ul class="login-pass">

              <li>
                <a href="#">首页</a>
              </li>
              <li class="duer-scheme">
                <a class="duer-scheme-a">指数</a>
                <div class="duer-sub-nav">
                  <div class="duer-nav-sub-col">
                    <div class="duer-nav-sub-block">
                      <div class="duer-nav-sub-title">指数模块</div>
                      <div class="duer-nav-sub-content">
                        <a href="#" class="duer-sub-l2 duer-sub-l2-h">指数1个人模块</a>
                        <a href="#" class="duer-sub-l2 duer-sub-l2-h">指数2轻量模块</a>
                        <a href="#" class="duer-sub-l2">指数3标准模块</a>
                        <a href="#" class="duer-sub-l2">指数4模块</a>
                        <a href="#" class="duer-sub-l2">指数5模块</a>
                        <a href="#" class="duer-sub-l2">指数6模块</a>
                        <a href="#" class="duer-sub-l2">指数7模块</a>
                      </div>
                    </div>
                  </div>
                  <div class="duer-nav-sub-col">
                    <div class="duer-nav-sub-block">
                      <div class="duer-nav-sub-title">指数场景</div>
                      <div class="duer-nav-sub-content">
                        <a href="#" class="duer-sub-l2 duer-sub-l2-h">指数1模块</a>
                        <a href="#" class="duer-sub-l2 duer-sub-l2-h">指数2模块</a>
                        <a href="#" class="duer-sub-l2">指数3模块</a>
                        <a href="#" class="duer-sub-l2">指数4模块</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="duer-resource">
                <a href="#">舆情</a>
              </li>
              <li class="duer-supp">
                <a class="duer-supp-a">报告</a>
                <ul class="duer-second-nav">
                  <li>
                    <a href="#">技术</a>
                  </li>
                  <li>
                    <a href="#">新闻</a>
                  </li>
                  <li>
                    <a href="#">我们</a>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="'/login'" id="duer-forum">登陆</router-link>
                <!--<a id="duer-forum" href="#">登录</a>-->
              </li>

            </ul>
            <!--<div class="Dueros-personal-info">-->

            <!--<a id="loginUrl0" class="entry-link" href="#">登录</a>-->
            <!--</div>-->

          </div>
        </div>
      </div>
      <div class="header-shadow"></div>
    </div>
    <div class="box-main">
      <div class="banner jcarousel">
        <ul>
          <li class="banner-img1">
            <div class="index-banner"></div>
            <div class="banner-title">
              <h1>智训咨询服务平台</h1>
              <p>简单 专业 精准 务实</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="video-box">
        <div class="example-intr">
          <a href="#" target="blank">
            <img class="show-img video-img" src="assets/index/index-banner1.jpg">
            <div class="intr-text">
              <h4>行业指数</h4>
              <p>ICT行业、金融行业发展关键指数 </p>
            </div>
          </a>
        </div>
        <div class="example-intr">
          <a href="#">
            <img class="show-img" src="assets/index/index-banner2.jpg">
            <div class="intr-text">
              <h4>舆情监测</h4>
              <p>覆盖行业资讯、市场动态、竞品分析、社会热点、安全稳定等重要领域的舆情</p>
            </div>
          </a>
        </div>
        <div class="example-intr">
          <a href="#">
            <img class="show-img" src="assets/index/index-banner3.jpg">
            <div class="intr-text">
              <h4>深度报告</h4>
              <p>专家团队编制精品深度研究报告，全面研究市场动态、行业发展、政策动向、社会舆情等各个领域。</p>
            </div>
          </a>
        </div>
        <div class="example-intr">
          <a href="#">
            <img class="show-img" src="assets/index/index-banner4.png">
            <div class="intr-text">
              <h4>智训技术课堂</h4>
              <p>智训视频教程旨在帮助开发者快速入门，更加全面的了解智训的系列产品及服务</p>
            </div>
          </a>
        </div>
      </div>
      <section class="lead-box">
        <h3 class="sub-title">新手指引</h3>
        <p class="sub-intr">通过智训开放平台，仅需简单4步，即可帮助您完成产品从创建到商用，从0到1打造您的专属人工智能产品</p>
        <div class="step-box">
          <div class="lead-step-content">
            <div class="lead-step-item step-active">
              <a href="#">
                <div class="lead-test step-one"></div>
                <h2>1.成为开发者</h2>
                <p>&gt;马上开始&lt;</p>
              </a>
            </div><div class="lead-step-dot"><img src="assets/index/index-connectdot.png"></div>
            <div class="lead-step-item
                      ">
              <a href="#">
                <div class="lead-test step-two"></div>
                <h2>2.创建产品</h2>
              </a>
            </div>
            <div class="lead-step-dot"><img src="assets/index/index-connectdot.png"></div>
            <div class="lead-step-item
                      ">
              <a href="#">
                <div class="lead-test step-three"></div>
                <h2>3.集成开发</h2>
              </a>
            </div>
            <div class="lead-step-dot"><img src="assets/index/index-connectdot.png"></div>
            <div class="lead-step-item
                      ">
              <a href="#">
                <div class="lead-test step-four"></div>
                <h2>4.应用审核</h2>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="duer-adv">
        <h3 class="sub-title">智训的优势</h3>
        <div class="item-adv">
          <img src="assets/index/index-adv1.png" class="img-adv" />
          <div class="adv-des">
            <p style="width: 156px;">智训整合了<br>世界顶尖人工智能<br>语音图像技术</p>
          </div>
        </div>
        <div class="item-adv">
          <img src="assets/index/index-adv2.png" class="img-adv" />
          <div class="adv-des">
            <p style="width: 176px;">智训能帮助<br>企业开发者<br>一站式实现人工智能</p>
          </div>
        </div>
        <div class="item-adv">
          <img src="assets/index/index-adv3.png"  class="img-adv" />
          <div class="adv-des">
            <p style="width: 195px;">智训耗能很少<br>却可以满足几十个场景<br>10大类目100多项功能</p>
          </div>
        </div>
        <div class="item-adv">
          <img src="assets/index/index-adv4.png" class="img-adv" />
          <div class="adv-des">
            <p style="width: 191px;">智训内容资源丰富<br>且开放互通</p>
          </div>
        </div>
      </section>
      <section class="case-box">
        <h3 class="sub-title">解决方案</h3>
        <p class="sub-intr">智训为您提供8大解决方案，极大降低您使用人工智能对话系统的门槛，强力促进产业升级</p>
        <div class="case-items">
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme4.jpg">
              <h3>音箱</h3>
              <p>您可以直接和音箱对话，通过语音完成设定日程、提醒、获取服务、家庭设备控制等操作</p>
            </a>
          </div>
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme5.png">
              <h3>TV</h3>
              <p>搭载了智训的智能电视，可以用语音完成设备控制、影视资源搜索及播放等操作</p>
            </a>
          </div>
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme3.jpg">
              <h3>冰箱</h3>
              <p>搭载了智训的智能冰箱可以通过语音交互，提供食材管理、食谱查询等服务</p>
            </a>
          </div>
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme8.jpg">
              <h3>Dev. Kit</h3>
              <p>专为硬件厂商设计的远场语音交互解决方案，帮你快速体验智训功能</p>
            </a>
          </div>
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme6.jpg">
              <h3>兼容服务</h3>
              <p>已搭载Alexa能力的设备，可以通过兼容协议简单快速地接入智训</p>
            </a>
          </div>

          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme2.png">
              <h3>轻量级设备</h3>

              <p>智训为设备及模组厂商、硬件开发者提供的，端到端的一站式硬件接入方案</p>
            </a>
          </div>
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme7.jpg">
              <h3>SSML</h3>
              <p>独具特色的SSML解决方案，可以赋予语音更个性的TTS，甚至可以添加背景音乐</p>
            </a>
          </div>
          <div class="case-item">
            <a href="#">
              <img src="assets/index/index-scheme1.png">
              <h3>手机语音助手</h3>
              <p>您的智能助理，通过对话式交互提供日程提醒、智能导航、信息查询、聊天陪伴等服务</p>
            </a>
          </div>
        </div>
        <p class="case-all"><span class="case-txt">查看全部</span><span class="case-more"></span></p>

      </section>
      <section class="example-box">
        <h3 class="sub-title">合作案例</h3>
        <ul class="item-box">
          <li class="item">
            <img src="assets/index//index-fushikang.png">
            <p>富士康</p>
          </li>
          <li class="item">
            <img src="assets/index/index-bbk.png">
            <p>步步高</p>
          </li>
          <li class="item">
            <img src="assets/index/index-botai.png">
            <p>博泰</p>
          </li>
          <li class="item">
            <img src="assets/index/index-fm.png">
            <p>喜马拉雅FM</p>
          </li>
          <li class="item">
            <img src="assets/index/index-anker.png">
            <p>Anker</p>
          </li>
          <li class="item">
            <img src="assets/index/index-aofei.png">
            <p>奥飞</p>
          </li>
          <li class="item">
            <img src="assets/index/index-armoto.png">
            <p>ARMOTO</p>
          </li>
        </ul>
        <p class="case-all2"><span class="case-txt2">查看全部</span><span class="case-more2"></span></p>
      </section>
      <section class="to-exp">
        <p class="exp-p">准备好了？开始体验！</p>
        <h1 class="exp-intr">智训让用户用最自然的方式与设备交互，快来开启您的人工智能新时代吧！</h1>
        <a class="exp-a" href="#">开始体验</a>
      </section>

    </div>
    <div class="footer-wraper">
    <footer class="footer2">
      <div class="duer-qrcode"><img src="assets/index/index-qrcode.png" width="144">
        <p>微信公众号，请扫码关注我们</p></div>
      <div class="in-box">
        <div class="link-box">
          <div class="link duer-contact">
            <a class="f-gray" href="mailto:xxxx@xx.com">E-Mail：yinzhonglin@caict.ac.cn</a>
          </div>
          <div class="duer-footer-right">
            <div class="link">
              <h4 class="con-p">解决方案</h4>
              <a href="#" class="link-gray">
                场景解决方案
              </a>
              <a href="#" class="link-gray">
                开发套件解决方案
              </a>
            </div>
            <div class="link">
              <h4 class="con-p">资源中心</h4>
              <a href="#" class="link-gray">
                新手指南
              </a>
              <a href="#" class="link-gray">
                智训协议文档
              </a>

              <a href="#" class="link-gray">
                智训兼容服务
              </a>
              <a href="#" class="link-gray">
                智训 SDK下载
              </a>
            </div>
            <div class="link">
              <h4 class="con-p">帮助与支持</h4>
              <a href="#" class="link-gray">
                技术课堂
              </a>
              <a href="#" class="link-gray">
                新闻中心
              </a>
              <a href="#" class="link-gray">
                关于我们
              </a>
            </div>
            <div class="link">
              <h4 class="con-p">友情链接</h4>
              <a href="#" class="link-gray" target="blank">
                智训官网
              </a>
              <a href="#" class="link-gray" target="blank">
                智训大脑
              </a>
              <a href="#" class="link-gray" target="blank">
                智训平台
              </a>
              <a href="#" class="link-gray" target="blank">
                智训微博
              </a>
              <a href="#" class="link-gray" target="blank">
                智训贴吧
              </a>
            </div>
          </div>
        </div>
        <a class="copyright" href="#">©2007-2017 深圳信息通信研究院.</a>
      </div>
    </footer>
  </div>
  </div>
</template>

<script>
</script>

<style>
  /*blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}*/
  button,input,select,textarea{margin:0}
  html{box-sizing:border-box}
  audio,embed,img,object,video{height:auto;max-width:100%}
  html{box-sizing:border-box}
  *{box-sizing:inherit}
  :after,:before{box-sizing:inherit}
  iframe{border:0}
  table{border-collapse:collapse;border-spacing:0}
  td,th{padding:0;text-align:left}
  body{position:relative;min-width:1200px;font-size:12px;font-family:tahoma,arial,"Hiragino Sans GB","Microsoft YaHei",sans-serif;color:#333}
  img{border:none}
  a,a:link,a:visited{text-decoration:none;outline:0}
  .out-box{position:fixed;z-index:8;top:0;width:100%;height:60px;background:#000}
  .out-box ul{list-style:none;padding:0}
  .header-shadow{height:60px}
  .box-header{width:1200px;margin:0 auto;font-family:tahoma,arial,"Hiragino Sans GB","Microsoft YaHei",sans-serif;position:relative;text-align:center;line-height:60px}
  .box-header a:hover{color:#2c93ff;text-decoration:none}
  .box-header .Dueros-header-left{float:left;color:#fff;font-size:16px}
  .box-header .Dueros-header-left img{display:inline-block;width:167px;height:60px;vertical-align:middle;margin-top:0}
  .box-header .Dueros-header-left:hover{cursor:pointer;color:#fff}
  .box-header .Dueros-header-left .center-text,.box-header .Dueros-header-left .h-text{vertical-align:middle}
  .box-header .Dueros-header-left .center-text{padding:0 5px}
  .box-header .Dueros-header-right{font-size:14px}
  .box-header .Dueros-header-right .login{float:left;color:#fff;margin-right:30px}
  .box-header .Dueros-header-right .login:hover{cursor:pointer}
  .box-header .Dueros-header-right .entry-link{float:left;margin-right:36px}
  .box-header .Dueros-header-right .vertical-line{float:left;color:#92959c}
  .Dueros-personal-info a{color:#fff}
  .Dueros-personal-info a:hover{color:#2c93ff}
  .already-login:hover .log-out{display:block}
  .log-out .out-a{color:#333;opacity:1}
  .log-out .out-a:hover{color:#1889ff}
  .login-pass{float:left;list-style:none;margin:0 0 0 125px}
  .login-pass li{float:left;color:#fff;font-size:14px;padding:0}
  .login-pass li:hover{background:#272727}
  .login-pass a{display:inline-block;margin:0 20px;color:#fff;text-decoration:none;cursor:pointer}
  .login-pass a:hover{color:#2c93ff}
  .login-pass .active{color:#fff;opacity:1}
  .login-pass .duer-supp{transition:all .3s;cursor:default}
  .login-pass .duer-supp .duer-supp-a{cursor:default}
  .login-pass .duer-supp:hover .duer-supp-a{cursor:default}
  .login-pass .duer-supp:hover .duer-second-nav{display:block;transition:all .2s;-moz-transition:all .2s;-webkit-transition:all .2s;-o-transition:all .2s;}
  .login-pass .duer-second-nav{display:none;overflow:hidden;background:#000;margin:0}
  .login-pass .duer-second-nav li{float:none}
  .login-pass .duer-scheme{cursor:default}
  .login-pass .duer-scheme .duer-scheme-a{cursor:default}
  .login-pass .duer-scheme:hover .duer-sub-nav{display:block}
  .login-pass .duer-sub-nav{display:none;position:absolute;left:106px;top:60px;width:800px;background-color:rgba(0,0,0,.9);text-align:left;transition-property:opacity;transition-duration:.2s}
  .login-pass .duer-sub-nav .duer-nav-sub-block{box-sizing:border-box;padding:23px 20px 30px 28px;height:233px}
  .login-pass .duer-sub-nav .duer-nav-sub-block:hover{background-color:#272727}
  .login-pass .duer-sub-nav .duer-nav-sub-col{width:400px;float:left}
  .login-pass .duer-sub-nav .duer-nav-sub-col .duer-nav-sub-title{color:#fff;font-size:18px;line-height:30px}
  .login-pass .duer-sub-nav .duer-nav-sub-col .duer-nav-sub-content{margin-top:16px;line-height:26px}
  .login-pass .duer-sub-nav .duer-nav-sub-col .duer-nav-sub-content .duer-sub-l2{color:#ababab;display:inline-block;font-size:14px;margin:10px 16px 0 0}
  .login-pass .duer-sub-nav .duer-nav-sub-col .duer-nav-sub-content .duer-sub-l2:hover{color:#2c93ff}
  .login-pass .duer-sub-nav .duer-nav-sub-col .duer-nav-sub-content .duer-sub-l2-h{margin-top:0}
  .no-hover .duer-scheme-a{color:#2c93ff}
  .no-hover .duer-supp-a{color:#2c93ff}
  .footer2{background-color:#1E1E1E;font-family:tahoma,arial,"Hiragino Sans GB","Microsoft YaHei",sans-serif;padding-bottom:185px}
  .footer2 .duer-qrcode{width:100%;text-align:center;padding-top:80px}
  .footer2 .duer-qrcode p{font-size:18px;color:#FFF;margin-top:15px}
  .footer2 .in-box{width:1200px;margin:70px auto 0 auto}
  .footer2 .link{float:left;color:#fff}
  .footer2 .link .con-p{margin:0;padding-bottom:29px;font-size:18px}
  .footer2 .link .f-gray,.footer2 .link .link-gray{opacity:.5;font-size:14px;color:#FFF;line-height:26px}
  .footer2 .link .f-gray{display:block}
  .footer2 .link .link-gray{display:block}
  .footer2 .duer-contact{box-sizing:border-box;width:290px;height:137px;border-right:1px solid #333;margin-top:50px;padding-right:90px}
  .footer2 .duer-footer-right{overflow:hidden}
  .footer2 .duer-footer-right .link{width:16%;margin:0 0 0 80px}
  .footer2 .link-box{overflow:hidden}
  .footer2 .copyright{clear:both;text-align:center;display:block;margin-top:40px;color:rgba(163,167,178,.5)}
  .footer{background-color:#282832}
  .footer .in-box{width:1180px;margin:0 auto;overflow:auto;padding-top:38px}
  .footer .f-top{overflow:auto;padding-bottom:32px;border-bottom:1px solid rgba(163,167,178,.1)}
  .footer .link{float:left;font-size:16px;color:#fff}
  .footer .link p{padding-bottom:12px}
  .footer a{font-size:12px;color:#a3a7b2}
  .footer .contact{float:left;margin-left:132px;color:#fff}
  .footer .contact .p-con{padding-bottom:12px;font-size:16px}
  .footer .contact .f-gray{color:#a3a7b2}
  .footer .copyright{padding-top:22px;padding-bottom:25px;color:rgba(163,167,178,.5)}
  .dialog-sub .p-msg{padding-top:14px;font-size:18px;color:#071639}
  .dialog-sub .msg-sub{font-size:14px;color:#888d99}
  .dialog-sub .con-btn{width:120px;height:40px;margin-top:38px;border-radius:2px;font-size:14px;color:#fff;background:#0073eb;border:none}
  .dialog-sub .con-btn:hover{background:#3095ff}
  .dialog-sub .close-dialog{width:16px;position:absolute;top:10px;right:10px;cursor:pointer}
  ul{list-style:none}
  .shadow{box-shadow:0 1px 2px 2px #eee}
  body{background:#fff}
  .sub-title{width:100%;padding-top:80px;text-align:center;font-size:30px;color:#333;letter-spacing:2px}
  .sub-intr{display:block;width:500px;margin:15px auto 0 auto;text-align:center;font-size:16px;color:#666;letter-spacing:0;line-height:27px}
  .box-main{min-width:1200px;margin:0 auto}
  .box-main .new-header{text-align:center}
  .box-main .video-box{padding:80px 0 5px 0;width:1200px;margin:0 auto;overflow:hidden}
  .box-main .video-box .switch{display:inline-block;width:10px;height:10px;border-radius:50%;background:#ccc}
  .box-main .example-intr{position:relative;float:left;width:280px;height:auto;margin-left:20px;cursor:pointer}
  .box-main .example-intr:first-child{margin-left:10px}
  .box-main .example-intr:hover{box-shadow:0 1px 2px 2px #eee}
  .box-main .example-intr .show-img{width:100%;height:280px}
  .box-main .example-intr .vedioplay-icon{position:absolute;top:20%;left:50%;transform:translateX(-50%)}
  .box-main .example-intr .intr-text{height:161px;padding:18px 20px 0 20px;text-align:center}
  .box-main .example-intr .intr-text h4{line-height:24px;font-size:16px;color:#071639}
  .box-main .example-intr .intr-text p{padding-top:12px;line-height:25px;font-size:14px;color:#9297a4}
  .box-main .bg-box{padding-bottom:80px;background:#f8f9fb}
  .box-main .lead-box{width:1200px;margin:0 auto;overflow:hidden}
  .box-main .lead-box .step-box{width:1170px;height:430px;margin:30px auto 0 auto;border:1px solid #E4E4E4}
  .box-main .lead-box .lead-step-content{width:1018px;height:100%;margin:0 auto}
  .box-main .lead-box .lead-step-dot,.box-main .lead-box .lead-step-item{float:left}
  .box-main .lead-box .lead-step-dot{margin:170px 20px 0 20px}
  .box-main .lead-box .lead-step-item{width:160px;padding-top:104px;height:100%;text-align:center}
  .box-main .lead-box .lead-step-item .lead-test{width:52px;height:135px;margin:0 auto;background:url(../../assets/index/index-step.png) no-repeat;background-size:225px 542px;transition:width .2s;-moz-transition:width .2s;-webkit-transition:width .2s;-o-transition:width .2s;}
  .box-main .lead-box .lead-step-item .step-one{background-position:0 0}
  .box-main .lead-box .lead-step-item .step-one:hover{width:135px;background-position:-91px 0}
  .box-main .lead-box .lead-step-item .step-two{background-position:0 -136px}
  .box-main .lead-box .lead-step-item .step-two:hover{width:135px;background-position:-91px -136px}
  .box-main .lead-box .lead-step-item .step-three{width:54px;background-position:0 -272px}
  .box-main .lead-box .lead-step-item .step-three:hover{width:135px;background-position:-91px -272px}
  .box-main .lead-box .lead-step-item .step-four{background-position:0 -408px}
  .box-main .lead-box .lead-step-item .step-four:hover{width:135px;background-position:-91px -408px}
  .box-main .lead-box .lead-step-item h2{margin-top:30px;font-size:24px;color:#333;letter-spacing:2px}
  .box-main .lead-box .lead-step-item p{font-size:14px;color:#000;margin-top:14px}
  .box-main .lead-box .step-active{border-bottom:3px solid #000}
  .box-main .lead-box .step-active .step-one{width:135px;background-position:-91px 0}
  .box-main .lead-box .step-active .step-two{width:135px;background-position:-91px -136px}
  .box-main .lead-box .step-active .step-three{width:135px;background-position:-91px -272px}
  .box-main .lead-box .step-active .step-four{width:135px;background-position:-91px -408px}
  .box-main .duer-adv{height:473px;width:1200px;margin:0 auto 0 auto;overflow:hidden}
  .box-main .duer-adv .item-adv{float:left;width:25%;position:relative;text-align:center}
  .box-main .duer-adv .item-adv .img-adv{width:80px;margin-top:46px}
  .box-main .duer-adv .item-adv .adv-des{margin:46px 0 100px 0}
  .box-main .duer-adv .item-adv .adv-des h2{font-size:18px;color:#333;letter-spacing:2px}
  .box-main .duer-adv .item-adv .adv-des p{display:block;text-align:left;font-size:18px;color:#333;letter-spacing:1.5px;margin:20px auto 0 auto;font-weight:200;line-height:25px}
  .box-main .case-box{width:100%;background:#F4F5F7}
  .box-main .case-box .case-items{width:1180px;height:765px;margin:40px auto 0 auto;overflow:hidden;-moz-transition:height .5s;-webkit-transition:height .5s;-o-transition:height .5s;-ms-transition:height .5s;transition:height .5s}
  .box-main .case-box .case-items .case-item{text-align:center;width:370px;height:350px;float:left;background:#fff;margin:0 0 60px 35px}
  .box-main .case-box .case-items .case-item:nth-child(3n+1){margin-left:0}
  .box-main .case-box .case-items .case-item h3{font-size:18px;color:#333;line-height:25px;margin:16px 0 10px 0}
  .box-main .case-box .case-items .case-item p{padding:0 30px;font-size:14px;color:#999;line-height:26px}
  .box-main .case-box .case-items .case-item:hover{box-shadow:0 1px 2px 2px #eee}
  .box-main .case-box .case-all{padding:30px 0 80px 0;text-align:center;font-size:20px;color:#333;vertical-align:middle;cursor:pointer}
  .box-main .case-box .case-all .case-more{width:13px;height:7px;margin-top:-4px;display:inline-block;vertical-align:middle;margin-left:8px;background:url(../../assets/index/index-look-more.png) no-repeat;background-size:26px 7px;background-position:0 0}
  .box-main .case-box .case-all .case-hide{background-position:-14px 0}
  .box-main .case-box .case-active{height:1175px}
  .box-main .to-exp{position:relative;margin-top:75px;font-size:14px;text-align:center}
  .box-main .to-exp .exp-p{width:100%;font-size:30px;color:#333;letter-spacing:2px;font-weight:500}
  .box-main .to-exp .exp-intr{width:100%;font-size:16px;color:#666;line-height:50px}
  .box-main .to-exp .exp-a{display:block;margin:18px auto 100px auto;width:212px;line-height:60px;color:#fff;background:#0073eb;font-size:20px}
  .box-main .to-exp .exp-a:hover{background:#3095ff}
  .box-main .example-box{width:1200px;margin:0 auto;overflow:hidden}
  .box-main .example-box .item-box{overflow:hidden;margin-left:-15px;margin-top:70px;height:234px;-moz-transition:height .5s;-webkit-transition:height .5s;-o-transition:height .5s;-ms-transition:height .5s;transition:height .5s}
  .box-main .example-box .item{float:left;width:224px;height:102px;margin-left:15px;margin-bottom:30px;text-align:center;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;-moz-transition:transform .2s,-moz-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s,-moz-transform .2s}
  .box-main .example-box .item p{font-size:14px;color:#999;padding-top:15px;line-height:2}
  .box-main .example-box .item img{width:159px}
  .box-main .example-box .item:hover{-webkit-transform:translateY(-6px);-moz-transform:translateY(-6px);-ms-transform:translateY(-6px);transform:translateY(-6px)}
  .box-main .example-box .case-all2{padding:30px 0 0 0;text-align:center;font-size:20px;color:#333;vertical-align:middle;cursor:pointer}
  .box-main .example-box .case-all2 .case-more2{width:13px;height:7px;margin-top:-4px;display:inline-block;vertical-align:middle;margin-left:8px;background:url(../../assets/index/index-look-more.png) no-repeat;background-size:26px 7px;background-position:0 0}
  .box-main .example-box .case-all2 .case-hide2{background-position:-14px 0}
  .box-main .example-box .example-active{height:760px}
  .dialog-sub .p-msg{padding-top:14px;font-size:18px;color:#071639}
  .dialog-sub .msg-sub{font-size:14px;color:#888d99}
  .dialog-sub .con-btn{width:120px;height:40px;margin-top:38px;border-radius:2px;font-size:14px;color:#fff;background:#1889ff;border:none}
  .dialog-sub .con-btn:hover{background:#167be5}
  .dialog-sub .close-dialog{width:16px;position:absolute;top:10px;right:10px;cursor:pointer}
  .banner{width:100%;max-height:525px;position:relative;overflow:hidden}
  .banner .banner-pagination{position:absolute;font-size:0;width:192px;bottom:24px;left:50%;margin-left:-96px}
  .banner .banner-pagination a{display:inline-block;background-color:rgba(255,255,255,.2);cursor:pointer;margin-left:6px;width:60px;height:12px}
  .banner .banner-pagination a:first-child{margin-left:0}
  .banner .banner-pagination .active{background-color:#fff}
  .jcarousel ul{width:300%;position:relative;list-style:none;margin:0;padding:0}
  .jcarousel li{position:relative;float:left;width:33.333%}
  .jcarousel li img{width:100%}
  .jcarousel li .index-banner{width:100%;height:525px;background:url(../../assets/index/index-banner.jpg) center center no-repeat;background-size:cover}
  .jcarousel li .banner-title{position:absolute;top:50%;left:50%;color:#fff;text-align:center;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}
  .jcarousel li .banner-title h1{font-size:48px}
  .jcarousel li .banner-title p{margin-top:13px;margin-right:-17.5px;font-size:16px;letter-spacing:19px;line-height:28px}
</style>
