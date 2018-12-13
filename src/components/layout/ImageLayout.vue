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
          <div @click="setShowPhoto();setPopPhotos({photos,index})">
            <ImageCard v-bind:photo="item" class="image_card_hover"></ImageCard>
          </div>
        </el-col>
      </el-row>
      <div class="mgt30" style="text-align: center">
        <el-button round style="padding:10px 100px;">查看更多</el-button>
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
    ImageCard,
    PopPhotoLayout,
    Classify
  },
  methods: {
    setPopPhotos(val) {
      return this.$store.dispatch("setPopPhotos", val);
    },
    setShowPhoto(val) {
      // 
      return this.$store.dispatch("setShowPhoto", val);
    }
  }
};
</script>