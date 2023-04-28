<script>

  export default {
    data() {
      return {
        datas: [{
          file: "", // 업스케일 몇배
          img: "", // 이미지
          title: "", // 제목
          date: "", // 날짜
          time: "", // 시간
          loading: "", // 진행상황
          download: "", // 다운로드
          
          pageNum: 0,
          listArray: {},
          pageSize: 5
        }],
        checked: {}
      }
    },
    props: {
      listArray: {
        type: Array,
        required: true
      },
      pageSize: {
        type: Number,
        required: false,
        default: 5
      }
    },
    created() {
      this.loadData()
    },
    methods: {
      loadData() {
        this.datas = [
          {
            img: new URL("@/assets/media/cat.jpg", import.meta.url),
            file: "2X Image Upscale",
            title: "고양이.jpg",
            date: "04.27",
            time: " 14:00",
            loading: "1번째 대기중입니다",
            download: ""
          },
          {
            img: new URL("../../assets/media/spring-after.jpg", import.meta.url),
            file: "2X Image Upscale",
            title: "벚꽃.png",
            date: "04.27",
            time: " 14:00",
            loading: "진행중입니다",
            download: ""
          },
          {
            img: new URL("../../assets/media/summer-after.jpg", import.meta.url),
            file: "2X Image Upscale",
            title: "여름.gif",
            date: "04.27",
            time: " 14:00",
            loading: "업스케일이 완료되었습니다",
            download: "ri-download-line"
          }
        ]
      },
      nextPage() {
        this.pageNum += 1;
      },
      prevPage() {
        this.pageNum -= 1;
      }
    },
    computed: {
      pageCount() {
        let listLeng =  this.listArray.length,
        listSize = this.pageSize,
        page = Math.floor(listLeng / listSize);


        if (listLeng % listSize > 0) page += 1;
        
        return page;
      },
      paginatedData() {
        const start = this.pageNum * this.pageSize,
        end = start
      }
    }
  }
</script>

<template>
  <ul class="lmageList">
    <li v-for="(dt, idx) in datas" :key="idx">
      <span v-if="checked[idx]" class="check checked" @click="checked[idx]=false"><i class="ri-checkbox-circle-fill"></i>선택완료</span>
      <span v-else class="check" @click="checked[idx]=true"><i class="ri-checkbox-circle-line"></i>선택하기</span>
      <span class="file"><b></b>{{ dt.file }}</span>
      <img :src="dt.img" alt="">
      <div class="text">
        <div>
          <div class="title"><h5>{{ dt.title }}</h5><span>{{ dt.date }} &nbsp; {{ dt.time }}</span></div>
          <p>{{ dt.loading }}</p>
        </div>
        <i :class="dt.download"></i>
      </div>
    </li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <div class="pageBtns">
    <button :disabled="pageNum === 0" @click="prevPage" class="pageBtn prev">
      이전
    </button>
    <span class="pageNum active">{{ pageNum + 1 }} / {{ pageCount }}</span>
    <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="pageBtn next">
      다음
    </button>
  </div>
</template>