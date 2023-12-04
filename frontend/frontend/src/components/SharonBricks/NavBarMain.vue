<template>
    <div id="navBar">
        <div id="breadCrum">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item id="first" >會議記錄</el-breadcrumb-item>
            <el-breadcrumb-item id="now" :color="normal">全部</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div id="meetingName">
            <el-text id="name">{{ meeting_name }}</el-text>
            <el-icon id="edit"><edit-pen/></el-icon>
        </div>
        <div id="toolBar">
            <div id="searchPlace">
                <el-icon class="el-input__icon"><search /></el-icon>
                <el-autocomplete
                    clearable
                    placeholder="Please Input"
                    disable = true
                    id = "searchBar"
                />
            </div>
            <button><el-icon class="icon"><bell/></el-icon></button>
            <user-info id="userInfo"></user-info>
            <el-icon><language/></el-icon>
        </div>
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue';
export default {
    components:{
        UserInfo,
    },
    data(){
        return{
            meeting_name: "未命名會議紀錄",
        }
    }
}
</script>

<style scoped>
    #navBar{
        z-index: 5;
        position: fixed;
        left: 200px;
        display: flex;
        width: auto;
        height: 48px;
        padding: 0px 16px;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;

        border-bottom: 1px solid #E4E7ED;
        background: #FFF;
        box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.12);
    }

    #breadCrumb{
        display: flex;
        position: absolute;
        left: 0;
        top: 0;
        padding: 12px 0 12px 16px;
        font-size: 14px;
    }
    #breadCrumb #first{
        color: #909399;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 171.429% */
    }

    #breadCrumb #now{
        color: #303133;
    }

    #meetingName{
        display: flex;
        gap:8px;
        padding: 12px 20px;
        justify-content: center;
        align-items: center;
        position: absolute;
        
    }

    #meetingName #edit{
        height: 12px;
        width: auto;
    }

    #meetingName #name{
        color: #303133;
        font-family: PingFang TC;   
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
    }

    #toolBar{
        display: flex;
        
    }
    /* #toolBar .icon{
        background-color: none;
        border: none;
    } */
    #toolBar button{
        border: none;
        background: none;
        cursor: pointer;
    }
    
    #toolBar .icon{
        display: flex;
        padding: 0px 12px;
        justify-content: center;
        align-items: center;
        align-self: stretch;
    }

    #searchBar{
        display: flex;
        padding: var(--space-size-0, 0px);
        align-items: center;
        gap: var(--space-size-0, 0px);
        flex: 1 0 0;
        height: 20px;

        color: var(--base-color-text-el-text-color-placeholder, #A8ABB2);
        font-family: PingFang TC;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;  
        line-height: 20px; /* 166.667% */
    }
    #searchPlace{
        position: relative;
        height: 24px;
        min-height: 24px;
        max-height: 40px;
        padding: 10px 6px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
    }

    #searchBar::after {
        content: "";
        background: url('@/assets/search.svg') center center/cover;
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        pointer-events: none; /* 防止伪元素遮挡用户输入 */
    }

    #userInfo{
        position: inherit;
        right: 16px;
    }

</style>