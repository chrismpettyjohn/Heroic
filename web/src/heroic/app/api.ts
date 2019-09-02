import Axios from 'axios'

export const API = Axios.create({
	baseURL: '/api/'
})

API.interceptors.response.use(response => {
	return response.data
})


export const setToken = (token?: string|null) => {
	console.log(token)
	API.defaults.headers['Authorization'] = token
		? `Bearer ${token}`
		: null
}
