<template>
  <div class="home-menu">
    <a-menu mode="inline" :defaultSelectedKeys="['1']" theme="light">
      <a-menu-item key="1">
        <router-link to="/index/all">全部</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/index/good">精华</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/index/ask">问答</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/index/job">招聘</router-link>
      </a-menu-item>
      <a-menu-item key="5">
        <router-link to="/index/dev">测试</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "HomeMenu",
  props: [""],
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.home-menu {
  text-align: center;
  height: 100%;
}
</style>