// 0 - Don't report
// 1 - Log
// 2 - Enable maintenance
export default class Delusion extends Error {
  constructor(level, error) {
    super()
    Error.captureStackTrace(this, this.constructor)
    if (level > 1) {
      console.log(this, error)
    }
  }
}
