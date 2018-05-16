export default class Watchdog {

  constructor(message, extra) {
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    console.log(`${this.name}`)
  }

}
