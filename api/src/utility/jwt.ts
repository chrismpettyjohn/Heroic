import JWT from 'jsonwebtoken'

export const sign = (payload: object): string => {
	return JWT.sign(payload, process.env.JWT_SECRET)
}

