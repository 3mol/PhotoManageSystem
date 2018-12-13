<template>
  <div>
    <div class="photo_box">
      <div
        ref="ele"
        class="photo"
        v-bind:style="{backgroundImage:'url(' + photo.photoURL + ')',height: imageCardWidth}"
      ></div>
      <!-- <img class="photo" :src="photo.photoURL"> -->
    </div>
    <div style="position:relative;width:100%">
      <div class="text_content">
        <div class="photo_name">{{photo.photoName}}</div>
        <div class="photo_date">{{photo.photoCreatetime}}</div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  props: {
    photo: Object
  },
  data() {
    return {
      imageCardHeight: 0,
      imageCardWidth: 0
    };
  },
  computed: mapGetters([
    // 需要用的数据
    "showPhoto"
  ]),
  methods: mapActions([
    // 需要动用的外部方法
    "setShowPhoto"
  ]),
  mounted() {
    var width = window.getComputedStyle(this.$refs.ele).width; // ？px
    this.imageCardWidth = width;
    console.log(width);
  }
  ,
  watch(){
  }
};
</script>
<style scoped>
.image {
  width: 100%;
  display: block;
}

.clearfix:after {
  clear: both;
}

.photo {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.photo_box {
  /* height: 250px; */
  overflow: hidden;
}
.text_content {
  text-align: center;
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

.photo_name {
  margin-top: 10px;
}
.photo_date {
  font-size: 12px;
  color: #ccc;
}
</style>
