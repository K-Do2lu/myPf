<template>
  <div class="mainArea">
    <div class="mainHeader">
      <div class="logo"><img src="../assets/img/logo.png" alt="logo"></div>
      <div class="subMenu">
        <span class="subMenuActive">Home</span>
        <span>About</span>
        <span>Work</span>
        <span>Contact</span>
      </div>
    </div>
    <div class="mainBody">

      <div class="mainBx">
        <div class="mainTxt">
          <span>Hi,hello!</span>
          <span>This is my portfolio.</span>
          <span>Enjoy youtself!😄</span>
        </div>
        
        <div class="mainBtn">
          <span>ㅈㄳㄳ</span>
          <span>ㅇㄽ</span>
        </div>
      </div>

      <div class="mainWork">
        <div class="mainWorkBx" v-for="(item, index) in mainWorkBx" :key="index">
          <div class="mainWorkBxHeader">
            <span class="mainWorkBxTitle">{{item.title}}</span>
            <!-- <router-link to="/WorkArea"></router-link> -->
            <span class="mainWorkBxBtn" @click="workShow(index)"></span>
          </div>
          <div class="mainWorkBxBody"></div>
        </div>
      </div>
    </div>
  </div>
  <WorkArea v-if="show" :divIndex="selectedDivIndex"></WorkArea>
</template>

<script>
import WorkArea from '../components/WorkArea.vue';
export default {
  name: 'MainArea',
  props: {
  },
  components: {
    WorkArea
  },
  data() {
    return{
      mainWorkBx: [
        {title: 'UI/UX Design',},
        {title: 'Project',},
        {title: 'Work',},
      ],
      show:'',
      selectedDivIndex: null,
    }
  },
  methods: {
    workShow(divIndex) {
    this.selectedDivIndex = divIndex;
    this.show = !this.show;
  },
  },
 
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/MainArea.scss";


</style>
