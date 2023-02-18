import { v4 as uuidv4 } from "uuid";

const actions = {
	login({ commit, state }, data) {
		state.userList.forEach((userInfo) => {
			if (
				(userInfo.userName === data.userId ||
					userInfo.phoneNumber === data.userId) &&
				userInfo.confirmPassword === data.userPassword
			) {
				let token = uuidv4();
				commit(LOGIN, { token, data });
				return true;
			} else {
				return false;
			}
		});
	},
	getCode({ commit }) {
		commit("GETCODE");
	},
	saveUserInfo({ commit }, value) {
		commit("SAVEUSERINFO", value);
	},
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
		state.userList.push(value);
		localStorage.setItem("userList", JSON.stringify([state.userList]));
	},
};
const state = {
	token: "",
	codeArray: [],
	userList: [],
	code: "",
};
const getters = {};

export default {
	namespaced: true,
	actions,
	mutations,
	state,
	getters,
};
