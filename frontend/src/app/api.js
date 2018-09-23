import Axios from 'axios'

const API = Axios.create({
  baseURL: `http://localhost:8090/`
})

export default API
