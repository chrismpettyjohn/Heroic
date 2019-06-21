export default {

	set: (name: string, data: object): void => {
		localStorage.setItem(name, JSON.stringify(data))
	},

	get: (name: string): object=> {
		return JSON.parse(localStorage.getItem(name) as string)
	},

	del: (name: string): void => {
		localStorage.removeItem(name)
	}

}
