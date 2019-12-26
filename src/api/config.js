import axios from 'axios'

const defaultOption = {
    baseUrl: '/api'
}
const axiosInstance = axios.create(defaultOption)

axiosInstance.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        console.log(error);
    }
)

export {
    axiosInstance
}
