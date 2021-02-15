<template>
    <ul v-if="!loading">
      <template v-for="(tin, index) in news" :key="index" >
        <li class="mfg"></li>
        <li class="mfg">
          <h3 class="title">
            <router-link :to="tin.href">
            {{tin.title}}
            </router-link>
          </h3>
          <router-link :to="tin.href" class="fuf">
            <img :src="tin.imgSrc" :alt="tin.imgAlt" class="img"/>
          </router-link>
          <div class="saoo">
            {{tin.display}}
            <div>
              <router-link :to="tin.categoryLink" class="cate">
                {{tin.category}}
              </router-link>
            </div>
          </div>
        </li>
      </template>
    </ul>
</template>

<style scoped>
.img {
  width: 100%;
  display: block;
}
.mfg {
  display: inline-block;
  padding: 24px 0;
  border-bottom: 1px solid #989998;
}

ul li.mfg:first-child {
  display: block;
  border-top: 1px solid #40a214;
  padding: 0;
}

.fuf {
  width: 50%;
  float: left;
  margin-right: 4%;
}
.saoo {
    font-size: 14px;
    line-height: 18px;
    margin-left: 54%;
    display: flex;
    flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
.cate {
  text-transform: uppercase;
  color: $color;
  font-size: 12px;
}
</style>
<script>
import axios from "axios";
export default {
    name: 'ListDaily',
    data () {
      return {
        loading: true,
        news: []
      }
    },
    props: {
        cate: String
    },
    created () {
      this.getDaiLy()
    },
    methods: {
      getDaiLy: function () {
        axios
        .get(this.urlApi("getDaiLy"),
        {
          params: {
            cate: this.cate
          }
        })
        .then((response) => {
          this.loading = false
          console.log(response.data);
          this.news = response.data;
        })
        .catch((error) => console.log(error));
      }
    }
}
</script>