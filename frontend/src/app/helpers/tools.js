const tools = {
  cut (string, where) {
    return `${string.split('.')[where]}`
  }
}
export default tools
