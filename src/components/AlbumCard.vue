<template>
  <div >
    <div class="photo_box" >
      <img @click="openPopPhotoLayout()" class="photo" src="http://t2.hddhhn.com/uploads/tu/201610/198/hkgip2b102z.jpg">
    </div>
    <div style="position:relative;width:100%">
      <div class="text_content">
        <label class="pdl10 name">相册名字</label>
        <br>
        <label class="pdl10 desc">简单描述</label>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
     
    };
  },

};
</script>

<style scoped>
img :hover {
  cursor: pointer;
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
  background: rgba(255, 255, 255, 0.6);
}
.text_content .name {
  font-weight: 600;
}
.text_content .desc {
  font-size: 10pt;
  color: rgb(54, 54, 54);
}
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
</style>
