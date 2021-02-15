<template>
    <ul class="mun">
      <MenuItem v-for="item in menu" :key="item.key" :item="item" v-on:menu-change="$emit('menu-change', $event)"/>
    </ul>
</template>
<style scoped>
.mun {
  height: 100%;
}
</style>
<script>
import MenuItem from '@/components/MenuItem.vue'
export default {
    name: 'Menu',
    props: {
        menu: {
          type: Array
        }
    },
    components: {
      MenuItem
    },
}
</script>