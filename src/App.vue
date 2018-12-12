<template>
  <div id="app" style="background:rgb(250, 251, 253)">
    <Nav></Nav>
    <Search></Search>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
    <button @click="setShowPhoto"> 显示照片？{{showPhoto}}</button>
    <button @click="setShowAlbum"> 显示相册？{{showAlbum}}</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import Nav from "./components/Nav.vue";
import Search from "./components/Search.vue";
import Classify from "./components/Classify.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      msg: "欢迎来到"
    };
  },
  methods: {},
  computed: mapGetters([
    // 需要用的数据
    "showAlbum",
    "showPhoto"
  ]),
  methods: mapActions([
    // 需要动用的外部方法
    "setShowPhoto",
    "setShowAlbum"
  ]),
  components: {
    Nav,
    Search,
    Classify,
    Footer
  }
};
</script>

<style >
body {
  margin: 0;
}
</style>
