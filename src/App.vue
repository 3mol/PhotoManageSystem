<template>
  <div id="app">
    <Nav></Nav>
    <Classify></Classify>
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>

import ImageCard from "./components/ImageCard.vue";
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
  components: {
    Nav,
    Search,
    Classify,
    Footer
  }
};
</script>

<style >

body{
  margin: 0;
}

</style>
