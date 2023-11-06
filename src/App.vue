<template>
  <div>
    <MenuComponent />
    <br>
    <router-view></router-view>
  </div>
</template>
  
<script>
import MenuComponent from "./components/MenuComponent.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default {
  name: "App",
  components: {
    MenuComponent,
  },
};
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
