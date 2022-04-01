const path = require('path')
const jsConfig = require('./jsConfig.json')

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: [path.resolve(jsConfig.compilerOptions.baseUrl)],
      },
    ],
  ],
}
