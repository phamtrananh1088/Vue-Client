<template>
  <div>
    <div class="breadcrumb">
      <ul class="cate-nav">
        <li class="sm-logo">
          <router-link to="/" class="colorWhite home"> </router-link>
        </li>
        <li class="arro">›</li>
        <li>
          <span class="amfg"> {{ $route.params.key }} {{ data }} </span>
        </li>
      </ul>
    </div>
    <div class="subme">
      <div class="clearfix">
        <ul>
          <li class="abl">
            <router-link to="/xa-hoi" class="ping">
              <span class="ming"> Xã hội </span>
            </router-link>
          </li>
          <li class="abl">
            <router-link to="/star" class="ping">
              <span class="ming"> Star </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="conte">
      <div class="tinfo">
        <h1 class="title">
          Nhan sắc 4 nàng công chúa Disney trong phim và đời thực: Emma Watson
          gây thất vọng giữa dàn ngọc quý đẹp lạ
        </h1>
      </div>
      <div class="author">
        <span class="aut">TRANANH</span>
        <span class="sour">Theo Abc</span>
        <span class="timr">10 giờ trước</span>
      </div>
      <div class="maoo">
        4 nàng công chúa Disney Emma Watson, Lily James, Elle Fanning, Naomi
        Scott sở hữu nhan sắc rất riêng, mang lại cho fan cảm xúc khác biệt.
      </div>
      <div class="po-co">
        <p>
          Ông lớn hoạt hình Disney từ lâu đã nổi danh với những bộ phim
          live-action được đầu tư kĩ lưỡng "hô biến" những nhân vật chỉ có trong
          câu chuyện cổ tích trở thành phiên bản người thực đầy sống động. Chính
          vì thế, mỗi khi được trình làng "những nàng công chúa Disney" luôn thu
          hút rất nhiều sự chú ý từ phía người hâm mộ.
        </p>
        <p>
          4 nữ diễn viên
          <router-link to="/">Emma Watson</router-link>,<router-link to="/star"
            >Lily James</router-link
          >, <router-link to="/star">Lily James</router-link>,
          <router-link to="/xa-hoi">Naomi Scott</router-link>
          may mắn được lọt vào mắt xanh của Disney khi được chọn để hóa thân
          thành những nàng công chúa nổi tiếng nhất bước ra ngoài đời thực. Khắc
          hẳn tạo hình trong phim, nhan sắc thật của 4 người đẹp cũng khiến fan
          vô cùng tò mò. Liệu các nàng công chúa trong mơ này có đẹp đến thế
          ngoài đời?
        </p>
        <div class="secimg">
          <div class="vimg">
            <img class="ifag" :src="urlNewCdn() + 'photo1614.jpg'" />
          </div>
          <div class="vcap">
            <p>
              Những cán bộ chống dịch vận chuyển nhu yếu phẩm giúp đỡ cư dân
              trong khu vực bị cách ly
            </p>
          </div>
        </div>
        <p>
          Cuối tháng 1/2020, diễn viên Ngô Thanh Vân chia sẻ lên fanpage thông
          tin các hãng hàng không vẫn có chuyến bay từ Vũ Hán về Việt Nam giữa
          đại dịch. Bài chia sẻ của Ngô Thanh Vân được đăng vào thời điểm Cục
          hàng không đã dừng cấp phép các chuyến bay từ Việt Nam đi Vũ Hán và
          ngược lại. Vì thế, Ngô Thanh Vân bị cộng đồng mạng phản ứng.<span
            style=""
          >
            Tới tháng 2 cùng năm, nữ diễn viên bị Sở Thông tin và Truyền thông
            TP.HCM phạt 10 triệu đồng vì bài đăng kể trên.</span
          >
        </p>

        <div class="qcbg">
          <div class="qcbg1">
            <div class="qcin">
              <div style="display: block; position: relative">
                <img class="qcim" :src="urlNewCdn() + 'quangcao1241.jpg'" />
              </div>
            </div>
          </div>
        </div>

        <div class="secimg">
          <div class="vimg">
            <img class="ifag" :src="urlNewCdn() + 'photo1615.jpg'" />
          </div>
          <div class="vcap"></div>
        </div>
        <p class="">
          Như đã nói, nền giải trí ở Trung Quốc, Hàn Quốc không phải là nơi để
          các nghệ sĩ có quyền "nói hớ". Sự khắt khe trong cách phản ứng từ cư
          dân mạng trước những phát ngôn lệch chuẩn của sao là quy luật hiện hữu
          từ muôn đời nay. Trịnh Sảng và vô số lần "vạ miệng", phạm pháp tới mức
          bị "phong sát" mà lụi bại đường công danh, Jang Na Ra và Seolhyun
          (AOA) đều có những phát ngôn gây mất lòng công chúng ngay trên sóng
          truyền hình, khiến sự nghiệp chao đảo suốt 1 thời gian dài,... đây là
          1 vài minh chứng hùng hồn nhất cho thấy sự khắt khe của netizen trong
          cách tiếp nhận phát ngôn từ người nổi tiếng.
          <b
            ><i
              >Chính sự khắt khe ấy là hàng rào kiên cố để loại bỏ tất cả những
              hành vi, lời nói không chuẩn mực</i
            ></b
          >.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.home {
  display: block;
  width: 80px;
  height: 45px;
  background-image: $home-img;
  background-repeat: no-repeat;
  background-size: 111px;
  background-position: -20px -365px;
}
li.arro {
  padding-right: 20px;
  margin-right: 20px;
  background: url($cdn-url + "mob/breadcrumb-arrow.png") right 15px no-repeat;
  background-size: 8px;
  font-size: 0;
}
.amfg {
  color: $color;
  font-weight: bold;
}
.aut {
  color: $color;
  font-weight: bold;
  margin-right: 4px;
}
</style>
<style scoped>
.sm-log {
  float: left;
  height: 100%;
}
.breadcrumb {
  background: #fafafa;
  height: 45px;
}
.cate-nav {
  padding: 0 10px;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.cate-nav li {
  float: left;
  height: 100%;
  display: flex;
  align-items: center;
}
.subme {
  padding: 12px 0;
  background: #e0f5dc;
  display: flex;
  align-items: center;
  height: 45px;
}
.abl {
  float: left;
  height: 26px;
  width: auto;
  margin-left: 12px;
  display: flex;
  align-items: center;
}
a.ping {
  background: #c3e9f2;
  border-radius: 3px;
}
.ming {
  padding: 0 10px;
  color: #555;
  font-size: 13px;
  font-weight: bold;
  line-height: 26px;
}
.conte {
  padding: 15px 10px;
}
.title {
  font-size: 22px;
  line-height: 28px;
  letter-spacing: -0.5px;
}
.author {
  margin-top: 12px;
  margin-bottom: 15px;
}
.sour {
  color: #777;
  margin-right: 4px;
}
.sour:before {
  content: "· ";
  font-weight: bold;
  margin: 4px;
}
.timr {
  color: #999;
}
.timr:before {
  content: "· ";
  font-weight: bold;
  margin: 4px;
}
.maoo {
  color: #222;
  font-size: 17px;
  line-height: 24px;
  margin-bottom: 24px;
}
.po-co {
  font-size: 17px;
  line-height: 24px;
  color: #222;
}
.po-co > p {
  margin-bottom: 24px;
}
.secimg {
  margin: 0 -10px 24px;
}

img.ifag {
  display: block;
  width: 100%;
}
.vcap {
  padding: 8px 16px 0;
  color: #999;
  font-size: 13px;
  line-height: 16px;
}
.qcbg {
  padding: 0px;
  z-index: 1;
  height: 747px;
  position: relative;
  margin: 0px auto;
  overflow: initial;
  display: block;
}
.qcbg1 {
  position: absolute;
  width: 100%;
  height: 747px;
  clip: rect(0 375px 747px -20px);
}
.qcin {
  display: inline-block;
  width: 375px;
  height: 667px;
  position: fixed;
  top: 23px;
  left: 0;
}
.qcim {
  width: 375px;
  height: 667px;
  display: block;
  border: none;
}
</style>
<script>
import axios from "axios";
export default {
  name: "Article",
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.load();
  },
  methods: {
    load: function () {
      console.log(Object.keys(this.$route));
      axios
        .get(this.urlApi("getPost"), {
          params: {
            path: this.$route.path,
            key: this.$route.params.key,
            cate: this.$route.meta.cate,
          },
        })
        .then((response) => {
          console.log(response);
          this.data = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>