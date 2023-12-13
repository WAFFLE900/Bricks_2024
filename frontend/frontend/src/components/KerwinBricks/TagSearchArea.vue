<template>
  <div class="tagSearchArea">
    <div class="tagTypingArea">
      <el-button type="danger">標籤</el-button>
      <el-select-v2
        v-model="value"
        filterable
        :options="options1"
        placeholder="點擊選擇或輸入標籤"
        multiple
      />
    </div>
    <div class="trans"></div>
    <div class="demo-collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template #title>
            日期
            <el-icon class="header-icon">
              <info-filled />
            </el-icon>
          </template>
          <div class="order scrollbar">
            <el-check-tag
              v-for="(tagD, idx) in tagsDate"
              :key="`tagD_${idx}`"
              :checked="tagD.checked"
              @change="onChange(tagD, idx)"
              :class="{ tagChecked: tagD.checked, tagUnchecked: !tagD.checked }"
            >
              {{ tagD.label }}
            </el-check-tag>
            <p class="no-use">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              sequi harum deserunt eum eius aliquid temporibus velit quos.
              Recusandae commodi tenetur blanditiis omnis voluptates nesciunt
              dolores voluptas quam praesentium quia odit, veritatis modi
              consequuntur, amet atque iure rerum, quos accusantium cupiditate
              ad harum dignissimos! Dolores a neque pariatur atque incidunt
              quaerat culpa veniam quas officiis sequi sed vitae quod commodi,
              eveniet nobis officia consectetur aut, ab optio similique, placeat
              aspernatur. Laborum soluta minima expedita. Harum incidunt culpa
              porro, praesentium nulla ut blanditiis eaque iusto officia itaque
              reiciendis adipisci et aliquid facilis ipsa explicabo nam sequi ad
              laborum qui illum corporis.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="事項" name="2">
          <div class="order scrollbar">
            <el-check-tag
              v-for="(tag2, idx) in tagsThing"
              :key="`tag2_${idx}`"
              :checked="tag2.checked"
              @change="onChange(tag2, idx)"
              :class="{ tagChecked: tag2.checked, tagUnchecked: !tag2.checked }"
            >
              {{ tag2.label }}
            </el-check-tag>
            <p class="no-use">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              sequi harum deserunt eum eius aliquid temporibus velit quos.
              Recusandae commodi tenetur blanditiis omnis voluptates nesciunt
              dolores voluptas quam praesentium quia odit, veritatis modi
              consequuntur, amet atque iure rerum, quos accusantium cupiditate
              ad harum dignissimos! Dolores a neque pariatur atque incidunt
              quaerat culpa veniam quas officiis sequi sed vitae quod commodi,
              eveniet nobis officia consectetur aut, ab optio similique, placeat
              aspernatur. Laborum soluta minima expedita. Harum incidunt culpa
              porro, praesentium nulla ut blanditiis eaque iusto officia itaque
              reiciendis adipisci et aliquid facilis ipsa explicabo nam sequi ad
              laborum qui illum corporis.
            </p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="組別" name="3">
          <div class="order scrollbar">
            <el-check-tag
              v-for="(tag, idx) in tagsTeam"
              :key="`tag3_${idx}`"
              :checked="tag.checked"
              @change="onChange(tag, idx)"
              :class="{ tagChecked: tag.checked, tagUnchecked: !tag.checked }"
            >
              {{ tag.label }}
            </el-check-tag>
            <p class="no-use">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              sequi harum deserunt eum eius aliquid temporibus velit quos.
              Recusandae commodi tenetur blanditiis omnis voluptates nesciunt
              dolores voluptas quam praesentium quia odit, veritatis modi
              consequuntur, amet atque iure rerum, quos accusantium cupiditate
              ad harum dignissimos! Dolores a neque pariatur atque incidunt
              quaerat culpa veniam quas officiis sequi sed vitae quod commodi,
              eveniet nobis officia consectetur aut, ab optio similique, placeat
              aspernatur. Laborum soluta minima expedita. Harum incidunt culpa
              porro, praesentium nulla ut blanditiis eaque iusto officia itaque
              reiciendis adipisci et aliquid facilis ipsa explicabo nam sequi ad
              laborum qui illum corporis.
            </p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "TagSearchArea",
  setup() {
    const initials = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const selectedOptions = ref([]);
    const options1 = Array.from({ length: 1000 }).map((_, idx) => ({
      key: `Option${idx + 1}`, // Assuming key is needed
      label: `${initials[idx % 10]}${idx}`,
    }));
    const activeNames = ref(["1"]);
    const handleChange = (val) => {
      console.log(val);
    };
    const tagsDate = ref([
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
    ]);
    const tagsThing = ref([
      { label: "Tag 1", checked: false },
      { label: "Tag 8", checked: false },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
    ]);
    const tagsTeam = ref([
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: false },
    ]);
    const checked = ref(false);

    const onChange = (tag, idx) => {
      tagsDate.value[idx].checked = !tagsDate.value[idx].checked;
      tagsTeam.value[idx].checked = !tagsTeam.value[idx].checked;
      tagsThing.value[idx].checked = !tagsThing.value[idx].checked;
      if (tagsDate.value[idx].checked) {
        const checkedTag = tagsDate.value.splice(idx, 1)[0];
        tagsDate.value.unshift(checkedTag);
      } else if (!tagsDate.value[idx].checked) {
        const uncheckedTag = tagsDate.value.splice(idx, 1)[0];
        tagsDate.value.push(uncheckedTag);
      }
      if (tagsTeam.value[idx].checked) {
        const checkedTag = tagsTeam.value.splice(idx, 1)[0];
        tagsTeam.value.unshift(checkedTag);
      } else if (!tagsDate.value[idx].checked) {
        const uncheckedTag = tagsDate.value.splice(idx, 1)[0];
        tagsDate.value.push(uncheckedTag);
      }
      if (tagsThing.value[idx].checked) {
        const checkedTag = tagsThing.value.splice(idx, 1)[0];
        tagsThing.value.unshift(checkedTag);
      } else if (!tagsDate.value[idx].checked) {
        const uncheckedTag = tagsDate.value.splice(idx, 1)[0];
        tagsDate.value.push(uncheckedTag);
      }
    };

    return {
      selectedOptions,
      options1,
      activeNames,
      handleChange,
      checked,
      tagsDate,
      tagsThing,
      tagsTeam,
      onChange,
    };
  },
  methods() {},
};
</script>

