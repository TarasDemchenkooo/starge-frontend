import axios, { AxiosError } from "axios"
import api from "../constants/api"

export const backend = axios.create({ baseURL: api.backendUrl })
export const tonapi = axios.create({ baseURL: api.tonapiUrl })

backend.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    if (import.meta.env.MODE === 'development') {
        config.headers['ngrok-skip-browser-warning'] = true
    }

    return config
}, (error) => Promise.reject(error))

tonapi.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${api.tonapiKey}`

    return config
})

backend.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => Promise.reject(error.response?.data)
)