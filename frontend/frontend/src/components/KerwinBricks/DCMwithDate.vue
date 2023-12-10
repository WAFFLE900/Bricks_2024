<template>
  <div class="cart_container">
    <button class="add_cartButton" type="button" @click="add_cart">
      <el-icon><Plus /></el-icon>
    </button>
    <div class="additional-textarea">
      <div class="info">
        <h3 class="name">會議記錄</h3>
        <h4 class="date">2023/11/22</h4>
        <h4 class="time">15:00~16:00</h4>
      </div>
      <div class="textarea-container">
        <el-input
          v-model="textarea1"
          :autosize="{ minRows: 2, maxRows: 20 }"
          type="textarea"
          placeholder="請輸入內容"
          size="large"
          class="el-input"
          resize="none"
        />
        <button class="edit_textButton" type="button" @click="edit_textArea">
          <el-icon><MoreFilled /></el-icon>
        </button>
      </div>
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
          v-else
          class="button-new-tag ml-1"
          size="small"
          @click="showInput"
        >
          + New Tag
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { nextTick, ref } from "vue";
import { ElInput } from "element-plus";

export default {
  name: "DCM",
  setup() {
    const textarea1 = ref("");

    const handleCommand = (command) => {
      inputVisible.value = true;
      // nextTick(() => {
      //   InputRef.value.input.focus();
      // });
    };

    //tags
    const inputValue = ref("");
    const dynamicTags = ref(["Tag1", "Tag2", "Tag3"]);
    const inputVisible = ref(false);
    // const InputRef = ref < InstanceType < typeof ElInput >> new ElInput();
    const handleClose = (tag) => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };
    const showInput = () => {
      inputVisible.value = true;
      // nextTick(() => {
      //   InputRef.value.input.focus();
      // });
    };
    const handleInputConfirm = () => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
    };

    return {
      textarea1,
      handleCommand,
      inputValue,
      dynamicTags,
      inputVisible,
      // InputRef,
      handleClose,
      showInput,
      handleInputConfirm,
      ElInput,
    };
  },
};
</script>

<style scoped>
.cart_container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  position: relative;
}
.add_cartButton {
  height: 40px;
  width: 8%;
  margin-top: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.cart_container .additional-textarea {
  width: 90%;
  position: relative;
  left: 2%;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.info {
  display: flex;
  height: 36px;
  position: relative;
}
.name {
  margin-left: 11px;
  margin-top: 8px;
  font-weight: 500;
  position: absolute;
  font-size: 14px;
  color: #606266;
}
.date {
  margin-left: 70%;
  margin-top: 10px;
  font-weight: 500;
  color: #606266;
  position: absolute;
  font-size: 14px;
}
.time {
  margin-left: 84%;
  margin-top: 10px;
  font-weight: 500;
  color: #606266;
  position: absolute;
  font-size: 14px;
}
.textarea-container {
  position: relative;
}
.el-input {
  font-size: 14px;
  border: none;
}
.textarea-container .edit_textButton {
  height: 32px;
  width: 45px;
  right: 12px;
  top: 12px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 6px 10px;
}
.tag {
  margin-right: 4px;
}
</style>
