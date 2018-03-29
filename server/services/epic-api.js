const axios = require('axios')
const config = require('../config/dev.config')

module.exports = async (method, nameSpace) => {
  let options = {
    method: method,
    baseURL: config.epicBaseURL,
    url: nameSpace,
    timeout: 200000
  }

  try {
    let response = await axios(options)

    return response.data
  } catch (error) {
    return buildErrorMessage(error)
  }
}

const buildErrorMessage = (error) => {
  return {
    errorMessage: 'error calling open.epic',
    error
  }
}