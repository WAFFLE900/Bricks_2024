<template>
    <div class="form">
        <p class="formName">設定會議基本資訊</p>
        <el-form :model="form" >
            <el-form-item label="會議名稱">
            <el-input v-model="form.name"  :style="{ width: '500px' }" />
        </el-form-item>
      <el-form-item label="日期">
        <div class="demo-date-picker" >
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a date"
            :default-value="new Date(2010, 9, 1)"
            :style="{ width: '500px' }"
        />
        </div>
      </el-form-item>
      <el-form-item label="開會時間">
          <div class="demo-range"  :style="{ width: '471px' }">
            <el-time-picker
            v-model="value2"
            is-range
            range-separator="To"
            start-placeholder="Start time"
            end-placeholder="End time"
            />
            </div>
        </el-form-item>
        <el-form-item label="出席人員">
        <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="選擇出席人員"
    :style="{ width: '500px' }"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
      </el-form-item>
      <el-form-item label="會議進行地點">
            <el-input v-model="form.place"  :style="{ width: '500px' }" />
        </el-form-item>
        <el-form-item label="缺席人員">
        <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="選擇缺席人員"
    :style="{ width: '500px' }"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
      </el-form-item>
      <el-form-item label="紀錄負責人員">
        <el-select
    v-model="value"
    multiple
    filterable
    allow-create
    default-first-option
    :reserve-keyword="false"
    placeholder="選擇會議記錄人員"
    :style="{ width: '500px' }"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
      </el-form-item>
      <el-form-item>
            <el-button type="primary" @click="onSubmit">儲存</el-button>
        </el-form-item>
    </el-form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  import { ref } from 'vue'
  const value1 = ref('')
  const value2 = ref<[Date, Date]>([
      new Date(2016, 9, 10, 8, 40),
      new Date(2016, 9, 10, 9, 40),
  ])
 
//   const value = ref<string[]>([])
// const options = [
//   {
//     value: 'HTML',
//     label: 'HTML',
//   },
//   {
//     value: 'CSS',
//     label: 'CSS',
//   },
//   {
//     value: 'JavaScript',
//     label: 'JavaScript',
//   },
// ]
  // do not use same name with ref
  const form = reactive({
    name: '',
    region: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    place:'',
  })
  
  const onSubmit = () => {
    console.log('submit!')
  }
  </script>
<style>
.formName{
    font-size: 20px;
    text-align: left;
    font-weight: bold;
}
p {
  margin-top: 0;
  margin-bottom: 15px;
}
.form{
    width: 500px;
    margin-left: 700px;
    margin-bottom: 300px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 4px;
}
.form .el-form-item {
  margin-bottom: 25px;
  display: flex; /* 使用 Flexbox 布局 */
  flex-direction: column; /* 垂直方向布局 */
  align-items: flex-start; /* 靠左对齐 */
}
/* /label的字 */
.el-form-item__label {
  font-size: 15px;
  color: #000;
}
/* input內的字 */
.el-input {
  font-size: 15px;
}
.demo-date-picker {
    display: flex;
  width: 100%;
}
.demo-range .el-date-editor {
  margin: 0px;
  width: 100%;
}


</style>