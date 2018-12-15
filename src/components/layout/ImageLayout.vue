<template>
  <div style="margin-top:40px;">
    <div class="container">
      <Classify></Classify>
      <el-row class="row-bg" :gutter="20">
        <el-col
          :xs="12"
          :sm="12"
          :md="6"
          :lg="6"
          :xl="4"
          v-for="(item,index) in photos"
          :key="item.photoId"
        >
          <div
            @click="
          setShowPhoto();
          setComments(item.photoId);
          setPopPhotoAlbumInfo(item.albumId);
          setPopPhotos({photos,index});
          "
          >
            <ImageCard v-bind:photo="item" class="image_card_hover"></ImageCard>
          </div>
        </el-col>
      </el-row>
      <div class="mgt30" style="text-align: center">
        <el-button round style="padding:10px 100px;" @click="getPhotos()">查看更多</el-button>
      </div>
    </div>
    <div>
      <PopPhotoLayout></PopPhotoLayout>
    </div>
  </div>
</template>
 
<style scoped>
.image_card_hover:hover {
  cursor: pointer;
}
.el-col {
  margin-bottom: 20px;
}
.container {
  background-color: white;
  margin-top: 100px;
  margin: 0 auto;
  width: 80%;
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
</style>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ImageCard from "../ImageCard.vue";
import PopPhotoLayout from "./PopPhotoLayout.vue";
import Classify from "../Classify.vue";

export default {
  data() {
    return {
      photos: []
    };
  },
  components: {
    ImageCard,
    PopPhotoLayout,
    Classify
  },
  mounted() {
    this.getPhotos();
  },
  methods: {
    setPopPhotos(val) {
      return this.$store.dispatch("setPopPhotos", val);
    },
    setShowPhoto(val) {
      return this.$store.dispatch("setShowPhoto", val);
    },
    setComments(photoId) {
      // 获取点击图片的评论信息
      var successCallback = response => {
        console.log("服务器请求成功了setComments");
        return this.$store.dispatch(
          "setComments",
          response.data.data[0].comments
        );
      };
      var errorCallback = response => {
        console.log("服务器请求出错了");
      };
      this.$http
        .get("http://127.0.0.1:8080/photo/photoId?params=" + photoId)
        .then(successCallback, errorCallback);
    },
    setPopPhotoAlbumInfo(albumId) {
      // 获取点击图片的相册信息
      var successCallback = response => {
        console.log("服务器请求成功了setPopPhotoAlbumInfo");
        return this.$store.dispatch(
          "setPopPhotoAlbumInfo",
          response.data.data[0]
        );
      };
      var errorCallback = response => {
        console.log("服务器请求出错了");
      };
      this.$http
        .get("http://127.0.0.1:8080/album/AlbumId?params=" + albumId)
        .then(successCallback, errorCallback);
    },
    getPhotos: function() {
      // 获取首页的所有图片
      var successCallback = response => {
        console.log("服务器请求成功了getPhotos");
        this.photos = response.data.data;
      };
      var errorCallback = response => {
        console.log("服务器请求出错了");
      };
      this.$http
        .get("http://127.0.0.1:8080/photo")
        .then(successCallback, errorCallback);
    }
  }
};
</script>