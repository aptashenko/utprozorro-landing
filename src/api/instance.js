import axios from 'axios';
import { useCookies } from '@/composables/useCookies.js'

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const baseRequest = axios.create({
    // baseURL: 'http://localhost:5001',
    baseURL: 'https://funnels-cms-a31447c34140.herokuapp.com',
    headers: {
        post: headers,
        get: headers,
        patch: headers,
        delete: headers
    }
})

baseRequest.interceptors.request.use(
    (config) => {
        const { getCookie } = useCookies()
        const web_user_id = getCookie('user_id')
        config.headers['Authorization'] = web_user_id;

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

baseRequest.interceptors.response.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export { baseRequest }
