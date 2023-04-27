<template>
  <MainArea/>
</template>

<script>
import MainArea from './components/MainArea.vue'
// import ContactArea from './components/ContactArea.vue'

export default {
  name: 'App',
  components: {
    MainArea,
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
