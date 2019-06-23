import Staff from './staff'
import Online from './online'
import Leaderboard from './leaderboard'

export default interface Community {
	staff: Staff,
	online: Online,
	leaderboard : Leaderboard
}
