'use strict'

console.log('----------------prod env js------------------')
console.log(process.env)

module.exports = {
  NODE_ENV: '"production"',
  NODE_PUBLIC_PATH: process.env.publicPath,
  NODE_BASE_URL: process.env.dummy,
  VUE_APP_FIREBASE_CONFIG: process.env.NODE_FIREBASE_CONFIG,
  NODE_FIREBASE_CONFIG: process.env.NODE_FIREBASE_CONFIG,
  NODE_FIREBASE_CONFIG2: '"node_firebaase_config_dummy"'
}
