<template>
  <el-card :body-style="{ padding: '0px'}">
    <div>
      <div class="photo_box">
        <img src="http://t2.hddhhn.com/uploads/tu/201610/198/hkgip2b102z.jpg" class="photo">
      </div>
      <div class="text_content">
        <h4 class="pdl10">照片名字</h4>
        <br>
        <el-tag type="info">时间</el-tag>
      </div>
    </div>
  </el-card>
</template>
 
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
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
  position: relative;
  width: 100%;
  height: 50px;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
}
.text_label {
  padding: 5px 20px;
  font-weight: 600;
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  },
  methods: {
    openPopPhotoLayout: function() {
      this.styleObject.display = "";
      console.log(this);
    }
  }
};
</script>