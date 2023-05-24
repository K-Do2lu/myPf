<template>
  <div class="mainContent">
    <div class="mainTxtBx">
      <span class="mainTxt">Kdy2da</span>
      <!-- <span class="mainSubtxt">안녕하십니까, 여긴 제 포트폴리오 공간입니다.</span> -->
      <!-- <span class="mainSubtxt">UI/UX Design 및 Publishing을 하고 있습니다. 그럼 enjoy</span> -->
    </div>


    <div class="mainBtnBx">

      <div class="mainBtns">
        <div class="mainBtn" @click="toggleBComponent(null)" :class="{ isActive: selectedId === null && selectedBtn }">All</div>
        <div class="mainBtn" @click="toggleBComponent(1)" :class="{ isActive: selectedId === 1 && selectedBtn }">UI/UX Design</div>
        <div class="mainBtn" @click="toggleBComponent(2)" :class="{ isActive: selectedId === 2 && selectedBtn }">Project</div>
        <div class="mainBtn" @click="toggleBComponent(3)" :class="{ isActive: selectedId === 3 && selectedBtn }">Work</div>
        <button class="btn-secondary like-review"  @click="likeBtn">
          <i class="fa fa-heart" aria-hidden="true" ref="myButton" :class="{ animateLike: isActive }"></i>{{likeNum}}
        </button>
      </div>

    </div>


  </div>
<WorkArea v-if="show" ref="workArea" :id="selectedId"></WorkArea>
</template>

<script>
import WorkArea from '../components/WorkArea.vue'

export default {
name: 'MainArea',
props: {

},
components: {
  WorkArea,
},
data() {
  return{
    likeNum: 0,
    isActive: false,
    show: false,
    selectedId: undefined,
    selectedBtn: false,
  }
},
created() {
  // 페이지가 로드될 때, 로컬 스토리지에서 likeNum 값을 가져옴
  const savedLikeNum = localStorage.getItem('likeNum');
  if (savedLikeNum) {
    this.likeNum = parseInt(savedLikeNum, 10);
  }
},
methods: {
  // workareashow
  toggleBComponent(id) {
    this.show = true;
    this.selectedId = id;
    this.selectedBtn = true;

    this.$nextTick(() => {
      if (this.show) {
        this.scrollToWorkArea();
      }
    });
  },
  scrollToWorkArea() {
    const workArea = this.$refs.workArea;
    if (workArea) {
      workArea.$el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  },
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

    // likeNum 값을 로컬 스토리지에 저장
    localStorage.setItem('likeNum', this.likeNum.toString());
    
    //100단위로 alert창 표시
    if(this.likeNum % 10 === 0){
      alert('오이오이 날 너무 좋아하네');
    }
  },
},
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/MainArea.scss";
</style>