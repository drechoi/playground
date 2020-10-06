'use strict'

console.log('prod env js')
console.log(process.env)

module.exports = {
  NODE_ENV: '"production"',
  NODE_PUBLIC_PATH: process.env.publicPath,
  NODE_BASE_URL: process.env.dummy
}
