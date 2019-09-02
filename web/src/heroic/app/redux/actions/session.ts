import Store from 'heroic/app/redux'
import {bindActions} from 'redux-zero/utils'
import Redux from 'heroic/app/interface/redux'
import Storage from 'heroic/app/service/storage'
import {SessionService} from '../../service/session'
import {IUser} from '../../../../../../interface/user'

const SessionActions = bindActions(store => ({

	// Check Local Storage for prior session, otherwise start empty one
	initialize: async ()  => {
	  try {
	    const user: IUser = await SessionService.restoreFromStorage()
      SessionActions.update({
        active: true,
        ready: true,
        user
      })
    }
    catch (e) {
	    SessionActions.update({
        active: false,
        ready: true,
        user: null
      })
    }
	},

  update: (store: Redux, session) => ({
    session
  }),

	logout: () => {
		Storage.del('auth');
		store.setState({
			session: {
				active: false,
				ready: true,
				user: null
			}
		})
	}

}), Store)

export default SessionActions
