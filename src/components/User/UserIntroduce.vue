<template>
  <div class="userWrap">
    <div class="avatar">
      <a-avatar :size="64" :src="userdata.avatar_url" />
    </div>
    <a-row class="detail-item">
      <a-col :md="8">
        用户名:
        <span>{{ userdata.loginname }}</span>
      </a-col>
      <a-col :md="8">
        积分:
        <span>{{ userdata.score }}</span>
      </a-col>
      <a-col :md="8">
        注册时间:
        <span>{{ userdata.create_at }}</span>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["userdata"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.userWrap {
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
}

.avatar {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.detail-item {
  text-align: center;
}

.ant-col-md-8 {
  line-height: 50px;
}
</style>