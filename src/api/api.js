import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9e658743-2610-4515-8426-4e4e628bf81f"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data);
  },
  changeFollow(followed, id) {
    return followed
      ? instance.delete(`follow/${id}`).then(res => res.data)
      : instance.post(`follow/${id}`).then(res => res.data);
  }
};
