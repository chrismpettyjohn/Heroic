const component = {
  async init () {
    Storage.prototype.set = function (key, value) {
      // Check typeof
      if (typeof value === 'object') {
        this.setItem(key, JSON.stringify(value))
      } else {
        this.setItem(key, value)
      }
    }

    Storage.prototype.get = function (key) {
      // Fetch Item
      let value = this.getItem(key)
      try {
        return JSON.parse(value)
      } catch (e) {
        return value
      }
    }
  }
}

// Export
export default component
