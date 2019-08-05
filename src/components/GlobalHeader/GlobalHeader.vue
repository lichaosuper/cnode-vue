<template>
  <div>
    <a-layout-header>
      <a-row>
        <a-col :md="6" :xs="24">
          <img class="logo" src="//static2.cnodejs.org/public/images/cnodejs_light.svg" />
        </a-col>
        <a-col :md="18" :xs="0">
          <global-header-nav />
        </a-col>
        <a-col :md="0" :xs="24">
          <global-header-nav />
        </a-col>
      </a-row>
    </a-layout-header>
  </div>
</template>

<script>
import GlobalHeaderNav from "./GlobalHeaderNav.vue";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },

  components: {
    GlobalHeaderNav
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.logo {
  width: 50%;
  vertical-align: inherit;
  margin-top: 10px;
}
</style>