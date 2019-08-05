<template>
  <div class="book">
    <div v-for="(item, index) in bookdata" :key="index">
      <public-card :dataObj="item" />>
    </div>
  </div>
</template>

<script>
import bookdata from "../assets/book-data";
import PublicCard from "../components/Common/PublicCard";
export default {
  name: "",
  props: [""],
  data() {
    return {
      bookdata: bookdata
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
.book {
  width: 90%;
  margin: 0 auto;
}
</style>