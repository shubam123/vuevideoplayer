// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VideoPlayer from 'vue-video-player'


VideoPlayer.config({
  youtube: true,  // default false（youtube的支持）
  switcher: true, // default true（播放源切换功能）
  hls: true       // default true（直播功能的支持）
})


Vue.use(VideoPlayer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
