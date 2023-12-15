<template>
  <div class="sharon" @contextmenu.prevent>
    <!-- @update="selectedItemUpdate" -->
    <!-- :activeIndex="currentActive" -->
    <!-- @showAdd="show" -->
      <side-bar class="sideBar"  ></side-bar>

    <!-- 新增、會議記錄主頁 -->
    <!-- v-show="isShowed" -->
    <div class="navAndCont"  id="new">
      <nav-bar-main class="navBar"></nav-bar-main>
      <!-- 標籤 -->
      <div trigger="click" class="tagsPlace" @click="showTags">
        <span class="el-dropdown-link">
          標籤<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
      </div>
      <tag-search-area v-show="tagShowed" class="tagInside"></tag-search-area>
      <div :class="meetingClass">
        <div class="info"><meeting ></meeting></div>
        <div class="textBlock">
          <text-block />
      </div>
        
      </div>
    </div>
      
  </div>
</template>


<script>
import { ref } from "vue";
// import axios from "axios";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
import EmptyBack from "../components/EmptyBack.vue";
import NavBarMain from '../components/NavBarMain.vue';
import MeetingCards from '../components/MeetingCards.vue';
import TrashCards from "@/components/TrashCards.vue";
import NavBarAll from "@/components/NavBarAll.vue";
import TrashBar from '../components/TrashBar.vue';
import meeting from '../components/meeting.vue';
import TextBlock from "@/components/TextBlock.vue";
import TagSearchArea from '../components/KerwinBricks/TagSearchArea.vue';
import { useRouter } from "vue-router";

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
    TagSearchArea,
  },
  setup(props,{emit}) {
    const meetingClass = ref("meeting");
    const activeOption = ref(null);  
    const isShowed = ref(false);  
    const tagShowed = ref(false);
    const router = useRouter();
    const currentActive = ref("1-1")

    const showTags = () =>{
      tagShowed.value = !tagShowed.value;
      if(tagShowed.value === true){
        meetingClass.value = "showingClass";
      }
      else{
        meetingClass.value = "meeting";
      }
    }


    return {
      activeOption,
      // selectedItemUpdate,
      isShowed,
      // StopShowing,
      // show,
      showTags,
      tagShowed,
      meetingClass,
      // nextPage,
      currentActive,
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
 .navAndCont{
  background-color: #DCDFE6;
  position: absolute;
  left: 200px;
  width:auto;
  top: 0;
  right: 0;
 }
 .info{
  position: absolute;
 }

 .textBlock{
  position: absolute;
  
  top: 350px;
  left: -65px;
  display: grid;
  grid-row-gap: 8px;
  /* gap: 8px; */
 }

 .meeting{
  position: absolute;
  top: 68px;
  left:248px;
  
 }

 .tagsPlace{
  position: absolute;
  right: 32px;
  top: 68px;
  border-radius: var(--radius-button-large-radius, 4px);
  border: 1px solid var(--base-color-border-el-border-color, #DCDFE6);
  background: #FFF;
  padding: 4px 16px;
 }

 .el-dropdown-link{
  display: flex;
  gap: 8px;
  cursor: pointer;
 }

 .el-dropdown-link{
  color: #C91F2F;
 }

 .tagInside{
  position: absolute;
  right: 32px;
  top: 114px;
  z-index: 10;
 }

 .tagMenu{
  width: 372px;
 }

 .showingClass{
  position: absolute;
  top: 68px;
  /* right: 430px; */
  left: 66px;
 }

</style>
