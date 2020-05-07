<template>
  <div id="app">

  </div>
</template>

<script>
  import http from "../../js/http.js";

  export default {
    name: 'Download',
    data() {
      return {

      }
    },
    created() {
      window.location.href = "https://www.baidu.com";
      this.requestData();
    },
    methods: {
      requestData: function () {
      },

      download: function () {
        window.location.href = "";
      },
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

</style>
