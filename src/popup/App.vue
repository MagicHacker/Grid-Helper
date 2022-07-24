<template>
  <div>
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
  width: 200px;
  height: 200px;
  padding: 0px;
  margin: 0px;
}
</style>
