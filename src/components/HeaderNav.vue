<script>
  import router from '../router';

  export default {
    data() {
      return {
        menus: [
          {
            path: "/",
            name: "Home",
          },
          {
            path: "/image",
            name: "Pikavue Ai Image",
          },
          {
            path: "/video",
            name: "Pikavue Ai Video",
          },
          {
            path: "/gdfengancer",
            name: "GDFenhancer",
          },
          {
            path: "/gdfplay",
            name: "GDFplay",
          },
          {
            path: "/forum",
            name: "Forum",
          },
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
    <div class="leftMenu">
      <div class="logo"><img src="../assets/media/logo.svg" alt=""></div>
      <ul>
        <li v-for="(menu, idx) in menus" :key="idx" :class="{active: isActive(idx)}">
          <router-link :to="menu.path">
            <p>{{ menu.name }}</p>
          </router-link>
        </li>
      </ul>
      <div class="guide">
        <a href="">
          <i class="ri-book-line"></i>
          <p>가이드 확인하기</p>
        </a>
      </div>
      <div class="lang">
        <i class="ri-global-line"></i>
        <p>Languages</p>
      </div>
    </div>
    <ul class="rightMenu">
      <li>
        <p><i class="ri-notification-4-line"></i></p>
        <p><i class="ri-customer-service-2-line"></i></p>
      </li>
      <li class="user">
        <div></div>
        <p>song</p>
        <i class="ri-arrow-down-s-line"></i>
      </li>
    </ul>
  </header>
</template>