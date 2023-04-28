<script>
  import router from '../router';

  export default {
    data() {
      return {
        menus: [
          {
            path: "/",
            icon: "ri-home-4-line",
            name: "Home",
          },
          {
            path: "/image",
            icon: "ri-image-line",
            name: "Ai Image Upscale",
          },
          {
            path: "/video",
            icon: "ri-movie-2-line",
            name: "Ai Video Upscale",
          },
          {
            path: "/streaming",
            icon: "ri-live-line",
            name: "Ai Eco Streaming",
          },
          {
            path: "/guide",
            icon: "ri-booklet-line",
            name: "가이드 확인하기"
          } 
        ]
      }
    },
    methods: {
      isActive(idx) {
          return this.menus[idx].path[1] === this.$route.path[1]
      },
    }
  }
</script>

<template>
  <header>
    <ul class="leftMenu">
      <li class="logo"><img src="../assets/media/pikavue_logo.svg" alt=""></li>
      <li v-for="(menu, idx) in menus" :key="idx" :class="{active: isActive(idx)}">
        <router-link :to="menu.path">
          <i :class="menu.icon"></i>
          <p>{{ menu.name }}</p>
        </router-link>
      </li>
      <li>
        <button>지금 업로드 하기</button>
      </li>
    </ul>
    <ul class="rightMenu">
      <li>
        <p><i class="ri-search-line"></i></p>
        <p><i class="ri-customer-service-2-line"></i></p>
        <p><i class="ri-user-line"></i></p>
      </li>
    </ul>
  </header>
</template>