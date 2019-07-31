import axios from 'axios'

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : ' http://api.douguo.net',
    timeout: 6000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

export default service