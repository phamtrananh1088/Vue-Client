<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
  border: 0;
}
body {
  margin: 0 !important;
}

ul, li {
  list-style: none;
}

body, html, ul {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

.colorWhite {
  color: #fff;
}
h3.title a {
  color: #333;
}
</style>
<style scoped>
#app {
  padding: 60px 0 0;
  width: 100%;
  overflow: hidden;
  margin: 0;
  border: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
</style>
<script>
  import Header from '@/components/Header.vue'
  export default {
    data () {
      return {
        apiMenus : [],
        keys: 'a'
      }
    },
    components: {
      Header
    },
    mounted () {
      
    },
    methods: {
      onMenuChange: function (key) {
        // this.keys = key
        console.log(key)
      }
    }
 }
</script>
