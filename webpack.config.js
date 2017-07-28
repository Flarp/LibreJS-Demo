const webpack = require('webpack')
const crypto = require('crypto')
const fs = require('fs')

const INNER_SCRIPT = fs.readFileSync('injectee.js', 'utf8')
const hash = crypto.createHash('sha256').update(INNER_SCRIPT).digest('base64')
const manifest = fs.readFileSync('manifest-template.json', 'utf8').split('HASH').join(hash)

const injector = fs.readFileSync('injector.js', 'utf8').split('INNER_SCRIPT').join(JSON.stringify(INNER_SCRIPT))

fs.writeFileSync('injector-final.js', injector)
fs.writeFileSync('manifest.json', manifest)

module.exports = {
  'entry': './index.js',
  'output': {
    'filename': 'main.js'
  },
}
