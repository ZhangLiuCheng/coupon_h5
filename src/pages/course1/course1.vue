<template>
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


      <div class='demo'>
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      @canplay="onPlayerCanplay($event)"
                      :playsinline="playsinline"
                      :options="playerOptions">
        </video-player>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'Course1',
    data() {
      return {
        playerOptions: {
          // playbackRates: [0.5, 1.0, 1.5, 2.0],
          autoplay: false,
          muted: false,
          loop: false,
          preload: 'auto',
          language: 'zh-CN',
          aspectRatio: '4:3',
          fluid: true,
          sources: [{
            //类型
            // type: "video/mp4",
            src: 'https://coupon118.oss-cn-shanghai.aliyuncs.com/h5/test.mp4'
          }],
          poster: '',
          notSupportedMessage: '此视频暂无法播放，请稍后再试',
          controlBar: {
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            fullscreenToggle: true
          }
        }

      }
    },

    computed: {

      playsinline () {
        let ua = navigator.userAgent.toLocaleLowerCase()
        // x5内核
        if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
          return false
        } else {
          // ios端
          return true
        }
      }
    },

    methods: {
      onPlayerCanplay (player) {
        var ua = navigator.userAgent.toLocaleLowerCase()
        // x5内核
        if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
          $('body').find('video').attr('x-webkit-airplay', true).attr('x5-playsinline', true).attr('webkit-playsinline', true).attr('playsinline', true)
        } else {
          // ios端
          $('body').find('video').attr('webkit-playsinline', 'true').attr('playsinline', 'true')
        }

      },

      download: function () {
        window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.boiling.point.coupon";
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

  .demo {
    display: inline-block;
    width: 100%;
    height: 338px;
    /*text-align: center;*/
    /*line-height: 388px;*/
    /*border: 1px solid transparent;*/
    /*border-radius: 4px;*/
    overflow: hidden;
    background: #fff;
    position: relative;
  }

  .demo:hover {
    display: block;
  }

  .video-js .vjs-icon-placeholder {
    width: 80%;
    height: 80%;
    display: block;
  }

</style>
