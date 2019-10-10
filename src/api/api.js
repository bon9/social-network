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

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(res => res.data);
  },
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`).then(res => res.data);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  }
};
