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
	follow(userId){
	 return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},)
	},
	unfollow(userId){
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
	}
};




// export const getFollow = (id) => {
// 	return instance.post(`follow/${id}`, {},
// 	).then(response => {
// 		return response.data;
// 	});
// };
//
//
// export const getUnfollow = (id) => {
// 	return instance.delete(`unfollow/${id}`).then(response => {
// 		return response.data;
// 	});
// };