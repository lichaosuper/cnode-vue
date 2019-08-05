<template>
  <div id="app">
    <a-layout>
      <global-header />
      <router-view />
      <global-footer />
    </a-layout>
  </div>
</template>

<script>
import GlobalHeader from "./components/GlobalHeader/index";
import GlobalFooter from "./components/GlobalFooter/index";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>

<style>
</style>
