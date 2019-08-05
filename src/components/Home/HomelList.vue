<template>
  <div class="home-list">
    <a-list itemLayout="horizontal" :dataSource="list">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <a-avatar slot="avatar" :src="item.author.avatar_url" />
          <div slot="description" class="count">
            <div class="number">{{item.reply_count}}/{{item.visit_count}}</div>
            <!-- 将item传给子组件app-txt-tag -->
            <txt-tag :dataObj="item" />
            <router-link :to="'/themedetail/'+ item.id">{{ item.title }}</router-link>
          </div>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-pagination v-model="currentPage" :total="200" @change="changePage" />
  </div>
</template>

<script>
import TxtTag from "../../components/Common/TxtTag";
export default {
  name: "HomeList",
  props: ["list"],
  data() {
    return {
      currentPage: 1,
      tab: ""
    };
  },

  components: {
    TxtTag
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    changePage(page, pageSize) {
      // 调用父组件分页后重新加载数据的方法
      this.$emit("changePage", page);
    }
  },

  watch: {
    // 监听,当路由发生变化的时候执行
    $route(to, from) {
      // 分类改变时重新将页数设为1
      if (this.tab !== to.params.id) {
        this.tab = to.params.id;
        this.currentPage = 1;
      }
    }
  }
};
</script>
<style scoped>
.home-list {
  padding: 0 20px 0 20px;
}

.count {
  display: flex;
  flex-direction: row;
}

.number {
  text-align: center;
  margin: 0 10px 0 0;
  min-width: 80px;
}
</style>