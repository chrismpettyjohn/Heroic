import Validator from 'validator'
import Wordfilter from '@/sql/interactors/wordfilter'
export default class Helper {
  static async check (string, type, options = null) {
    let result = {}
    if (options) {
      result = Validator[type](string, options)
    } else {
      result = Validator[type](string)
    }
    if (result) {
      return Promise.resolve()
    } else {
      return Promise.reject(Error(`Data is invalid`))
    }
  }
  static async fields (data, fields) {
    try {
      if (!data) {
        throw new Error('No data defined')
      }
      fields.forEach(field => {
        if (!data[field]) {
          throw new Error(`${field} is invalid`)
        }
      })
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e)
    }
  }
  static async filter (content) {
    try {
      let filter = await Wordfilter.read()
      filter.forEach(word => {
        let reg = new RegExp(word.key, 'g')
        content = content.replace(reg, word.replacement)
      })
      return Promise.resolve(content)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
