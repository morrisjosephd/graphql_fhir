const express = require('express')
const apiController = require('../../controllers/api/apiController')
const createResponse = require('./create-response')

const api = express.Router()

api.get('/search/:id', createResponse(apiController.searchById))
api.post('/phoenix/:id', createResponse(apiController.savePhoenix))

module.exports = api
