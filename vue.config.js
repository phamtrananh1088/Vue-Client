
module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
            $home-img: url('`+process.env.VUE_APP_CDN_URL+`image/24me.png');
            $cdn-url: '`+process.env.VUE_APP_CDN_URL+`';
            @import '@/scss/_variable.scss';
          `
        }
      }
    }
  };