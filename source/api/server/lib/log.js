export default class Logging {
  static async push (handler, method, message, type) {
    // Prefix
    const prefix = `  [${process.pid}]`
    // Handle Message
    switch (type) {
      case 'info':
        console.log(`${prefix} [INFO] ${message}`)
        break
      case 'error':
        console.log(`${prefix} [ERROR] ${message}`)
        break
      case 'fatal':
        console.log(`${prefix} [FATAL] ${message}`)
        break
    }
  }
}
