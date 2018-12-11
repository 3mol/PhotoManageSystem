<template>
  <div
    style="width: 100vw;height: 100vh;background: rgba(0,0,0,0.63);position: fixed;top: 0;z-index: 1; display:none;"
  >
    <div style="margin:50px;border:1px #c0c0c0 solid;height: 75vh;background: #fff;padding: 40px;">
      <div>
        <i class="el-icon-close btn_close" ></i>
        <h3>相册名字</h3>
        <h5 style="color:#8e8e8e;">2018年12月4日</h5>
      </div>
      <hr>
      <div
        style="border: 1px #ffb2b2 solid;width: 100%;height: 80%;overflow-y:auto; overflow-x:hidden;  "
      >
        <el-row class="row-bg" :gutter="20">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <AlbumCard></AlbumCard>
          </el-col>
        </el-row>
        
      </div>
    </div>
  </div>
</template>

<script>
import AlbumCard from "../AlbumCard.vue";

export default {
  components: {
    AlbumCard,
  }
};
</script>

<style>
.btn_close {
    font-size: 18pt;
    float: right;
    color: #000000;
    margin-right: 80px;
}
</style>
