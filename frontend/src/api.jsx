import axios from "axios";
import { useNavigate } from "react-router-dom";

// const BASE_URL = "http://localhost:8888/api";

// const api = axios.create({
//   baseURL: BASE_URL,
// });

// Use an environment variable if available, falling back to localhost in development.
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8888/api";

const api = axios.create({
  baseURL: BASE_URL,
});

// Add interceptor for request to include token
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
    
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

api.interceptors.request.use(cfg => {
  // absolute URL if cfg.baseURL is set, relative otherwise
  const path = new URL(cfg.url, 'http://x').pathname;  // "/user/login"

  // 1) Never attach token on login or refresh‑token endpoints
  if (path === "/user/login") {
    delete cfg.headers.Authorization;   // <<<< KEY LINE
    return cfg;
  }

  // 2) Attach token for every other request if present
  const tok = localStorage.getItem("authToken");
  if (tok) cfg.headers.Authorization = `Bearer ${tok}`;

  return cfg;
});


// Add interceptor for response to handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/"; // Redirect to login page if token is invalid
    }
    return Promise.reject(error);
  }
);

export const apiRequests = {
  login: (data) => api.post(`/user/login`, data),
  logout: (data) => api.post(`/user/logout`, data),
  
//   getIncome: () => api.get(`/income`),
  getAllIncome: () => api.get(`/income/`),
  postIncome: () => api.post(`/income/`),
  updateIncome: (id, data) => api.put(`/income/${id}`, data),
  deleteIncome: (id, data) => api.delete(`/income/${id}`, data),

  getStatus: () => api.get(`/status`),
  
  getPlatform: () => api.get(`/platform`),
  
  getPaymentMethod: () => api.get(`/payment_method`),
  
  getSalePerson: () => api.get(`/sale_person`),
  
  getChannel: () => api.get(`/channel`),
  updateChannel: (id, data) => api.put(`/channel/${id}`, data),

  getBank: () => api.get(`/bank`),
  
  getReceiver: () => api.get(`/receiver`),
  
  getDetail: () => api.get(`/detail`),
};

export default api;