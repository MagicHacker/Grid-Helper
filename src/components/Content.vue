<template>
  <div class="content-wrapper">
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <el-color-picker v-model="color"></el-color-picker>
  </div>
</template>
<script>
export default {
  name: "Content",
  data() {
    return {
      value: true,
      color: "#409EFF",
    };
  },
};
</script>
<style lang="scss" scoped>
.content-wrapper {
}
</style>
