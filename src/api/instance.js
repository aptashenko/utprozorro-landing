import axios from 'axios';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const baseRequest = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        post: headers,
        get: headers,
        patch: headers,
        delete: headers
    }
})

baseRequest.interceptors.request.use(
    (config) => {
        console.log('fullfilled: ', config)
        return config
    },
    (error) => {
        console.log('error: ', error)
        return Promise.reject(error)
    }
)

baseRequest.interceptors.response.use(
    (config) => {
        console.log('fullfilled: ', config)
        return config
    },
    (error) => {
        console.log('error: ', error)
        return Promise.reject(error)
    }
)

export { baseRequest }
