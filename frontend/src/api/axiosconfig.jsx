import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add request interceptor for debugging in development
if (import.meta.env.VITE_ENVIRONMENT === 'development') {
    instance.interceptors.request.use(
        config => {
            console.log('API Request:', config);
            return config;
        },
        error => Promise.reject(error)
    );
}

// Add response interceptor for error handling
instance.interceptors.response.use(
    response => response,
    error => {
        console.error('API Error:', error);
        return Promise.reject(error);
    }
);

export default instance;