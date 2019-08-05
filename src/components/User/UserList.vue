<template>
  <div>
    <a-card :title="title">
      <a-list :dataSource="dataList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-list-item-meta>
            <a-avatar slot="avatar" :src="item.author.avatar_url" />
            <div slot="description" class="count">
              <router-link :to="'/themedetail/'+ item.id">{{ item.title }}</router-link>
            </div>
          </a-list-item-meta>
          <div>{{ item.last_reply_at.split("T")[0] }}</div>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["dataList", "title"],
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='' scoped>
</style>