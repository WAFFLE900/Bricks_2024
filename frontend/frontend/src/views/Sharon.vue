<template>
  <div class="sharon">
    <side-bar class="sideBar"></side-bar>
    <nav-bar class="navBar"></nav-bar>
    <empty-back class="content"></empty-back>
  </div>
</template>


<script>
import { ref } from "vue";
import axios from "axios";
import SideBar from "../components/SharonBricks/SideBar.vue";
import NavBar from "../components/SharonBricks/NavBar.vue";
import EmptyBack from "../components/SharonBricks/EmptyBack.vue";
import NavBarMain from '../components/SharonBricks/NavBarMain.vue';

export default {
  name: "EmptyPage",
  components: {
    SideBar,
    NavBar,
    EmptyBack,
    NavBarMain,
  },
  setup() {
    

    return {
      
    };
  },
};
</script>

<style scoped>
 .sharon{
    position: relative;
 }
  .navBar{
    position: absolute;
    top: 0;
    left: 200px;
    right: 0;
    /* grid-area: navBar; */
 }
 .sideBar{
    /* grid-area: sideBar; */
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
 }
 .content{
    /* grid-area: content; */
    position: absolute;
    left: 200px;
    right: 0;
    top: 400px;
    bottom: 0;
 }

</style>
