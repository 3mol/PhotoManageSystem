<template>
  <div class="search_border">
    <input type="text" style="height: 35px;width: 60%;" placeholder="输入搜索的照片号/照片名称">
    <el-button type="danger">搜索</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style scoped>
.search_border {
  text-align: center;
  margin-top: 30px;
}
</style>
