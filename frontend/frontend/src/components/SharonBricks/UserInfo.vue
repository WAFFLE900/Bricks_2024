<template>
    <el-dropdown trigger="click">
        <span class="el-dropdown-link">
            <div id="userInfo">
                <el-avatar shape="square" :size="size" :src=squareUrl id="avatar" />
                <p>{{ user_name }}</p>
            </div>
        </span>
        <template #dropdown>
          <el-dropdown-menu id="dropDown">
            <el-dropdown-item :icon="Plus" class="firstDrop">
                <div id="userInfoInside">
                    <el-avatar shape="square" :size=80 :src=squareUrl id="avatarInside" />
                    <p>{{ user_name }}</p>
                </div>
            </el-dropdown-item>
            <el-dropdown-item class="dropDown"><el-icon><user/></el-icon>個人檔案</el-dropdown-item>
            <el-dropdown-item class="dropDown"><el-icon><user/></el-icon>問題回報</el-dropdown-item>
            <el-dropdown-item class="dropDown"><el-icon><user/></el-icon>介面教學</el-dropdown-item>
            <el-dropdown-item class="dropDown"><el-icon><user/></el-icon>登出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>    
    
    
</template>

<script>
export default {
    data(){
        return{
            user_name: "Designer",
            squareUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        };
    },
    methods:{

    }
}
</script>

<style>
    #userInfo{
        display: flex;
        padding: 0px 12px;
        align-items: center;
        gap: 8px;
        align-self: stretch;
        cursor: pointer;
    }

    #userInfo p{
        color: #303133;
        font-family: Noto Sans TC;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        /* cursor: pointer; */
    }

    #userInfo #avatar{
        height: 32px;
        width: auto;
    }

    .firstDrop{
        /* padding: 16px; */
    }
    .dropDown{
        cursor: pointer;
        display: flex;
        width: 200px;
        padding: 16px 24px;
        height: auto;
        justify-content:left;
        align-items: center;
    }

    #userInfoInside{
        display: flex;
        padding: 24px;
        align-items: center;
        gap: 14px;

        color: #000;
    }
    #userInfoInside #avartarInside{
        width: 56px;
        height: 56px;
    }

    #userInfoInside p{
        /* font-family: PingFang TC; */
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 140% */
    }
</style>