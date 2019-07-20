export default {

	set: (name: string, data: object| string): void => {
		localStorage.setItem(
			name,
			typeof data === 'object'
				?  JSON.stringify(data)
				: data
		)
	},

	get: (name: string): object | string => {
		const result: any = localStorage.getItem(name)
		return isJSON(result)
			? JSON.parse(result)
			: result
	},

	del: (name: string): void => {
		localStorage.removeItem(name)
	}

}

export const isJSON = (text: string): boolean => {
	try {
		JSON.parse(text)
		return true
	}
	catch (e) {
		return false
	}
}
