import axios from 'axios'
import config from '../config/dev.config'

async function callServer (url, method = 'GET', data = {}) {
  const options = {
    method,
    baseURL: config.serverUrl,
    url,
    data
  }

  try {
    const epicResponse = await axios(options)

    return epicResponse.data
  } catch (e) {
    console.log('Oh no, something went terribly wrong!')
  }
}

async function searchById (id) {
  return callServer(`/api/search/${id}`)
}

async function saveInfo (data) {
  return callServer(`/api/phoenix/${data.id}`, 'POST', data)
}

export default { searchById, saveInfo }
