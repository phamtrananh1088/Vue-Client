<template>
  <div class="fenew" v-if="!loading">
    <router-link :to="tin.href" class="fuf">
      <img :src="tin.imgSrc" :alt="tin.imgAlt" />
    </router-link>
    <h3 class="title">
      <router-link :to="tin.href">
        {{ tin.title }}
      </router-link>
    </h3>
    <div class="sao">
      <router-link :to="tin.categoryLink" class="cate">
        {{ tin.category }}
      </router-link>
      <span>{{ tin.display }}</span>
    </div>
  </div>
</template>
<style scoped>
.cate::after {
  content: "•";
  color: #aaa;
  margin-left: 5px;
}
.fenew > a.fuf {
  width: 100%;
  display: inline-block;
}
.fenew > a.fuf img {
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
<style lang="scss" scoped>
.cate {
  text-transform: uppercase;
  color: $color;
  font-size: 14px;
  margin-right: 7px;
}
</style>
<script>
import axios from "axios";
export default {
  name: "HotNew",
  data() {
    return {
      loading: true,
      tin: {},
    };
  },
  props: {
    cate: String,
  },
  created() {
    this.load();
  },
  methods: {
    load: function () {
      axios
        .get(this.urlApi("getHotNew"), {
          params: {
            cate: this.cate,
          },
        })
        .then((response) => {
            this.loading = false
          console.log(response.data);
          this.tin = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>