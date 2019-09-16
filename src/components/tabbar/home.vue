<template>
  <div class="homeContainer">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(item, index) in lunbo" :key="index">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻咨讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
             <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
             <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
             <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
             <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
    <h1>首页</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lunbo: [
        "http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg",
        "http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg",
        "http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg"
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.homeContainer {
   
  .mint-swipe {
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .mui-content{
      ul{
        margin-top: 0;
        background-color: #fff;

        img{
            width: 60px;
            height: 60px;
        }

        li{
           .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
               font-size: 12px;
               
           }
        }

      }
      .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border-right: #fff;
        border-bottom: #fff;
      }
  }
}
</style>