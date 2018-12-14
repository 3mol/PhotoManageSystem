<template>
  <div style="margin-top:40px;">
    <PopAlbumLayout></PopAlbumLayout>
    <PopPhotoLayout></PopPhotoLayout>
    <div class="title_border">
      <span style="font-size:24px;">Albums</span>
      <i class="el-icon-arrow-down"></i>
      <div v-for="album in albums" :key="album.albumId">
        <AlbumCard v-bind:album="album"></AlbumCard>
      </div>
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
  components: {
    AlbumCard,
    PopAlbumLayout,
    PopPhotoLayout
  },
  methods: {
    getAlbums: function() {
      var successCallback = response => {
        console.log("服务器请求成功了");
        console.log(response.data);
        this.albums = response.data.data;
      };
      var errorCallback = response => {
        console.log("服务器请求出错了");
      };
      this.$http
        .get("http://127.0.0.1:8080/Album")
        .then(successCallback, errorCallback);
    }
  },
  mounted(){
            this.getAlbums();
        },
  data() {
    return {
      // todo 获取这个相册的photos
      albums: [
        {
          albumId: 1,
          albumName: "图集1",
          albumDesc: "原图",
          albumCreatetime: "2018年12月4日",
          albumRemark: "sad",
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
              photoName: "图片C",
              photoDesc: 25,
              photoCreatetime: "2018年12月2日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3819531008,942434957&fm=200&gp=0.jpg"
            },
            {
              photoId: 6,
              photoName: "图片D",
              photoDesc: 25,
              photoCreatetime: "2018年12月12日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059770508,159053842&fm=26&gp=0.jpg"
            },
            {
              photoId: 7,
              photoName: "图片D",
              photoDesc: 25,
              photoCreatetime: "2018年12月23日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4134070514,2065750022&fm=26&gp=0.jpg"
            },
            {
              photoId: 8,
              photoName: "图片D",
              photoDesc: 25,
              photoCreatetime: "2018年12月22日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1162058567,2289747742&fm=26&gp=0.jpg"
            },
            {
              photoId: 9,
              photoName: "图片D",
              photoDesc: 25,
              photoCreatetime: "2018年12月21日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3257286882,1013914695&fm=26&gp=0.jpg"
            },
            {
              photoId: 10,
              photoName: "图片D",
              photoDesc: 25,
              photoCreatetime: "2018年12月2日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1318618513,3987037995&fm=26&gp=0.jpg"
            },
            {
              photoId: 11,
              photoName: "图片D",
              photoDesc: 25,
              photoCreatetime: "2018年12月2日",
              albumId: 2,
              albumName: "sad",
              photoURL:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1162058567,2289747742&fm=26&gp=0.jpg"
            }
          ]
        },
        {
          albumId: 2,
          albumName: "图集2",
          albumDesc: "原图2",
          albumCreatetime: "2018年12月2日",
          albumRemark: "happy",
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
        }
      ]
    };
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
