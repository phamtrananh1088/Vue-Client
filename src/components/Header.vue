<template>
  <div class="headre">
    <header id="hed" class="hed">
      <router-link to="/" class="logo">
      </router-link>
        <ul class="mun">
          <MenuItem v-if="mMenu.length > 0" :item="mMenu[0]" />
          <MenuItem :item="{
              href: '#',
              icoSrc: icodanhmuc,
              icoAlt: 'danh mục',
              mnuText: 'Menu',
            }" />
        </ul>
    </header>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  width: 105px;
  height: 33px;
  background-image: $home-img;
  background-size: 111px;
  background-repeat: no-repeat;
  background-position: -22px -22px;
  margin-left: 8px;
  margin-right: auto;
}
</style>
<style scoped>
ul.mun {
  height: 100%;
  float: right;
  overflow: hidden;
}
.headre {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1002 !important;
}

.hed {
  height: 60px;
  width: 100%;
  background-color: darkgreen;
  z-index: 999;
  display: flex;
  align-items: center;
}

.hug {
  width: 100%;
}

</style>
<script>
import axios from "axios";
import MenuItem from '@/components/MenuItem.vue'
export default {
  name: "Header",
  data() {
    return {
      icodanhmuc: this.imageLinkCdn() + "ico_danhmuc.gif",
      mMenu: [],
      mMenuD: []
    };
  },
  props: {},
  components: {
    MenuItem
  },
  mounted() {
    if (this.isMobile()) {
      axios
        .get(this.urlApi("getMenu"))
        .then((response) => {
          console.log(response.data.menu);
          this.mMenu = response.data.menu;
        })
        .catch((error) => console.log(error));
    }
    if (!this.isMobile()) {
      axios
        .get(this.urlApi("getMenuD"))
        .then((response) => {
          console.log(response.data.menu);
          this.mMenuD = response.data.menu;
        })
        .catch((error) => console.log(error));
    }
  },
  methods: {
    onMenuChange: function (key) {
      console.log(key);
    },
  },
};
</script>