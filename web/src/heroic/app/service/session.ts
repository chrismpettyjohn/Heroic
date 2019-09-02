import Storage from './storage'
import {API, setToken} from '../api'
import {IUser} from '../../../../../interface/user'
import {JWTResponse} from '../../../../../interface/auth/response'

export const authenticateWithCredentials = async (username: string, password: string): Promise<JWTResponse> => {
  try {
    return await API.post('auth', {
      username,
      password
    })
  }
  catch (e) {
    throw new Error('User Authentication Error via Credentials')
  }
}

export const authenticateWithJWT = async (jwt: string): Promise<IUser> => {
  try {
    const user: IUser = await API.get('auth', {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    })
    setToken(jwt)
    return user
  }
  catch (e) {
    throw new Error('User Authentication Error via JWT')
  }
}

export const getSession = async (): Promise<IUser> => {
  try {
    return await API.get('auth')
  }
  catch (e) {
    throw new Error('User Authentication Error via GET')
  }
}

export const restoreFromStorage = async (): Promise<IUser> => {
  try {
    const token: string = Storage.get('auth') as string
    const user: IUser = await authenticateWithJWT(token)
    return user
  }
  catch (e) {
    throw new Error('User Authentication Error Via Restore')
  }
}

export const SessionService = {
  authenticateWithCredentials,
  authenticateWithJWT,
  getSession,
  restoreFromStorage
}
