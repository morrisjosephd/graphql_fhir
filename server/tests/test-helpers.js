const chai = require('chai')
const sinon = require('sinon')

chai.config.includeStack = true

global.expect = chai.expect
global.sinon = sinon
