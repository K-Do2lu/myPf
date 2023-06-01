<template>
  <div class="workAreaContent">
   <div class="workAreaBxs">
     <template v-for="(item, index) in workAreaBx">
       <div class="workAreaBx" :key="index" v-if="id === null || item.id === id">
         <div class="workAreaImg" @click="downloadPDF(item.pdfPath)"

         @mouseover="setHoveredItem(index)" @mouseout="clearHoveredItem">
          <img :src="getImageSrc(item.src)" alt="workImg"/>

          <div class="test" :class="{ active: isHoveredItem(index) }"><span class="testTxt">PDF 다운로드</span></div>
        </div>
         <div class="workAreaTxt">{{item.title}}</div>
       </div>
     </template>
   </div>
 </div>
</template>

<script>
export default { 
 name: 'WorkArea',
 props: ['id'] ,
 data(){
   return{
     workAreaBx: [
       {id: 2, src:'sk증권 썸네일.png', title: 'SK증권', pdfPath: 'img/sk.pdf'},
       {id: 2, src:'국평원 썸네일.png', title: '국평원', pdfPath: 'img/gookpeongwon.pdf'},
       {id: 2, src:'세라젬 썸네일.png', title: '세라젬', pdfPath: 'img/ceragem.pdf'},
       {id: 1, src:'키움증권 썸네일.png', title: '키움증권', pdfPath: 'img/kiwoom.pdf'},
       {id: 1, src:'현대기아 썸네일.png', title: '현대기아', pdfPath: 'img/hyundai.pdf'},
       {id: 1, src:'유한킴벌리 썸네일.png', title: '유한킴벌리', pdfPath: 'img/yuhanKimberly.pdf'},
       {id: 2, src:'KMS 썸네일.png', title: 'KMS', pdfPath: 'img/KMS.pdf'},
       {id: 3, src:'산출물 디자인.png', title: '산출물 디자인', pdfPath: 'img/etc.pdf'},
     ],
     hoveredItem: null,
   }
 },
 methods: {
  downloadPDF(pdfPath) {
      const link = document.createElement('a');
      link.href = require(`@/assets/${pdfPath}`).default;
      link.target = '_blank';
      link.download = pdfPath.substring(pdfPath.lastIndexOf('/') + 1);

      link.click();
    },
   getImageSrc(src) {
     return require(`../assets/img/${src}`);
   },
   setHoveredItem(index) {
      this.hoveredItem = index;
    },
    clearHoveredItem() {
      this.hoveredItem = null;
    },
    isHoveredItem(index) {
      return this.hoveredItem === index;
    },
 },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/WorkArea.scss";
</style>
