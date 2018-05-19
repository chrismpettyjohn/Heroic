import Path from 'path'
export default class Root {

  static cwd() {
    return new Promise((resolve, reject) => {
      if (process.pkg) {

        if (process.os == 'win32') {
          resolve(process.cwd())
        } else {
          resolve(process.argv[0])
        }

      } else {
        resolve(__dirname)
      }
    })
  }

}