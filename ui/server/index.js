require('babel-core/register')({
  ignore: [/processSass\.js/, /node_modules/]
})

module.exports = require('./server.js')
