import News from './news'
import Staff from './staff'
import Rooms from './rooms'
import Online from './online'
import Photos from './photos'
import Leaderboard from './leaderboard'

export default interface Community {
	news: News,
	staff: Staff,
	rooms: Rooms,
	online: Online,
	photos: Photos,
	leaderboard : Leaderboard
}
