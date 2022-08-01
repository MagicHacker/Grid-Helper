<template>
  <div class="content-wrapper">
    <el-form label-width="70px" label-position="right" size="mini">
      <el-form-item label="switch"
        ><el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch
      ></el-form-item>
      <el-form-item label="palette"
        ><el-color-picker v-model="color"></el-color-picker
      ></el-form-item>
      <el-form-item label="column">
        <el-input placeholder="columns"></el-input>
      </el-form-item>
    </el-form>
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
  width: 210px;
  height: 100%;
}
</style>
