<template>
    
  <div class="cart_container">
        <button class="add_cartButton" type="button" @click="add_cart"><el-icon><Plus /></el-icon></button>
        <div class="additional-textarea">
          <div class="textarea-container">
            <resize-textarea class="textArea" placeholder="請輸入內容" v-model="textValue"></resize-textarea>
            <!-- :maxHeight="150" -->
            <button class="edit_textButton" type="button" @click="edit_textArea"><el-icon><MoreFilled /></el-icon></button>
          </div>
          <div class="split-line" style="width: 100%;"></div>
          <div class="tags">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="tag"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="ml-1 w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button
        v-if="!inputVisible"
          class="button-new-tag ml-1"
          size="small"
          @click="showInput"
        >+ 事項</el-button>
        <el-button
        v-if="!inputVisible"
          class="button-new-tag ml-1"
          size="small"
          @click="showInput"
        >+ 組別</el-button>
      </div>
      </div>
        
      </div>
</template>

<script>
export default {
    data(){
      return{
        //tags
      textarea1: "",
      inputValue: "",
      dynamicTags: [],
      inputVisible: false,
      //tags
      };
    },
    methods:{
        //tags
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        // this.$nextTick(() => {
        //   this.$refs.InputRef.focus();
        // });
      },
      handleInputConfirm() {
        if (this.inputValue) {
          this.dynamicTags.push(this.inputValue);
        }
        this.inputVisible = false;
        this.inputValue = "";
      },
      //tags
    },
}
</script>

<style scoped>
    .cart_container{
        position: relative;
        display: flex;
    }
    .additional-textarea {
    border-radius: 4px;
    width: 890px;
    padding: 10px;
    border: 1px solid #ccc; /* 大框框的边框样式，你可以根据需要调整颜色和样式 */
  }
  .textarea-container {
    height: auto;
    display: flex;
    align-items: flex-start;
  }
  
  .textArea {
    
    min-height: 50px;
    font-size: 15px;
    width: 100%;
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

  .add_cartButton{
    height: 40px;
    width: 50px;
    margin-right: 15px;
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
  .tags {
  display: flex;
  flex-wrap: wrap;
  margin: 6px 10px;
}
.tag {
  margin-right: 4px;
}
.ml-1 {
  width: 60px;
}
</style>