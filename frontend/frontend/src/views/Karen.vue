<template>
  <div class="karen">
<div class="button-container">
        <button type="button" onclick="handleButtonClick('button1')">
          <el-icon style="color: red;"><ArrowUp /></el-icon></button>
          <button type="button" onclick="handleButtonClick('button2')"><el-icon><Edit /></el-icon>會議基本資訊</button>
          <button type="button" onclick="handleButtonClick('button3')">
          <el-icon><Link /></el-icon>
      </button>
       
    </div>
    <div class="form-container">
      <table class="form-table">
        <tr>
          <td class="left-bar">
            <label for="meetingName">會議名稱</label>
          </td>
          <td class="input-cell">
            <input type="text" id="meetingName" v-model="meetingName" class="text-input" :placeholder="placeholder" @focus="clearPlaceholder" @blur="restorePlaceholder">
          </td>
        </tr>
        <tr>
          <td class="left-bar">
            <label for="time">時間</label>
          </td>
          <td class="input-cell">
            <input type="place" id="time" v-model="place" class="text-input" placeholder="-">
          </td>
        </tr>
        <tr>
          <td class="left-bar">
            <label for="attend">出席人員</label>
          </td>
          <td class="input-cell">
            <input type="place" id="attend" v-model="place" class="text-input" placeholder="-">
          </td>
        </tr>
        <tr>
          <td class="left-bar">
            <label for="place">地點</label>
          </td>
          <td class="input-cell">
            <input type="place" id="place" v-model="place" class="text-input" placeholder="-">
          </td>
        </tr>
        <tr>
          <td class="left-bar">
            <label for="absent">缺席人員</label>
          </td>
          <td class="input-cell">
            <input type="absent" id="absent" v-model="absent" class="text-input" placeholder="-">
          </td>
        </tr>
        <tr>
          <td class="left-bar">
            <label for="record">紀錄人員</label>
          </td>
          <td class="input-cell">
            <input type="record" id="record" v-model="record" class="text-input" placeholder="-">
          </td>
        </tr>
      </table>
    </div>
    <div class="cart_container">
      <button class="add_cartButton" type="button" @click="add_cart"><el-icon><Plus /></el-icon></button>
      <div class="additional-textarea">
        <div class="textarea-container">
          <!-- <el-input
            autosize
            type="string"
            placeholder="請輸入內容"
          >{{ textarea1 }}</el-input> -->
          <textarea id="textArea" v-model="textArea" placeholder="請輸入內容" cols="90" rows="12" @keyup="autogrow(this)"></textarea>
          <button class="edit_textButton" type="button" @click="edit_textArea"><el-icon><MoreFilled /></el-icon></button>
        </div>
        <div class="split-line" style="width: 100%;"></div>
        <textarea id="tag" v-model="tag" placeholder="選擇標籤類型並建立標籤" style="height: 20px; "></textarea>
      </div>
    </div>
  
    <el-alert class = "popUp_msg" title="已刪除會議紀錄" type="warning" show-icon :style="{ backgroundColor: '#FFEFF0',color: '#EB3B23' }" />
    <el-alert class = "popUp_msg" title="已儲存會議基本資訊" type="success" show-icon />
    <el-alert class = "popUp_msg" title="您已永久刪除會議紀錄" type="info" show-icon />
    
    
    <BasicInfo />
    <Recover />
    <!-- <Delete /> -->
    <!-- <LinkCopy /> -->
  </div>
</template>

<script >

import axios from 'axios';
import { ref } from 'vue';
import LinkCopy from "@/components/KarenBricks/LinkCopy.vue";
import Delete from "@/components/KarenBricks/Delete.vue";
import Recover from "@/components/KarenBricks/Recover.vue";
import BasicInfo from "@/components/KarenBricks/BasicInfo.vue";

export default {
  name:'Karen',
  components: {
    LinkCopy,
    Delete,
    Recover,
    BasicInfo,
  },

  data() {
    return {
      meetingName: "",
      placeholder: "輸入會議名稱",
      textarea1: "",
    };
  },
  methods: {
    clearPlaceholder() {
      this.placeholder = "";
    },
    restorePlaceholder() {
      if (!this.meetingName) {
        this.placeholder = "輸入會議名稱";
      }
    },
    dynamicHeight() {
      // 可以根據實際情況進行更複雜的計算，這裡簡單使用文字行數 * 行高
      const lineHeight = 20; // 每行的高度，可以根據實際需要調整
      const lines = this.textArea.split('\n').length;
      const height = lines * lineHeight;

      // 返回動態計算的高度
      return `${height}px`;
    },
    autogrow(textarea){
      var adjustedHeight=textarea.clientHeight;

      adjustedHeight=Math.max(textarea.scrollHeight,adjustedHeight);
      if (adjustedHeight>textarea.clientHeight){
          textarea.style.height=adjustedHeight+'px';
      }

}
  },
};

const value1 = ref<[Date, Date]>([
  new Date(2016, 9, 10, 8, 40),
  new Date(2016, 9, 10, 9, 40),
])
</script>
<style>
.demo-range .el-date-editor {
  margin: 8px;
}

.form-table {
  border-radius: 4px;
  margin-top: 20px;
  margin-left: 448px;
  width: 910px;
  border-collapse: collapse;
}

.left-bar {
  padding: 12px;
  padding-left: 16px;
  width: 73px;
  text-align: left;
  font-size: 15px;
  
  border: 1px solid #ccc;
  background-color: #EBEEF5; /* 添加背景顏色 */
}

.input-cell {
  padding: 8px;
  border: 1px solid #ccc;
  width: 837px;
}

.text-input {
  width: 100%;
  border: none;
  outline: none;
  /* -webkit-appearance: none; */
  font-size: 14px;
}

.additional-textarea {
  border-radius: 4px;
  width: 890px;
  margin-left:15px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc; /* 大框框的边框样式，你可以根据需要调整颜色和样式 */
 

}
.textarea-container {
  display: flex;
  align-items: flex-start;
}

textarea {
  font-size: 15px;
  width: 93%;
  border: 0px; /* 移除 textarea 的边框 */
  resize: none; /* 防止調整 textarea 的大小 */
  outline: none; /* 移除点击时的边框 */
}
#tag{
  font-size: 15px;
  width: 100%;
  border: 0px; /* 移除 textarea 的边框 */
  resize: none; /* 防止調整 textarea 的大小 */
  outline: none;
}
.split-line {
  border-top: 1px solid #ccc; 
  margin-top: 10px;
  margin-bottom: 10px;
}

.button-container {
    display: flex;
    height:40px;
    width:910px;
    margin-top: 68px;
    margin-left: 448px;
    margin-bottom: 0px;
}
.button-container button:first-child {
    margin-right: auto; /* 将第一个按钮推到最左边 */
    width: 50px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.button-container button:nth-child(2) {
  margin-right: 20px;
  width: 140px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  
}
.button-container button:nth-child(2) .el-icon {
  margin: 10px; /* 设置图标与文本之间的右边距 */
}
.button-container button:nth-child(3) {
  margin-right: 0px; 
  width: 50px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cart_container {
  margin-left: 383px;
  display: flex;
  align-items: flex-start;
}
.add_cartButton{
  height: 40px;
  width: 50px;
  margin-top: 15px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.edit_textButton{
  height: 35px;
  width: 50px;
  margin-left: 0px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.popUp_msg{
width: 500px;
height: 50px;
font-size: 0px;
margin: 20px 0 0;
box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);

}

#textArea{
  height: auto;

}



</style>