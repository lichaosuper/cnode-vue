<template>
  <div>
    <a-layout>
      <a-layout-sider>
        <HomeMenu />
      </a-layout-sider>
      <a-layout-content>
        <HomeList :list="list" @changePage="changePage" />>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { HomeMenu, HomeList } from "../components/Home/index";
export default {
  name: "Home",
  props: [""],
  data() {
    return {
      list: [],
      tab: ""
    };
  },

  components: {
    HomeMenu,
    HomeList
  },

  computed: {},

  created() {
    // 去请求后台数据
    this.getThemeList(1, this.tab);
  },

  beforeMount() {},

  mounted() {},

  methods: {
    // 去后台请求帖子列表数据
    getThemeList: function(currentPage, tab) {
      this.$http.get(`topics?page=${currentPage}&tab=${tab}`).then(
        function(res) {
          // 渲染数据
          if (res.body.success) {
            this.list = res.body.data;
          }
        },
        function(err) {
          console.log(err);
        }
      );
    },
    // 翻页
    changePage: function(currentPage) {
      // 重新请求数据
      this.getThemeList(currentPage, this.tab);
    }
  },

  watch: {
    // 监听,当路由发生变化的时候执行
    $route(to, from) {
      // 分类改变时重新请求数据
      if (this.tab !== to.params.id) {
        this.tab = to.params.id;
        this.getThemeList(1, to.params.id);
      }
    }
  }
};
</script>
<style lang='' scoped>
</style>