<template>
  <div
    style="width: 100vw;height: 100vh;background: rgba(0,0,0,0.63);position: fixed;top: 0;z-index: 1;"
    v-show="showAlbum"
  >
    <div style="margin:50px;border:1px #c0c0c0 solid;height: 75vh;background: #fff;padding: 40px;">
      <div>
        <i class="el-icon-close btn_close" @click="setShowAlbum"></i>
        <h3>相册名字</h3>
        <h5 style="color:#8e8e8e;">2018年12月4日</h5>
      </div>
      <hr>
      <div
        style="border: 1px #ffb2b2 solid;width: 100%;height: 80%;overflow-y:auto; overflow-x:hidden;  "
      >
        <el-row class="row-bg" :gutter="20">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8"   v-for="(item,index) in photos"
          :key="item.photoId">
            <ImageCard v-bind:photo="item"></ImageCard>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

import ImageCard from "../ImageCard.vue";

export default {
  data(){
    
return {
      photos: [
        {
          photoId: 1,
          photoName: "图片C",
          photoDesc: 25,
          photoCreatetime: "2018年12月2日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3819531008,942434957&fm=200&gp=0.jpg"
        },
        {
          photoId: 2,
          photoName: "图片D",
          photoDesc: 25,
          photoCreatetime: "2018年12月12日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059770508,159053842&fm=26&gp=0.jpg"
        },
        {
          photoId: 3,
          photoName: "图片D",
          photoDesc: 25,
          photoCreatetime: "2018年12月23日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4134070514,2065750022&fm=26&gp=0.jpg"
        },
        {
          photoId: 4,
          photoName: "图片D",
          photoDesc: 25,
          photoCreatetime: "2018年12月22日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1162058567,2289747742&fm=26&gp=0.jpg"
        },
        {
          photoId: 5,
          photoName: "图片D",
          photoDesc: 25,
          photoCreatetime: "2018年12月21日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3257286882,1013914695&fm=26&gp=0.jpg"
        },
        {
          photoId: 6,
          photoName: "图片D",
          photoDesc: 25,
          photoCreatetime: "2018年12月2日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1318618513,3987037995&fm=26&gp=0.jpg"
        },
        {
          photoId: 7,
          photoName: "图片D",
          photoDesc: 25,
          photoCreatetime: "2018年12月2日",
          albumId: 2,
          albumName: "sad",
          photoURL:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1162058567,2289747742&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  components: {
    ImageCard
  },
  computed: mapGetters([
    // 需要用的数据
    "showAlbum",
  ]),
  methods: mapActions([
    // 需要动用的外部方法
    "setShowAlbum"
  ]),
  
};
</script>

<style scoped>
.btn_close {
  font-size: 18pt;
  float: right;
  color: #000000;
  margin-right: 80px;
}
</style>
