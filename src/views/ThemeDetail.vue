<template>
  <div class="detail">
    <theme-detail :dataObj="dataObj" />
  </div>
</template>

<script>
import ThemeDetail from "../components/ThemeDetail/index";
export default {
  name: "",
  props: [""],
  data() {
    return {
      dataObj: {}
    };
  },

  components: {
    ThemeDetail
  },

  created() {
    this.getThemeDetail(this.$route.params.id);
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    getThemeDetail(id) {
      this.$http.get(`topic/${id}`).then(
        function(res) {
          if (res.body.success) {
            // 渲染数据
            this.dataObj = res.body.data;
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
.detail {
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
}
</style>