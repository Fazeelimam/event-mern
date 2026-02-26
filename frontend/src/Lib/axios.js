import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:2000';

export const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Don't log 401 errors for /auth/user endpoint
        if (error.config.url === '/auth/user' && error.response?.status === 401) {
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);