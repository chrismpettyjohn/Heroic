import * as JWT from 'jsonwebtoken'

export const GenerateJWT = (payload: object): string => {
	return JWT.sign(payload, process.env.JWT_SECRET)
}

