import axios from 'axios'

class Request {
    constructor() {
        this.axios = axios.create({})
        this.axios.defaults.headers.post['Content-Type'] = 'application/json'
    }

    get(url, data = {}) {
        if (typeof data.params === 'object') {
            return this.axios.get(url, data)
        }
        return this.axios.get(url)
    }

    post(url, data = {}) {
        try {
            return this.axios.post(url, JSON.stringify(data))
        } catch(e) {
            console.error(e)
        }
    }
}

const request = new Request()
export default request