<style scoped>
* {
  font-family: PingFang TC;
}
.tagSearchArea {
  width: 25%;
}
.tagSearchArea .trans {
  height: 1rem;
  width: 100%;
  opacity: 1;
  /* border: 2px solid black; */
}

.tagSearchArea .tagTypingArea .el-select-v2 {
  width: 100%;
}

.demo-collapse .el-collapse {
  width: 100%;
}
.demo-collapse .el-collapse-item {
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid #e4e7ed;
}
.demo-collapse .el-collapse-item * {
  display: flex;
  flex-wrap: wrap;
}
.no-use {
  font-size: 1px;
  color: white;
}
.header-icon {
}
.order {
  display: flex;
  max-height: 24vh;
  border-top: #e4e7ed 1px;
  width: 97%;
  display: flex;
  overflow-y: scroll;
}
.scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e6e8eb;
  }
}
.no-use {
  font-size: 1px;
}

.tagChecked {
  color: white;
  font-family: PingFang TC;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 2vh;
  display: flex;
  justify-content: space-around;
  margin: 6px;
  background-color: #c91f2f;
  border: 1px solid #c91f2f;
}

.tagChecked:hover {
  background-color: #c91f2f;
}

.tagUnchecked {
  font-family: PingFang TC;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 2vh;
  display: flex;
  justify-content: space-around;
  margin: 6px;
  color: #c91f2f;
  border: 1px solid #f4cbcf;
  background-color: white;
}
</style>
