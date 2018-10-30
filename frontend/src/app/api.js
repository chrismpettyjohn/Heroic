import Axios from 'axios'

const API = Axios.create({
  baseURL: `https://server.habfort.us/`
})

export default API
