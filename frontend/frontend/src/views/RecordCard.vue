<template>

    <div class="navAndCont" id="cards">
      <nav-bar-all class="navBar"></nav-bar-all>
      <div class="cards">
        <meeting-cards v-for="(items,index) in name" :key="items.id" :recordName = "items" :tags="tags[index]"></meeting-cards>
        <!-- // :recordName = "items.name" -->
         <!-- :isShowed="isShowed" @showMeeting="show" -->
      </div>
      <router-view></router-view>
    </div>
    
</template>

<script>
import NavBarAll from '../components/NavBarAll.vue';
import SideBar from '../components/SideBar.vue';
import MeetingCards from '../components/MeetingCards.vue';
import { ref } from 'vue';
import axios from 'axios';

export default {
    name: 'recordCard',
    components: {
        SideBar,
        NavBarAll,
        MeetingCards,
        
    },
    setup(props,{emit}){
        const name = ref(["Sprint5_計畫會議","Sprint5_demo"]);
        const recordName = ref("會議記錄");
        const projectID = ref("94");//之後要放動態ID
        const tags = ref([["會議紀錄","API"],[]]);
        const currentActive = ref("1-1");

        return{
            currentActive,
            name,
            projectID,
            recordName,
            tags,

        };
    },
    // mounted(){
    //     axios.get("http://35.194.196.179:5000/get_record_index",{params:{project_id : 94}}).then(res => {
    //         this.name.value.push(res.data.record.record_name);
    //         console.log(this.name.value);
    //     })
    //     .catch((error) => {
    //         // Handle error
    //         console.error("Error:", "找不到阿");
    //     });
    // }

}
</script>

<style scoped>

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
  background-color: #DCDFE6;
  position: absolute;
  left: 200px;
  width:auto;
  top: 0;
  right: 0;
 }

</style>