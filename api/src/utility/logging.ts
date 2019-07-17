import Chalk from 'chalk'
import * as Moment from 'moment'

export const Logging = {

	info: (message: string): void => {
		log('#1976D2', message)
	},

	success: (message: string): void => {
		log('#388E3C', message)
	},

	warning: (message: string): void => {
		log('#FFA000', message)
	},

	danger: (message: string): void => {
		log('#d32f2f', message)
	}

}

export const log = (hex: string, message: string): void => {
	const date = Moment().format('YYYY-MM-DD HH:mm:ss')
	console.log(Chalk.hex(hex)(` [${date}] ${message}`))
}
