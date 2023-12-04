<template>
    <div id="main">
        <side-bar calss="side"></side-bar>
        <nav-bar-all calss="nav"></nav-bar-all>
        <div id="card">
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
            <meeting-cards></meeting-cards>
        </div>
        
    </div>
</template>

<script>
import NavBarAll from '../components/SharonBricks/NavBarAll.vue';
import MeetingCards from '../components/SharonBricks/MeetingCards.vue';
import SideBar from '../components/SharonBricks/SideBar.vue';
export default {
    components: {
        MeetingCards,
        NavBarAll,
        SideBar,
    }
}
</script>

<style>

    #main{
        position: relative;
        background-color: #F2F3F5;
    }
    .side{
        position: absolute;
        left: 0;
        top: 0;
    }
    .nav{
        position: absolute;
        left: 200px;
        /* top: 0; */
        right: 0;
    }

    #card{
        display: grid;
        grid-column-gap:16px;
        grid-row-gap:20px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin: 28px 10vw 28px 28px;

        position: absolute;
        left: 200px;
        top: 48px;

        
    }
</style>