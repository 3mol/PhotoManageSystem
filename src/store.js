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
}

//定义getters
var getters = {
	showAlbum(state) {
		return state.showAlbum;
	},
	showPhoto(state) {
		return state.showPhoto;
	}
}

//定义actions，要执行的操作，如流程判断、异步请求等
const actions = {
	setShowPhoto({commit,state}){
		commit('setShowPhoto'); //提交一个名为increment的变化，名称可自定义，可以认为是类型名
	},
	setShowAlbum({ commit, state }) {
			commit('setShowAlbum');
	},
}

//定义mutations，处理状态（数据）的改变
const mutations = {
	setShowPhoto(state) {
		state.showPhoto=!state.showPhoto;
	},
	setShowAlbum(state) {
		state.showAlbum=!state.showAlbum;
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
