<template>
<div>
<div class="container">
    <el-row class="row-bg" :gutter="20">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6" :xl="4">
        <ImageCard></ImageCard>
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
 
<style>
.el-col{
     margin-bottom: 20px;
}
.container {
  margin: 0 auto;
  width: 80%;
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

import ImageCard from "../ImageCard.vue";
import PopPhotoLayout from "./PopPhotoLayout.vue";

export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  components: {
    ImageCard,
    PopPhotoLayout
  }
};
</script>