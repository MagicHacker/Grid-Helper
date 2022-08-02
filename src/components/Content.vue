<template>
  <div class="content-wrapper">
    <el-form
      label-width="70px"
      :model="formData"
      label-position="right"
      size="mini"
    >
      <el-form-item label="switch"
        ><el-switch v-model="formData.switchValue"> </el-switch
      ></el-form-item>
      <el-form-item label="palette"
        ><el-color-picker v-model="formData.color"></el-color-picker
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
      formData: {
        switchValue: false,
        color: "#d5f1df",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.content-wrapper {
  width: 210px;
}
</style>
