<template>
  <div class="app-wrapper">
    <Header />
    <Content />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
export default {
  name: "App",
  components: { Header, Content },
};
</script>

<style>
body {
  width: 300px;
  height: 250px;
  padding: 12px;
  margin: 0px;
}
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
