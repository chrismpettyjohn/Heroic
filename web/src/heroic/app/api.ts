import Axios from 'axios'

export const API = Axios.create({
	baseURL: '/rest/'
})


API.interceptors.response.use(response => {
	return response.data
})


export const setToken = (token?: string|null) => {
	API.defaults.headers['Authorization'] = token
		? `Bearer ${token}`
		: null
}
