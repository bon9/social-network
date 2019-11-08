import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9e658743-2610-4515-8426-4e4e628bf81f"
  }
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 10) {
    const res = await instance.get(
      `users?page=${currentPage}&count=${pageSize}`
    );
    return res.data;
  },
  async changeFollow(followed, id) {
    let response;
    if (followed) {
      response = await instance.delete(`follow/${id}`);
    } else {
      response = await instance.post(`follow/${id}`);
    }
    return response.data;
  }
};

export const authAPI = {
  async authMe() {
    const res = await instance.get(`auth/me`);
    return res.data;
  },
  async login(email, password, rememberMe = false) {
    const res = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe
    });
    return res.data;
  },
  async logout() {
    const res = await instance.delete(`auth/login`);
    return res.data;
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
