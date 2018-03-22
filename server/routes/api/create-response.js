module.exports = functionToExecute => {
  return async (req, res, next) => {
    try {
      const result = await functionToExecute(req)

      res.json(result)
    } catch (error) {
      console.error(error)
      next(error)
    }
  }
}
