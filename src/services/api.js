
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://the-one-api.dev/v2'
})
//interceptor para adicionar o token no header
api.interceptors.request.use(async config => {
    const token = 'P47hWUNTwA4XG3mmgQp2'
    config.headers.Authorization = `Bearer ${token}`
    return config
})
export default api;