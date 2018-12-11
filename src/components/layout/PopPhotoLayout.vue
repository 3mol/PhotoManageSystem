<template>
  <div id="app" class="container" v-show="showPhoto">
    <div style="display: flex; justify-content:center ">
      <img
        style="height: 100%"
        src="https://www.halfbakedharvest.com/wp-content/uploads/2015/12/Gingerbread-Latte-with-Salted-Caramel-Sugar-VIDEO-4.jpg"
      >
      <img
        @click="setShowPhoto"
        src="/src/assets/img/close.png"
        style="width: 40px;height: 40px;position: relative;left: 50px;top: 75px;"
      >
      <img
        src="/src/assets/img/right.png"
        style="width: 40px;height: 40px;position: fixed;right: 50px;top: 50vh;"
      >
      <img
        src="/src/assets/img/left.png"
        style="width: 40px;height: 40px;position: fixed;left: 50px;top: 50vh;"
      >
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  data() {
    return{
      }
  },
  computed:mapGetters([
    // 需要用的数据
      'showAlbum',
      'showPhoto'
  ]),
  methods:mapActions([
    // 需要动用的外部方法
      'setShowPhoto',
      'setShowAlbum',
  ]),
};
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
