<template>
  <div class="mainContent">
    <div class="mainTxtBx">
      <span class="mainTxt">Kdy2da</span>
      <span class="mainSubtxt">안녕하십니까, 여긴 제 포트폴리오 공간입니다.</span>
      <span class="mainSubtxt">UI/UX Design 및 Publishing을 하고 있습니다. 그럼 enjoy</span>
    </div>
    <div class="mainBtnBx">
      <div class="mainBtns">
        <div class="mainBtn">All</div>
        <div class="mainBtn">UI/UX Design</div>
        <div class="mainBtn">Project</div>
        <div class="mainBtn">Work</div>
      </div>
      <button class="btn-secondary like-review"  @click="likeBtn">
        <i class="fa fa-heart" aria-hidden="true" ref="myButton" :class="{ animateLike: isActive }"></i>{{likeNum}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainArea',
  props: {},
  components: {},
  data() {
    return{
      likeNum: 0,
      isActive: false,
    }
  },
  methods: {
    likeBtn() {
      this.likeNum++;
      this.isActive = true;

      // 1초 후에 isActive를 false로 변경하고 애니메이션 클래스를 제거합니다.
      setTimeout(() => {
        this.isActive = false;
        const buttonEl = this.$refs.myButton;
        buttonEl.classList.remove("animateLike");
      }, 500);

      // 애니메이션 클래스를 추가합니다.
      const buttonEl = this.$refs.myButton;
      buttonEl.classList.add("animateLike");
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/MainArea.scss";
</style>