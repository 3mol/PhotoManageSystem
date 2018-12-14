<template>
  <div>
    <!-- <transition name="el-zoom-in-top"> -->
      <div id="app" class="container" v-show="showPhoto">
        <div style="display: flex; justify-content:center; height:100vh; align-items: center;">
          <img style="height: 70%;" v-if="popPhotos!=null" v-bind:src="popPhotos[popPhotoIndex].photoOriginalUrl">
        </div>
        <img
          @click="setShowPhoto"
          src="/src/assets/img/close.png"
          style="width: 40px;height: 40px;position: absolute;right: 50px;top: 75px;"
        >
        <img
          @click="incPopPhotoIndex"
          src="/src/assets/img/right.png"
          style="width: 40px;height: 40px;position: absolute;right: 50px;top: 50vh;"
        >
        <img
          @click="decPopPhotoIndex"
          src="/src/assets/img/left.png"
          style="width: 40px;height: 40px;position: absolute;left: 50px;top: 50vh;"
        >
        <div style="background:#fff">缩略图等等的</div>
      </div>
    <!-- </transition> -->
    <transition name="el-zoom-in-topx">
      <CommentLayout v-show="showPhoto"></CommentLayout>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import CommentLayout from "./CommentLayout.vue";
export default {
  data() {
    return {
      show2: true,
      photoIndex: 0,
      photos: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544549505750&di=ef4aaf34ab4422242c4cf8481660bdf3&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0134e15850ede3a8012060c8f505f1.jpg",
        "https://goss2.vcg.com/creative/vcg/800/version23/VCG21408969635.jpg",
        "https://goss4.vcg.com/creative/vcg/800/version23/VCG41173756925.jpg"
      ]
    };
  },
  components: {
    CommentLayout
  },
  computed: mapGetters([
    // 需要用的数据
    "showAlbum",
    "showPhoto",
    "popPhotos",
    "popPhotoIndex"
  ]),
  // methods: mapActions([
  //   // 需要动用的外部方法
  //   "setShowPhoto",
  //   "setShowAlbum",
  // ]),
  methods: {
    setShowPhoto(val) {
      return this.$store.dispatch("setShowPhoto", val);
    },
    setShowAlbum(val) {
      return this.$store.dispatch("setShowAlbum", val);
    },
    incPopPhotoIndex(val) {
      return this.$store.dispatch("incPopPhotoIndex", val);
    },
    decPopPhotoIndex(val) {
      return this.$store.dispatch("decPopPhotoIndex", val);
    }
  }
};
</script>

<style scoped>
.fade-enter-active {
  animation: bounce-in 0.5s;
}
.fade-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
.container {
  width: 80vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
