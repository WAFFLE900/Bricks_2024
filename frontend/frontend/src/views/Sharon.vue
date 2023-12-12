<template>
  <div class="sharon" @contextmenu.prevent>
    <!-- @click="StopShowing" -->
    <side-bar class="sideBar" @update="selectedItemUpdate" @showAdd="show" ></side-bar>
    <!-- @showAdd="show" -->
    <div class="navAndCont" v-show="activeOption === null">
      <nav-bar class="navBar"></nav-bar>
      <empty-back class="content" @showAdd="show"></empty-back>
    </div >
    <div v-show="activeOption === '1-1'" class="navAndCont">
      <nav-bar-all class="navBar" @click="StopShowing"></nav-bar-all>
      <div class="cards">
        <meeting-cards v-for="items in 16" :key="items" :isShowed="isShowed"></meeting-cards>
      </div>
    </div>
    <div v-show="activeOption === '1-2'" class="navAndCont">
      <trash-bar class="navBar"></trash-bar>
      <div class="cards">
        <trash-cards v-for="items in 16" :key="items"></trash-cards>
      </div>

    </div>
    <div class="navAndCont" v-show="isShowed">
      <nav-bar-main class="navBar"></nav-bar-main>
      <div class="content">
        <meeting class="info"></meeting>
        <text-block/>
      </div>
    </div>
      
  </div>
</template>


<script>
import { ref } from "vue";
// import axios from "axios";
import SideBar from "../components/SharonBricks/SideBar.vue";
import NavBar from "../components/SharonBricks/NavBar.vue";
import EmptyBack from "../components/SharonBricks/EmptyBack.vue";
import NavBarMain from '../components/SharonBricks/NavBarMain.vue';
import MeetingCards from '../components/SharonBricks/MeetingCards.vue';
import TrashCards from "@/components/SharonBricks/TrashCards.vue";
import NavBarAll from "@/components/SharonBricks/NavBarAll.vue";
import TrashBar from '../components/SharonBricks/TrashBar.vue';
import meeting from '../components/KarenBricks/meeting.vue';
import TextBlock from "@/components/KarenBricks/TextBlock.vue";

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
    meeting,
    TextBlock,
  },
  setup(props,{emit}) {
    const activeOption = ref(null);  
    const isShowed = ref(false);  

    // 偵測sideBar的選擇
    const selectedItemUpdate = (option) =>{
      activeOption.value = option;
      console.log("active="+activeOption.value);
      isShowed.value = false;
    };

    // const StopShowing = ()=>{
    //   isShowed.value = false;
    // };

    // 點選新增出現新增的頁面
    const show = (value) =>{
      isShowed.value = value;
      console.log(isShowed.value);
      activeOption.value = 0;
    };


    return {
      activeOption,
      selectedItemUpdate,
      isShowed,
      // StopShowing,
      show,
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
    top: 30vh;
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
  /* border: 1px; */
 }
 .navAndCont{
  background-color: #F2F3F5;
  position: absolute;
  left: 200px;
  width:auto;
  top: 0;
  right: 0;
 }
 .info{
  position: absolute;
 }

</style>
