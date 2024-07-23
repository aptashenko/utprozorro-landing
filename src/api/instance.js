import axios from 'axios';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const baseRequest = axios.create({
    // baseURL: 'http://localhost:5001',
    baseURL: 'https://funnel-cms-c130c0e2cf35.herokuapp.com',
    headers: {
        post: headers,
        get: headers,
        patch: headers,
        delete: headers
    }
})

baseRequest.interceptors.request.use(
    (config) => {
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
