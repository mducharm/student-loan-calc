<template>
  <div id="app">
    <NavbarComponent />
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from './components/FormComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    FormComponent, NavbarComponent, About
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
