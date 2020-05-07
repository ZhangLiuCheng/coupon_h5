<template>
  <div id="app">
    <div class="content">
      <div class="download">
        <img class="download_img" src="../../assets/logo.png">
        <div class="download_info">
          <i class="download_info_title">淘点钱</i>
          <i class="download_info_des">超值精选商品，轻松获取佣金</i>
        </div>
        <i class="download_btn" @click="download">APP下载</i>
      </div>

      <img class="pict" :src="goods.pict_url">

      <div class="title_coupon">
        <i class="title_coupon_tt">
          {{goods.title}}
        </i>
        <i class="title_coupon_juan">
          $0
        </i>
      </div>

      <div class="price">
        <i class="price_deal">
          $100
        </i>
        <i class="price_final">
          $150
        </i>
        <i class="price_commission">
          $10
        </i>
      </div>
      <i class="buy_btn" @click="coupon">去购买</i>
    </div>

    <div class="dialog" v-if="showDialog" @click="hideDialog">

      <div class="pop">

        <div class="pop_koulin">asdf</div>

        <div class="pop_des">
          <i>復制文字 - 在</i>
          <img class="pop_des_taobao" src="../../assets/taobao.png"></img>
          <i>中da開</i>
        </div>

        <i class="pop_copy_btn" @click="coupon">复制</i>

      </div>
      <div class="line"></div>
      <img class="pop_close_btn" src="../../assets/close.png"></img>
    </div>
  </div>
</template>

<script>
  import http from "../../js/http.js";

  export default {
    name: 'Share',
    data() {
      return {
        goods: {},
        showDialog: false,
      }
    },
    created() {
      this.requestData();
    },
    methods: {
      requestData: function () {
        let params = {"id": "614507834887"};
        http.fetchPost('/goods/detail', params).then((response) => {
          this.goods = response.data.data
          console.log("requestGoodsDetail::success", this.goods);

        }, (error) => {
          console.log("requestGoodsDetail::error", error);
        });
      },

      download: function () {
        window.location.href = "http://192.168.0.109:8080/download.html";
      },

      coupon: function () {
        this.showDialog = true;
      },

      hideDialog: function () {
        this.showDialog = false;
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .download {
    display: flex;
    flex-direction: row;
    padding: 0.8rem 0.5rem;
    align-items: center;
  }

  .download_img {
    width: 2.5rem;
    height: 2.5rem;
  }

  .download_info {
    flex: 1;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .download_info_title {
    font-size: 1rem;
  }

  .download_info_des {
    font-size: 0.5rem;
    color: #444444;
  }

  .download_btn {
    width: 5rem;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: #FF2C56;
    font-size: 0.4rem;
    color: #ffffff;
    text-align: center;
    border-radius: 1rem;
  }

  .pict {
    width: 100vw;
    height: 100vw;
  }

  .title_coupon {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
  }

  .title_coupon_tt {
    flex: 1;
    font-size: 0.9rem;
    color: #333333;
  }

  .title_coupon_juan {
    margin-left: 1rem;
  }

  .price {
    display: flex;
    flex-direction: row;
    padding: 0.5rem;
    align-items: baseline;
  }

  .price_deal {
    color: #FF2C56;
    font-size: 1.5rem;
  }

  .price_final {
    flex: 1;
    margin-left: 1rem;
    color: #888888;
    font-size: 1rem;
    text-decoration: line-through;
  }

  .price_commission {

  }

  .buy_btn {
    width: 80%;
    height: 2.4rem;
    line-height: 2.4rem;
    background-color: #FF2C56;
    font-size: 0.8rem;
    color: #ffffff;
    text-align: center;
    border-radius: 1rem;
    position: absolute;
    left: 10%;
    bottom: 1.4rem;
  }

  .dialog {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pop {
    width: 80%;
    background-color: white;
    margin-top: 6rem;
    padding: 1.6rem 1rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .pop_koulin {
    margin-top: 0.6rem;
    width: 12rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.6rem;
    text-align: center;
    background:url("https://coupon118.oss-cn-shanghai.aliyuncs.com/h5/bg_koulin.png") no-repeat 100% 100%
  }

  .pop_des {
    font-size: 1rem;
    color: #333333;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.2rem;
  }

  .pop_des_taobao {
    width: 1.3rem;
    height: 1.3rem;
  }

  .pop_copy_btn {
    width: 70%;
    height: 2.4rem;
    line-height: 2.4rem;
    background-color: #FF2C56;
    font-size: 0.8rem;
    color: #ffffff;
    text-align: center;
    border-radius: 1rem;
    left: 15%;
    margin-top: 2rem;
  }

  .line {
    width: 1px;
    height: 1.5rem;
    background-color: white;
  }

  .pop_close_btn {
    width: 2rem;
    height: 2rem;
    margin-top: -2px;
  }
</style>
