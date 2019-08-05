<template>
  <div class="detail">
    <div class="detail-content">
      <div class="top">
        <div>
          <span class="title">{{dataObj.title}}</span>
        </div>
        <div class="ul">
          <ul>
            <li>发布于：{{dataObj.create_at}}</li>
            <li>
              <router-link
                v-if="dataObj.author"
                :to="'/user/' + dataObj.author.loginname"
              >作者：{{dataObj.author.loginname}}</router-link>
            </li>
            <li>{{dataObj.visit_count}}次浏览</li>
          </ul>
        </div>
      </div>
      <div v-html="dataObj.content"></div>
    </div>
    <!-- slot="renderItem" slot-scope="item" 的作用 -->
    <a-card title="回复">
      <a-list :dataSource="dataObj.replies">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta :title="item.author.loginname">
            <a-avatar slot="avatar" :src="item.author.avatar_url" />
            <div v-html="item.content" slot="description" class="count"></div>
          </a-list-item-meta>
          <div>{{ item.create_at.split('T')[0] }}</div>
        </a-list-item>
      </a-list>
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

  methods: {},

  watch: {}
};
</script>
<style scoped>
.detail-content {
  margin: 20px 30px 20px 30px;
}

.top {
  border-bottom: 1px solid #f2f4f6;
}

.title {
  font-size: 30px;
  font-size: 700;
}

.ul ul li {
  display: inline-block;
  margin-right: 30px;
}
</style>