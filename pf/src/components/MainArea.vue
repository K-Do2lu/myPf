<template>
  <div class="mainContent">
    <video src="../assets/img/mainVideo.mp4" autoplay muted loop></video>

   <div class="mainUserBx">
    <div class="mainUser"></div>   

    <div class="mainUserTxtBx">
      <span class="userName">do2lu</span>
      <span class="userEmail">kdy992da@naver.com</span>

      <div class="mainUserInfos">
        <div class="mainUserProfile" @click="openPopup">Profile</div>
        <div class="mainUserCareer" @click="openPopup2">Career</div>
      </div>
    </div>
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
import WorkArea from '../components/WorkArea.vue';
import pdfUrl from '../assets/img/aboutMe.pdf';
import pdfUrl2 from '../assets/img/career.pdf';

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

  //좋아요 버튼
  likeBtn() {
    this.likeNum++;
    this.isActive = true;
    
    // 1초 후에 isActive를 false로 변경하고 애니메이션 클래스를 제거
    setTimeout(() => {
      this.isActive = false;
      const buttonEl = this.$refs.myButton;
      buttonEl.classList.remove("animateLike");
    }, 500);

    // 애니메이션 클래스를 추가
    const buttonEl = this.$refs.myButton;
    buttonEl.classList.add("animateLike");

    // likeNum 값을 로컬 스토리지에 저장
    localStorage.setItem('likeNum', this.likeNum.toString());
    
    //n단위로 alert창 표시
    if(this.likeNum % 10 === 0){
      alert('날 너무 좋아하네');
    }
  },
  //openPopup
  //추후 매개변수로 소스 수정 예정
  openPopup() {
      window.open(pdfUrl, '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=600,height=800');
    },
  openPopup2() {
    window.open(pdfUrl2, '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,top=100,left=100,width=600,height=800');
  },
    

},
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/MainArea.scss";
</style>