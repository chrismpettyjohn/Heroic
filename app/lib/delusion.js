export default class Delusion extends Error {
  constructor(level) {
    super()
    Error.captureStackTrace(this, this.constructor)
    if (level > 1) {
      console.log(this)
    }
  }
}
