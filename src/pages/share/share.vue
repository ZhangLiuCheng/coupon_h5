<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div id="app">
    <div class="content">
      <div class="download">
        <img class="download_img" src="../../assets/logo.png">
        <div class="download_info">
          <label class="download_info_title">淘点钱</label>
          <label class="download_info_des">超值精选商品，轻松获取佣金</label>
        </div>
        <label class="download_btn" @click="download">APP下载</label>
      </div>

      <img class="pict" :src="goods.pict_url">

      <div class="title_coupon">
        <label class="title_coupon_tt">
          {{goods.title}}
        </label>
        <label class="title_coupon_juan">
          ¥{{price_coupon}} 劵
        </label>
      </div>

      <div class="price">
        <label class="price_deal">
          ¥{{price_deal}}
        </label>
        <label class="price_final">
          ¥{{price_final}}
        </label>
        <label class="price_commission" v-if="price_commision != '' && price_commision != null && price_commision != '0'">
          预估返佣 ¥{{price_commision}}
        </label>
      </div>
      <label class="buy_btn" @click="coupon">去购买</label>
    </div>

    <div class="dialog" v-if="showDialog" @click="hideDialog">

      <div class="pop">

        <div class="pop_koulin">{{kou_lin}}</div>

        <div class="pop_des">
          <i>復制文字 - 在</i>
          <img class="pop_des_taobao" src="../../assets/taobao.png"/>
          <i>中da開</i>
        </div>

        <label class="pop_copy_btn" @click="coupon" v-clipboard:copy="kou_lin">复制</label>

      </div>
      <div class="line"></div>
      <img class="pop_close_btn" src="../../assets/close.png"/>
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
        price_final: '',
        price_deal: '',
        price_coupon: '',
        price_commision: '',
        kou_lin: '',
      }
    },
    created() {
      try {
        let url = window.location.href;
        let cs_arr = url.split('?')[1].split('&');
        let cs = {};
        for (let i = 0; i < cs_arr.length; i++) {
          let kv = cs_arr[i].split('=');
          cs[kv[0]] = kv[1]
        }
        this.price_final = cs['pf'];
        this.price_deal = cs['pd'];
        this.price_coupon = cs['pc'];
        this.price_commision = cs['ps'];
        this.kou_lin = decodeURIComponent(cs['kl']);
        this.requestData(cs['id']);

      } catch (e) {
        console.log("解析url参数失败：" + e)
      }
    },
    methods: {
      requestData: function (id) {
        // 614507834887
        let params = {"id": id};
        http.fetchPost('/goods/detail', params).then((response) => {
          this.goods = response.data.data
          console.log("requestGoodsDetail::success", this.goods);

        }, (error) => {
          console.log("requestGoodsDetail::error", error);
        });
      },

      download: function () {
        window.location.href = "https://h5.xbbvip.com/download.html";
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
    width: 2.6rem;
    height: 2.6rem;
  }

  .download_info {
    flex: 1;
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .download_info_title {
    font-size: 1.2rem;
  }

  .download_info_des {
    font-size: 0.8rem;
    color: #444444;
  }

  .download_btn {
    width: 5rem;
    height: 1.8rem;
    line-height: 1.8rem;
    background-color: #FF2C56;
    font-size: 0.8rem;
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
    width: 5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    color: white;
    font-size: 0.9rem;
    text-align: center;
    background: url("https://coupon118.oss-cn-shanghai.aliyuncs.com/h5/coupon_icon.png") no-repeat;
    background-size: 100% 100%;
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
    color: #BE844E;
    font-size: 0.8rem;
    background-color: #FFECCB;
    padding: 2px 5px;
  }

  .buy_btn {
    width: 80%;
    height: 2.4rem;
    line-height: 2.4rem;
    background-color: #FF2C56;
    font-size: 1rem;
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
    display: inline-block;
    margin-top: 0.6rem;
    width: 12rem;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 1.4rem;
    text-align: center;
    background: url("https://coupon118.oss-cn-shanghai.aliyuncs.com/h5/bg_koulin.png") no-repeat;
    background-size: 100% 100%;
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
    font-size: 1rem;
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
