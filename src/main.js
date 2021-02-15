import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '../src/store'
const myMixin = {
    methods: {
      isMobile () {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      imageLinkCdn(){
        return process.env.VUE_APP_CDN_URL+'image/'
      },
      urlNewCdn(){
        return process.env.VUE_APP_CDN_URL+'news/'
      },
      logoLinkCdn(){
        return process.env.VUE_APP_CDN_URL+'image/24me.png'
      },
      mobiLinkCdn(){
        return process.env.VUE_APP_CDN_URL+'mob/'
      },
      urlApi(route){
        return process.env.VUE_APP_API_URL+ route
      }
   }
}
createApp(App).mixin(myMixin).use(store).use(router).mount('#app')
