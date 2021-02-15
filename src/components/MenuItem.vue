<template>
  <li class="fuf">
    <router-link :to="item.href" class="colorWhite" @click="$emit('menu-change', item.key)">
      <span class="icot">
        <img :src="item.icoSrc" :alt="item.icoAlt" class="guh" />
      </span>
      <span class="texb">
        {{item.mnuText}}
      </span>
    </router-link>
  </li>
</template>

<style scoped>
.colorWhite {
  color: white;
}
img.guh {
  width: 20px;
  height: 20px;
}
li.fuf {
  float: left;
  height: 100%;
  padding: 0 3px;
  position: relative;
  display: flex;
  align-items: center;
}
.mnuf {
  display: inline-block;
  list-style: none;
  padding: 7px 3px;
  position: relative;
  text-align: center;
}

.icot {
    display: block;
    text-align: center;
}

.texb {
    display: block;
    text-transform: uppercase;
}
</style>

<script>
export default {
    name: 'MenuItem',
    props: {
        item: {
          type: Object
        }
    }
}
</script>