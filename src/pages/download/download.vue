<template>
  <div id="app">

    <img class="icon" src="../../assets/logo.png">

    <a class="android" href="https://coupon118.oss-cn-shanghai.aliyuncs.com/h5/app-1.0.apk">安卓下载地址</a>

    <a class="ios" href="" @click="ios">苹果下载地址</a>

  </div>
</template>

<script>
  import http from "../../js/http.js";

  export default {
    name: 'Download',
    data() {
      return {}
    },
    created() {
      // window.location.href = "https://www.baidu.com";
      this.requestData();
    },
    methods: {
      requestData: function () {
      },

      download: function () {
        window.location.href = "";
      },

      ios: function () {
        alert("苹果正在开发中，敬请期待")
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    width: 5rem;
    height: 5rem;
    margin-top: 4rem;
  }

  .android {
    margin-top: 2rem;
  }

  .ios {
    margin-top: 2rem;
  }

</style>
