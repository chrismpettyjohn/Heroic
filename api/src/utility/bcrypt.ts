import * as Crypt from 'bcryptjs'

export const hash = (text: string): string => {
	return Crypt.hashSync(text, Crypt.genSaltSync(8))
}

export const isSame = (input: string, hashed: string): boolean => {
	return Crypt.compareSync(input, hashed, (error: any, result: boolean) => {
		if (error) throw error
		console.log(result)
		return result
	})
}
