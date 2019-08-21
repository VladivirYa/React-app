import * as axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "900a5015-6677-4db3-ab52-89c85fe2dce4"
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {},)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},

	getProfile(userId) {
		return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId);
	}
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	}
}

