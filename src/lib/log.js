import Chalk from 'chalk'

class Log {

  static async write (message, type = 'info') {

    message = ` [ ${type.toUpperCase()} ] ${message}`

    if (type === 'info') {
      console.log(Chalk.cyanBright(message))
    } else {
      console.log(Chalk.red(message))

    }

  }

}

export default Log