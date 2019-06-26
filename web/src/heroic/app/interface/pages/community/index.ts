import Staff from './staff'
import Rooms from './rooms'
import Online from './online'
import Photos from './photos'
import Leaderboard from './leaderboard'

export default interface Community {
	staff: Staff,
	rooms: Rooms,
	online: Online,
	photos: Photos,
	leaderboard : Leaderboard
}
