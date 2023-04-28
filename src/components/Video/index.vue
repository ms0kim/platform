<script>
import axios from 'axios'
import VideoUpload from '../Video/VideoUpload.vue';
import SubMenu from '../Video/SubMenu.vue'
import VideoList from  '../Video/VideoList.vue'

export default {
  data() {
    return {
      pageArray: [{},{},{},{},{},{},{},{},{},{}],
      modal: false,
    }
  },
  components: {
    VideoUpload,
    SubMenu,
    VideoList
  },
  created() { // DOM이 만들어지기 전 실행, data를 사전에 준비할 경우 사용
    /* axios.get('')
    .then(response => {
      console.log(response);
      this.pageArray = response.data.contacts;
    })
    .catch(err => {
      console.log(err);
    }); */
  },
  methods: {
    uploadBtn() {
      this.modal = true;
    },
    backClick() {
      this.modal = false;
    }
  },
}
</script>

<template>
  <div class="wrap">
    <div class="content">

      <div class="image">
        <div class="imageHeader">
          <h2>Ai Video Upscale</h2>
          <div class="btns">
            <button class="headerBtn">가이드 확인하기</button>
            <VideoUpload v-bind:modalView="modal" v-on:modalClick="uploadBtn"/>
          </div>
        </div>
        <SubMenu />
        <VideoList :list-array="pageArray"/>
      </div>

    </div>
    <Transition><div class="back" v-if="modal" @click="backClick"></div></Transition>
  </div>
</template>