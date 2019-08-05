<template>
  <div>
    <a-card :title="dataObj.title">
      <div v-html="dataObj.content"></div>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["dataObj"],
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
<style lang='' scoped>
</style>