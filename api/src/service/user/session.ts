import {sign} from 'utility/jwt'
import UserService from './users'
import {isSame} from 'utility/bcrypt'
import {Logging} from 'utility/logging'
import {Users} from 'db/entity/user/users'

export default {

	// Returns a signed JWT
	start: async (username: string, password: string): Promise<string|false> => {
		try {
			const user: Users = await UserService.read('username', username)

			if (isSame(password, user.password)) {
				return sign({ id: user.id })
			}
			else {
				return false
			}

		}
		catch (error) {
			Logging.danger(`Session Service - Start failed with error (${error})`)
			throw error
		}
	}

}




