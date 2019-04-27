import Axios from 'axios'

const API = Axios.create({
  baseURL: '/api/'
})

export default API
