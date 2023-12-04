<template>
    <el-dropdown trigger="click" max-height=480px >
        <span class="el-dropdown-link">
            <el-icon class="icon"><bell/></el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu class="dropDown" >
                <div id="content">
                    <el-tabs v-model="activeName" class="demo-tabs" stretch model-value="first">
                        <el-tab-pane label="總覽" name="first" class="tab">
                                <div id="content">
                                    <el-scrollbar height="480px" class="scrollBar">
                                        <noti-content></noti-content>
                                        <noti-content></noti-content>
                                        <noti-content></noti-content>
                                        <noti-content></noti-content>
                                    </el-scrollbar>
                                </div>
                            
                        </el-tab-pane>
                        <el-tab-pane label="提及" name="second" class="tab">提及</el-tab-pane>
                        <el-tab-pane label="系統" name="third" class="tab">系統</el-tab-pane>
                    </el-tabs>
                </div>

                <!-- <el-dropdown-item class="dropDown"><el-icon><user/></el-icon><span class="text">個人檔案</span></el-dropdown-item>
                <el-dropdown-item class="dropDown"><el-icon><span class="material-icons">help_outline</span></el-icon><span class="text">問題回報</span></el-dropdown-item>
                <el-dropdown-item class="dropDown"><el-icon><span class="material-icons">desktop_windows</span></el-icon><span class="text">介面教學</span></el-dropdown-item>
                <el-dropdown-item class="dropDown"><el-icon><i class="material-icons">exit_to_app</i></el-icon><span class="text">登出</span></el-dropdown-item> -->
            </el-dropdown-menu>
        </template>
    </el-dropdown> 
</template>

<script>
import NotiContent from './NotiContent.vue';
export default {
    setup(){

        return{

        };
    },
    components:{
        NotiContent,
    }
}
</script>

<style scoped>
    .dropDown{
        width: 252px;
        height: 480px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 12px;
        /* overflow: hidden hidden; */
    }
    #content{
        display: flex;
        height: 474px;
        /* padding: 5px var(--space-size-24, 24px) 5px 12px; */
        flex-direction: column;
        align-items: center;
        gap: 8px;
        /* padding: 12px; */
    }

    .demo-tabs{
        display: flex;
        flex-direction: column;
        width: 216px;
        justify-content: center;
        align-items: flex-start;
    }

    .tab{
        display: flex;
        flex-direction: column;
    }

    .icon{
        cursor: pointer;
    }

</style>