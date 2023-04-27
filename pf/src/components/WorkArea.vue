<template>
  <div v-show="showDiv1" class="showDiv1Area">
    <span class="title">Ui/UX Design</span>
    <div class="showDiv1AreaBx">
      <div class="showDiv1AreaImg">
        <img src="../assets/img/workImg.png" alt="workImg">
      </div>
      <div class="showDiv1AreaTxt">
        <span class="workTitle">SK증권 UI/UX 가이드</span>
        <span>기간 : 1-2달</span>
        <span>기여 : 40%</span>
        <span>사용 프로그램 : Figma</span>
        <!-- <a :href="pdfLink" download="download">PDF</a> -->
        <a href="/assets/pdf/skGuide.pdf" download>Download PDF</a>
      </div>
    </div>
  </div>
  <div v-show="showDiv2">두 번째 div</div>
  <div v-show="showDiv3">세 번째 div</div>
</template>

<script>
export default {
  name: 'WorkArea',
  props: ['divIndex'],
  data(){
    return{
      // pdfLink: require("@/assets/img/skGuide.pdf"),
     }
    },
  methods: {
  },
  computed: {
    showDiv1() {
      return this.divIndex === 0;
    },
    showDiv2() {
      return this.divIndex === 1;
    },
    showDiv3() {
      return this.divIndex === 2;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/WorkArea.scss";

</style>
