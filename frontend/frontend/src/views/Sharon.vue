<template>
  <div class="sharon" @contextmenu.prevent>
    <!-- @click="StopShowing" -->
    <side-bar class="sideBar" @update="selectedItemUpdate"></side-bar>
    <!-- <div class="navAndCont">
      <nav-bar class="navBar"></nav-bar>
      <empty-back class="content"></empty-back>
    </div > -->
    <div v-if="activeOption === '1-1'" class="navAndCont">
      <nav-bar-all class="navBar" @click="StopShowing"></nav-bar-all>
      <div class="cards">
        <meeting-cards v-for="items in 16" :key="items" :isShowed="isShowed"></meeting-cards>
      </div>
    </div>
    <div v-if="activeOption === '1-2'" class="navAndCont">
      <trash-bar class="navBar"></trash-bar>
      <div class="cards">
        <trash-cards v-for="items in 16" :key="items"></trash-cards>
      </div>

    </div>
      
      
  </div>
</template>


<script>
import { ref } from "vue";
import axios from "axios";
import SideBar from "../components/SharonBricks/SideBar.vue";
import NavBar from "../components/SharonBricks/NavBar.vue";
import EmptyBack from "../components/SharonBricks/EmptyBack.vue";
import NavBarMain from '../components/SharonBricks/NavBarMain.vue';
import MeetingCards from '../components/SharonBricks/MeetingCards.vue';
import TrashCards from "@/components/SharonBricks/TrashCards.vue";
import NavBarAll from "@/components/SharonBricks/NavBarAll.vue";
import TrashBar from '../components/SharonBricks/TrashBar.vue';

export default {
  components: {
    SideBar,
    NavBar,
    EmptyBack,
    NavBarMain,
    MeetingCards,
    TrashCards,
    NavBarAll,
    TrashBar,
  },
  setup(props,{emit}) {
    const activeOption = ref(null);  
    const isShowed = ref(null);  

    const selectedItemUpdate = (option) =>{
      activeOption.value = option;
      console.log("active="+activeOption.value);
    };

    const StopShowing = ()=>{
      isShowed.value = false;
    };

    return {
      activeOption,
      selectedItemUpdate,
      isShowed,
      StopShowing,
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
    position: fixed;
    left: 600px;
    /* right: 0; */
    top: 48px;
    bottom: 0;
 }

 .cards{
  display: grid;
  grid-column-gap:16px;
  grid-row-gap:20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 28px 10vw 28px 28px;

  position: absolute;
  top: 48px;
 }
 .navAndCont{
  background-color: #F2F3F5;
  position: relative;
  left: 200px;
  top: 0;
  right: 0;
 }

</style>
