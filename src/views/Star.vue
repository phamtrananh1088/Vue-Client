<template>
<div class="wraper">
      <div class="cont">
        <ListPage :cate="$route.path"></ListPage>
      </div>
    </div>
</template>

<style scoped>
.cont {
  padding: 16px;
  background: #fff;
  overflow: hidden;
}
</style>
<script>
// @ is an alias to /src
import ListPage from "@/components/ListPage.vue";
export default {
  data() {
    return {
      loading: false,
      error: null,
      cate: null
    };
  },
  components: {
    ListPage
  },
  props:{
    path: String
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
