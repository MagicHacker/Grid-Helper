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
html,
body {
  width: 240px;
  height: 200px;
  padding: 12px;
  margin: 0px;
}
</style>
