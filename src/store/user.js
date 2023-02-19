import { v4 as uuidv4 } from "uuid";

const actions = {
	login({ commit, state }, data) {
		state.userList = JSON.parse(localStorage.getItem('userList'))
		state.userList.forEach((user) => {
			if (
				(user.userInfo.userName === data.userId ||
					user.userInfo.phoneNumber === data.userId) &&
				user.userPassword === data.userPassword
			) {
				let token = uuidv4();
				user.token = token;
				commit('LOGIN', { token, data });
			} else {
				alert("用户名或密码错误");
			}
		});
	},
	getCode({ commit }) {
		commit("GETCODE");
	},
	saveUserInfo({ commit }, value) {
		commit("SAVEUSERINFO", value);
	},
	verifyUserName(context,value) {
		let list = JSON.parse(localStorage.getItem("userList"));
		list.forEach(userInfo=>{
			if (userInfo.userName === value.userName) {
				alert( "用户名已存在");
			} else if(userInfo.phoneNumber === value.phoneNumber) {
				alert("手机号已存在");
			}
		})
	},
	getUserInfo({state,commit}) {
		state.userList.forEach(user=>{
			if(user.token === state.token) {
				commit('GETUSERINFO',user.userInfo);
			}
		})
	}
};
const mutations = {
	LOGIN(state, data) {
		state.token = data.token;
		if (data.isAutoEntry) {
			localStorage.setItem("userToken", JSON.stringify(data.token));
		}
	},
	GETCODE(state) {
		state.codeArray = [
			"884521",
			"715241",
			"156871",
			"425112",
			"211355",
			"321315",
			"554565",
			"465125",
			"954121",
			"615970",
		];
		let index = Math.floor(Math.random() * 10);
		state.code = state.codeArray[index];
	},
	SAVEUSERINFO(state, value) {
		if(localStorage.getItem("userList")){
			state.userList = JSON.parse(localStorage.getItem("userList"));
		}
		let user = {token:"",userPassword:value.loginPassword,userInfo:{userName : value.userName,phoneNumber : value.phoneNumber}};
		state.userList.push(user);
		localStorage.setItem("userList", JSON.stringify(state.userList));
	},
	GETUSERINFO(state,data){
		state.userInfo = data;
	}
};
const state = {
	token: "",
	codeArray: [],
	userList: [],
	code: "",
	userInfo:{}
};
const getters = {};

export default {
	namespaced: true,
	actions,
	mutations,
	state,
	getters,
};
