<template>
  <div class="tagSearchArea">
    <div class="tagTypingArea">
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
              v-for="(tag, idx) in tagsDate"
              :key="`tag_${idx}`"
              :checked="tag.checked"
              @change="onChange(tag, idx)"
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
        <el-collapse-item title="事項" name="2">
          <div class="order scrollbar">
            <el-check-tag
              v-for="(tag, idx) in tagsThing"
              :key="`tag_${idx}`"
              :checked="tag.checked"
              @change="onChange(tag, idx)"
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
        <el-collapse-item title="組別" name="3">
          <div class="order scrollbar">
            <el-check-tag
              v-for="(tag, idx) in tagsTeam"
              :key="`tag_${idx}`"
              :checked="tag.checked"
              @change="onChange(tag, idx)"
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
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
      { label: "Tag 2", checked: true },
    ]);
    const tagsThing = ref([
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: true },
    ]);
    const tagsTeam = ref([
      { label: "Tag 1", checked: false },
      { label: "Tag 2", checked: true },
    ]);
    const checked = ref(false);

    const onChange = (tag, idx) => {
      tagsDate.value[idx].checked = !tagsDate.value[idx].checked;
      tagsTeam.value[idx].checked = !tagsTeam.value[idx].checked;
      tagsThing.value[idx].checked = !tagsThing.value[idx].checked;
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

.demo-collapse .el-collapse-item .order .el-check-tag {
  color: #c91f2f;
  font-family: PingFang TC;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 2vh;
  border: 1px solid #f4cbcf;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  margin: 4px;
}
</style>
