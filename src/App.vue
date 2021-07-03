<template>
  <!-- <img alt="App logo" src="./assets/logo.jpg">
  <HeaderComponent msg="Hello pagination!"/> -->
  <PaginationComponent/>
  <AlbumComponent albumNum="3"/>

</template>

<script>
import './assets/style.css'
import './assets/bootstrap.min.css'
//import HeaderComponent from './components/HeaderComponent.vue'
import PaginationComponent from './components/PaginationComponent.vue'
import AlbumComponent from './components/AlbumComponent.vue'

export default {
  name: 'App',
  components: {
  //  HeaderComponent,
    PaginationComponent,
    AlbumComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
