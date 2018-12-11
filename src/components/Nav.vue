<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/photos">照片</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/albums">相册</router-link>
    </el-menu-item>
    <el-menu-item index="3" style="float:right">
      <a href="https://www.ele.me" target="_blank">后台管理</a>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>