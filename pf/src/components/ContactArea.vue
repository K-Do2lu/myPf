<template>
  <div class="contactContent">
    <div class="contactBx">
      <div
        class="contactTxt"
        v-show="showContactTxt"
        :class="{ active: showContactTxt && iconClicked }"
      >
        <span>잇쇼니 간바뗑 뿌뿌~🤪</span>
      </div>
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
      showContactTxt: false,
      iconClicked: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const screenWidth = window.innerWidth;
      this.showContactTxt = screenWidth >= 500;
    },
    toggleContactTxt() {
      this.iconClicked = true;
      this.showContactTxt = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/ContactArea.scss";
</style>
