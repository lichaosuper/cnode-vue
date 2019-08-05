<template>
  <div class="userWrap">
    <user-introduce :userdata="userdata" />
    <user-list :dataList="userdata.recent_topics" :title="'最近发起的话题'" />
    <user-list :dataList="userdata.recent_replies" :title="'最近回复的话题'" />
  </div>
</template>

<script>
import { UserIntroduce, UserList } from "../components/User/index";
export default {
  name: "",
  props: [""],
  data() {
    return {
      userdata: ""
    };
  },

  components: {
    UserIntroduce,
    UserList
  },

  created() {
    this.getUser(this.$route.params.id);
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getUser(id) {
      this.$http.get(`user/${id}`).then(
        function(res) {
          if (res.body.success) {
            this.userdata = res.body.data;
          }
        },
        function(err) {
          console.log(err);
        }
      );
    }
  },

  watch: {}
};
</script>
<style scoped>
.userWrap {
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
}
</style>