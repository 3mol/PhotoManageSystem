/**
 * vuex配置
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//定义属性（数据）
var state = {
	showAlbum: false,
	showPhoto: false,
	popPhotos: null,
	popPhotoIndex: 1,
	popAlbumId: -1,
	comments: null,
	popPhotoAlbumInfo: null
}

//定义getters
var getters = {
	showAlbum(state) {
		return state.showAlbum;
	},
	showPhoto(state) {
		return state.showPhoto;
	},
	popPhotos(state) {
		return state.popPhotos;
	},
	popPhotoIndex(state) {
		return state.popPhotoIndex;
	},
	comments(state) {
		return state.comments;
	},
	popPhotoAlbumInfo(state) {
		return state.popPhotoAlbumInfo;
	},
	popAlbumId(state) {
		return state.popAlbumId;
	}
}

//定义actions，要执行的操作，如流程判断、异步请求等
const actions = {
	setShowPhoto({ commit, state }) {
		commit('setShowPhoto'); //提交一个名为increment的变化，名称可自定义，可以认为是类型名
	},
	setShowAlbum({ commit, state }) {
		commit('setShowAlbum');
	},
	setPopPhotos({ commit, state }, val) {
		console.log("setPopPhotos",val);
		commit('setPopPhotos', val);
	},
	incPopPhotoIndex({ commit, state }) {
		commit('incPopPhotoIndex');

	},
	decPopPhotoIndex({ commit, state }) {
		commit('decPopPhotoIndex');
	},
	setComments({ commit, state }, obj) {
		// 获取这个图片的评论
		commit('setComments', obj);
	},
	setPopPhotoAlbumInfo({ commit, state }, obj) {
		// 获取这个图片的相册信息
		commit('setPopPhotoAlbumInfo', obj);
	},
	setPopAlbumId({ commit, state }, val) {
		commit('setPopAlbumId', val);
	}

}

//定义mutations，处理状态（数据）的改变
const mutations = {
	setShowPhoto(state) {
		console.log("show popPhotoLayout now");
		state.showPhoto = !state.showPhoto;
	},
	setShowAlbum(state) {
		console.log("show popAlbum now");
		state.showAlbum = !state.showAlbum;
	},
	setPopAlbumId(state, val) {
		console.log("setPopAlbumId now");
		state.popAlbumId = val;
	},
	setPopPhotos(state, val) {
		console.log("设置图片索引index:" + val.index);
		state.popPhotos = val.photos;
		state.popPhotoIndex = val.index;
	},
	incPopPhotoIndex(state) {
		if (state.popPhotoIndex + 1 > state.popPhotos.length - 1) { state.popPhotoIndex = 0 }
		else if (state.popPhotoIndex + 1 <= state.popPhotos.length - 1) {
			state.popPhotoIndex += 1;
		}
	},
	decPopPhotoIndex(state) {
		if (state.popPhotoIndex - 1 < 0) { state.popPhotoIndex = state.popPhotos.length - 1 }
		else if (state.popPhotoIndex - 1 >= 0) {
			state.popPhotoIndex -= 1;
		}
	},
	setComments(state, obj) {
		console.log("获取到这个图片ID的评论内容:");
		console.log(obj);
		state.comments = obj;
	},
	setPopPhotoAlbumInfo(state, obj) {
		console.log("获取到这个图片ID的相册信息:");
		console.log(obj);
		state.popPhotoAlbumInfo = obj;
	}
}

//创建store对象
const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

//导出store对象
export default store;
