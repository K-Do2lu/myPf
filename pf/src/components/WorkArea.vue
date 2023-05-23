<template>
   <div class="workAreaContent">
    <div class="workAreaBxs">
      <template v-for="(item, index) in workAreaBx">
        <div class="workAreaBx" :key="index" v-if="id === null || item.id === id">
          <div class="workAreaImg"><img :src="item.src" alt="workImg"/></div>
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
        {src:'../img/mainBg.png',title: 'title01', id: 1},
        {src:'../img/mainBg.png',title: 'title02', id: 1},
        {src:'../img/mainBg.png',title: 'title03', id: 1},
        {src:'../img/mainBg.png',title: 'title04', id: 2},
        {src:'../img/mainBg.png',title: 'title05', id: 2},
        {src:'../img/mainBg.png',title: 'title06', id: 3},
      ],
    }
  },
  methods: {
  },
  computed: {
   
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/sass/WorkArea.scss";

</style>
