<template>
  <div class="header-wrapper">
    <div class="header-logo"></div>
    <div class="header-text">Grid Helper</div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-logo {
    width: 40px;
    height: 40px;
    background-image: url("../assets/logo.png");
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .header-text {
    margin-top: 10px;
    font-size: 16px;
    color: #000;
  }
}
</style>
