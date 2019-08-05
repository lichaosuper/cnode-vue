<template>
  <div>
    <a-tag v-if="nowTag" :color="nowTag.color">{{nowTag.txt}}</a-tag>
  </div>
</template>

<script>
const tag = {
  top: {
    color: "magenta",
    txt: "置顶"
  },
  good: {
    color: "geekblue",
    txt: "精华"
  },
  job: {
    color: "cyan",
    txt: "招聘"
  },
  share: {
    color: "purple",
    txt: "分享"
  },
  ask: {
    color: "green",
    txt: "问答"
  },
  dev: {
    color: "lime",
    txt: "测试"
  }
};
export default {
  name: "TxtTag",
  props: ["dataObj"],
  data() {
    return {
      nowTag: ""
    };
  },

  components: {},

  computed: {},

  created() {
    this.nowTag = this.getTag(this.dataObj);
  },

  beforeMount() {},

  mounted() {},

  methods: {
    getTag(data) {
      return data.top ? tag.top : data.good ? tag.good : tag[data.tab];
    }
  },

  watch: {
    // ------------------需要和其他框架比较的地方1，父组件传给子组件的数据发生改变不会自动触发组件更新，要手动监听watch
    dataObj: function() {
      this.nowTag = this.getTag(this.dataObj);
    }
  }
};
</script>
<style lang='' scoped>
</style>