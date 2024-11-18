import axios from "axios"
import backendApiUrl from "../constants/BackendApiUrl"

const apiClient = axios.create({
    baseURL: backendApiUrl
})

apiClient.interceptors.request.use(
    (cfg) => {
        const token = localStorage.getItem('jwt')

        if (token) {
            cfg.headers.Authorization = `Bearer ${token}`
        }

        if (import.meta.env.MODE === 'development') {
            cfg.headers['ngrok-skip-browser-warning'] = true
        }

        return cfg
    },
    (error) => {
        return Promise.reject(error)
    }
)

apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
)

export default apiClient