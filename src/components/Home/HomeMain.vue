<script>
  export default {
    data() {
      return {
        project: [{
          
        }],
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
        ]
      },
    }
  }
</script>

<template>
  <div class="main">
    <div class="top">
      <h5>GDF Platform Service</h5>
      <ul class="mainMenu">
        <li>
          <img src="../../assets/media/cat.jpg" alt="">
          <p>Pikavue Ai Image
            <span>저화질의 이미지를 2배에서 4배까지</span>
            <span>더 선명하게 업스케일링 할 수 있습니다</span>
          </p>
        </li>
        <li>
          <img src="../../assets/media/spring-after.jpg" alt="">
          <p>Pikavue Ai Video
            <span>화질이 좋지 않은 동영상을 4배까지</span>
            <span>Ai가 똑똑하게 업스케일링 합니다</span>
          </p>
        </li>
        <li>
          <img src="../../assets/media/summer-after.jpg" alt="">
          <p>GDFenhancer
            <span>저화질의 동영상을 실시간으로 스트리밍 하면서</span>
            <span>네트워크 비용을 감소시킬 수 있습니다</span>
          </p>
        </li>
        <li>
          <img src="../../assets/media/summer-after.jpg" alt="">
          <p>GDFplay
            <span>저화질의 동영상을 실시간으로 스트리밍 하면서</span>
            <span>네트워크 비용을 감소시킬 수 있습니다</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <div class="left">
        <h5>현재 작업 내역</h5>
        <ul>
          <li>
            <span><b></b>spring.jpg</span>
            <p>이미지 업스케일이 완료되었습니다</p><span>05.09 14시45분</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <h5>업데이트</h5>
        <ul>
          <li>
            <div>서비스</div>
            <p>버그 수정</p><span>시간</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>