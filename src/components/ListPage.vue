<template>

  <div class="home">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
    <HotNew :cate="cate"></HotNew>
    <ListDaily :cate="cate"></ListDaily>
  </div>
</template>

<style scoped>
.fenew>a.fuf {
  width: 100%;
  display: inline-block;
}
.fenew>a.fuf img {
  width: 100%;
  display: block; 
}
.title {
  margin-top: 8px;
  margin-bottom: 8px;
}
.sao {
  color: #555;
  margin-bottom: 24px;
}
</style>
<script>
// @ is an alias to /src
import ListDaily from "@/components/ListDaily.vue";
import HotNew from "@/components/HotNew.vue";
export default {
  name: "ListPage",
  data() {
    return {
      loading: false,
      error: null
    };
  },
  components: {
    HotNew,
    ListDaily
  },
  props:{
    cate: String
  },
  watch: {
  },
  created () {
  },
  mounted() {
  },
  methods: {
  }
};
</script>
