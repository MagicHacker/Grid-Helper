<template>
  <div class="content-wrapper">
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>
<script>
export default {
  name: "Content",
  data() {
    return {
      value: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.content-wrapper {
}
</style>
