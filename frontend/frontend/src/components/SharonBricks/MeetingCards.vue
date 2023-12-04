<template>
    <el-card id="box-card">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
        <div id="namePart">
            <span id="name">{{ record_name }}</span>
            <img src="@/assets/menu.svg" >
        </div>
        <div id="tagPart">
            <el-tag class="tag">標籤</el-tag>
            <el-tag class="tag">標籤</el-tag>
            <el-tag class="tag">標籤</el-tag>
            <el-tag class="tag">標籤</el-tag>
            <el-tag class="tag">新增標籤</el-tag>
        </div>
    </el-card>
</template>

<script>
export default {
    components:{

    },
    data() {
        return {
            normal: "#303133",
            url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            record_name : "會議記錄",
        };
    },
    methods:{
        
  
    }
    
}
</script>

<style scoped>
    #box-card{
        display: flex;
        padding: 0 16px;
        flex-direction: column;
        align-items: center;
        text-align: left;
        gap: 12px;
        width: 244px;
        height: auto;
    }

    #img{
        display: block;
        /* padding: 0; */
        height: 200px;
        width: auto;
    }
    #namePart{
        position: relative;
        display: flex;
        padding: 16px 16px 16px 0;
        align-items: center;
        /* justify-content: center; */
    }
    #name{
        text-align: left;
        color: var(--base-color-text-el-text-color-primary, #303133);

        /* CN medium/Headline3-Medium */
        font-family: PingFang TC;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
    }

    #namePart img{
        position: absolute;
        right: 0;
        width: 18px;
        height: 18px;
    }

    #tagPart{
        padding: 0;
        display: inline-flex;
        justify-content: left;
        word-wrap:break-all;
        width: 212px;
        height: 56px;
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }
    .tag{
        width: fit-content;
        flex-direction: column;
        display: flex;
        padding: 1px 10px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        margin: 6px;

        border-radius: var(--radius-button-large-radius, 4px);
        border: 1px solid var(--base-color-primary-el-color-primary-8, #F4CBCF);    
        background: var(--base-color-fill-el-fill-color-blank, #FFF);

        color: var(--base-color-danger-el-color-danger, #C91F2F);
        text-align: center;

        /* CN regular/body2-Regular */
        font-family: PingFang TC;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;   
        line-height: 22px; /* 169.231% */
    }
</style>