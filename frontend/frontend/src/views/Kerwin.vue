<template>
  <div class="kerwin">
    <TagSearchArea />
    <div style="margin: 20px"></div>
    <documentArea />
  </div>
</template>

<script>
import TagSearchArea from "@/components/KerwinBricks/TagSearchArea.vue";
import documentArea from "@/components/KerwinBricks/DCM.vue";
export default {
  name: "Kerwin",
  components: { TagSearchArea, documentArea },
};
</script>

<style scoped>
.kerwin {
  background-color: antiquewhite;
  height: 200vh;
  width: 100%;
  /* margin: 2rem; */
  /* padding: 2rem; */
}
</style>
