<template>
  <div class="about">
    <div v-for="(item, index) in aboutdata" :key="index">
      <public-card :dataObj="item" />>
    </div>
  </div>
</template>

<script>
import aboutdata from "../assets/about-data";
import PublicCard from "../components/Common/PublicCard.vue";
export default {
  name: "About" /*指组件自身组件调用自身组件*/,
  props: [""],
  data() {
    return {
      aboutdata: aboutdata
    };
  },

  components: {
    PublicCard
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {}
};
</script>
<style scoped>
.about {
  width: 90%;
  margin: 0 auto;
}

img {
  width: 500px;
  height: 120px;
}
</style>