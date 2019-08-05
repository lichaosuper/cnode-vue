<template>
  <div>
    <a-menu :defaultSelectedKeys="['1']" mode="horizontal" theme="light">
      <a-menu-item key="1">
        <router-link to="/">首页</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/book">教程</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/about">关于</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: [""],
  data() {
    return {};
  }
};
</script>
<style scoped>
.ant-menu {
  margin-top: 8px;
}

.ant-menu-item-selected,
router-link-active {
  background-color: transparent;
  color: blue;
}
</style>