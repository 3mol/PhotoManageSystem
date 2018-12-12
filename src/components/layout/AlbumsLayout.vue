<template>
  <div style="margin-top:40px;">
    <PopAlbumLayout></PopAlbumLayout>
    <PopPhotoLayout></PopPhotoLayout>
    <div class="title_border">
      <span style="font-size:24px;">Albums</span>
      <i class="el-icon-arrow-down"></i>
      <AlbumCard  v-for="key in 6" v-bind:key="key"></AlbumCard>
    </div>
    <div class="mgt30" style="text-align: center">
      <el-button round style="padding:10px 100px;">查看更多</el-button>
    </div>
  </div>
</template>
 
<script>
import AlbumCard from "../AlbumCard.vue";
import PopAlbumLayout from "./PopAlbumLayout.vue";
import PopPhotoLayout from "./PopPhotoLayout.vue";

export default {
  data() {
    return {
      show: false,
      currentDate: new Date()
    };
  },
  components: {
    AlbumCard,
    PopAlbumLayout,
    PopPhotoLayout
  }
};
</script>
<style scoped>
.el-col {
  margin-bottom: 20px;
}
.title_border {
  padding: 20px 0;
  margin: 0 auto;
  width: 80%;
}

.container {
  background-color: white;
  margin-top: 20px;
  border: 1px #eaeaea solid;
  padding: 20px 50px;
  border-radius: 4px;
  box-shadow: #eaeaea 1px 1px 1px;
}
.photo {
  display: block;
  height: 100%;
}

.photo_box {
  height: 250px;
  overflow: hidden;
}

.text_content {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
}
.album_name {
  font-size: 20px;
  color: rgb(88, 73, 58);
}
.album_time {
  font-size: 12px;
  color: rgb(137, 137, 137);
}

.album_desc {
  color: rgb(137, 137, 137);
  font-size: 12px;
}
</style>
