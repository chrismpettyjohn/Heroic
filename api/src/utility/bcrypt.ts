import Bcrypt from 'bcryptjs'

export const hash = (text: string): string => {
	return Bcrypt.hashSync(text, process.env.PASS_SALT)
}

export const isSame = (input: string, hashed: string): boolean => {
	return Bcrypt.compare(input, hashed, (error: any, result: boolean) => {
		if (error) throw error
		return result
	})
}
