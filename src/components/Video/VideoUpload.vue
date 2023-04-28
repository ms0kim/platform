<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css'

  export default {
    data() {
      return {
        upscale: true,
        quality: false,
        filter: false,
        sharpen: 0,
      }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      modalView: Boolean,
    },
    methods: {
      modalClick() {
        this.$emit("modalClick")
      },
      upscaleClick() {
        this.upscale = true;
        if(this.upscale){
          this.quality = false;
          this.filter = false;
        }
      },
      qualityClick() {
        this.quality = true;
        if(this.quality){
          this.upscale = false;
          this.filter = false;
        }
      },
      filterClick() {
        this.filter = true;
        if(this.filter){
          this.quality = false;
          this.upscale = false;
        }
      }
    },
    computed: {
      sharpenFilter: function () {
        return this.sharpen
      }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    }
  }
</script>

<template>
  <button @click="modalClick" class="headerBtn">업로드하기</button>

  <Transition>
    <div class="uploadModal" v-if="modalView">
      <h5>Upload Image</h5>
      <div class="preview">
        <div>
          <i class="ri-file-upload-line"></i>
          <p>파일을 업로드 해주세요</p>
          <span>최고 50MB</span>
        </div>
      </div>
      <div class="modalBottom">
        <div class="modalBtns">
          <p :class="{active : upscale}" @click="upscaleClick"><i class="ri-picture-in-picture-exit-line"></i>배율</p>
          <p :class="{active : quality}" @click="qualityClick"><i class="ri-bard-fill"></i>퀄리티</p>
          <p :class="{active : filter}" @click="filterClick"><i class="ri-equalizer-fill"></i>필터</p>
        </div>

        <div class="imgMenu upscale" v-if="upscale">
          <button class="active">2배</button>
          <button>4배</button>
        </div>

        <div class="imgMenu quality" v-if="quality">
          <button>현실적</button>
          <button>비현실적</button>
        </div>
        <swiper
        v-if="filter"
        :modules="modules"
        :slidesPerView="2.5"
        :spaceBetween="20"
        :slidesPerGroup="1"
        :pagination="{
          clickable: false,
        }"
        class="imgMenu filter"
        >
          <swiper-slide class="filterSlide">
            <p>노출</p>
            <span v-text="sharpenFilter"></span>
            <input type="range" min="0" max="3" v-model="sharpen">
          </swiper-slide>
          <swiper-slide class="filterSlide">
            <p>선명도</p>
            <span v-text="sharpenFilter"></span>
            <input type="range" min="0" max="3" v-model="sharpen">
          </swiper-slide>
          <swiper-slide class="filterSlide">
            <p>채도</p>
            <span v-text="sharpenFilter"></span>
            <input type="range" min="0" max="3" v-model="sharpen">
          </swiper-slide>
          <swiper-slide class="filterSlide">
            <p>색조</p>
            <span v-text="sharpenFilter"></span>
            <input type="range" min="0" max="3" v-model="sharpen">
          </swiper-slide>
        </swiper>
        <span class="solid"></span>
        <button class="up">업로드</button>
      </div>
    </div>
  </Transition>
</template>