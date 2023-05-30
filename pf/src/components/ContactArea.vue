<template>
  <div class="contactContent">
    <div class="contactBx">
      <!-- screenWidth가 500px 이상일 때 .contactTxt 요소를 보여줍니다 -->
      <div
        class="contactTxt"
        v-show="showContactTxt"
        :class="{ active: showContactTxt && iconClicked }"
      >
        <span>잇쇼니 간바뗑 뿌뿌~🤪</span>
      </div>
      <!-- screenWidth가 500px 미만일 때 .contactIcon 요소를 보여줍니다 -->
      <div
        class="contactIcon"
        v-show="!showContactTxt"
        @click="toggleContactTxt"
      ></div>
      <div class="contactInfo">
        <span class="country">South Korea</span>
        <span class="tell">+82 8686 7435</span>
        <span class="email">kdy992da@naver.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactArea',
  data() {
    return {
      showContactTxt: false, // .contactTxt 요소를 보여줄지 여부를 나타내는 데이터 속성
      iconClicked: false, // .contactIcon이 클릭되었는지 여부를 나타내는 데이터 속성
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize(); // 초기 해상도에 따라 .contactTxt를 보여줄지 설정
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const screenWidth = window.innerWidth;
      this.showContactTxt = screenWidth >= 500; // screenWidth가 500px 이상이면 .contactTxt를 보여줌
    },
    toggleContactTxt() {
      this.iconClicked = true; // .contactIcon이 클릭되었음을 표시
      this.showContactTxt = true; // .contactTxt를 보여줌
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/ContactArea.scss";
</style>
