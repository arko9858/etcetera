export default (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        console.log("middleware error")
        return reject(result)
      }

      return resolve(result)
    })
  })
}
