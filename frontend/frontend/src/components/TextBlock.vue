<template>
    
  <div class="cart_container">
    <el-button class="add_cartButton"  @click="add_cart"><el-icon><Plus /></el-icon></el-button>
    <div class="additional-textarea">
        <div class="textarea-container">
          <resize-textarea class="textArea" placeholder="請輸入內容" v-model="textValue"></resize-textarea>
          <el-button class="edit_textButton" @click="show()"><el-icon><MoreFilled /></el-icon></el-button>
          <!-- <div v-if="isShowed" class="editCPN"><EditTextara /></div> -->
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

  <div v-if="isShowed" id="rightClick" ref = "rightClick" @click="unShow()"><EditTextara  /></div>        

</template>

<script>
import { ref, onMounted, onUnmounted} from 'vue';
import EditTextara from './EditTextara.vue';
export default {
components: {
  EditTextara,
},
props: {
  isShowed: Boolean,
},
setup(props, { emit }) {
  const textarea1 = ref("");
  const inputValue = ref("");
  const dynamicTags = ref([]);
  const inputVisible = ref(false);
  const isShowed= ref(false);
  const rightClickRef = ref(null);
  const cartContainers = ref([{
    belowCarts: [],  // 当前 cart 下方的其他 cart
  }]);


  const handleClose = (tag) => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
  };

  const showInput = () => {
    inputVisible.value = true;
    // this.$nextTick(() => {
    //   this.$refs.InputRef.focus();
    // });
  };

  const handleInputConfirm = () => {
    if (inputValue.value) {
      dynamicTags.value.push(inputValue.value);
    }
    inputVisible.value = false;
    inputValue.value = "";
  };

  const edit_textArea = () => {

  };
  const show = () => {
    isShowed.value = !isShowed.value;
  };
  const unShow = () => {
    isShowed.value = !isShowed.value;
  };
  const handleClickOutside = (event) => {
  const rightClick = rightClickRef.value;

  if (rightClick && !rightClick.contains(event.target)) {
    unShow(index); // 或者使用具體的索引值
  }
};

  const add_cart = () => {
    // 为了保证唯一性，使用当前时间戳作为唯一标识
    const uniqueId = Date.now().toString();
    
    // 新增一个 cart_container 对象
    cartContainers.value.push({
      id: uniqueId,
      textValue: '',  // 可以在这里设置 cart_container 的初始数据
      dynamicTags: [],
      inputValue: '',
      inputVisible: false,
      isShowed: false,
    });
  };
  

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
  return {
    textarea1,
    inputValue,
    dynamicTags,
    inputVisible,
    handleClose,
    showInput,
    handleInputConfirm,
    edit_textArea,
    show,
    unShow,
    isShowed,
    rightClickRef,
    add_cart,
    cartContainers,
  };
},
};
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
.editCPN{
  position: absolute;
  top: 20px;
  left: 970px;
}
#rightClick{
  position: absolute;
  top: 50px;
  left: 920px;
  z-index: 10;
}

</style>