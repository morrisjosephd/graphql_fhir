let config = {
  dev: require('./dev.config'),
  prod: require('./prod.config')
}

module.exports = config[process.env.NODE_ENV]
