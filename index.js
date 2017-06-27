const acorn = require('acorn/dist/acorn_loose.js')
const walk = require('acorn/dist/walk.js')
browser.webRequest.onBeforeRequest.addListener(request => {
  return new Promise((resolve, reject) => {
     fetch(request.url)
    .then(res => res.text())
    .then(text => {
      /*walk.simple(acorn.parse_dammit(text), {
        CallExpression(node) {
          if (node.callee.name === "eval") {
            console.log(node)
          }
        }
      })
      */
      acorn.parse_dammit(text, { onComment: (x, c) => {
        console.log(c)
      } })
      resolve({ cancel: false })
    })
  })
}, { types: ['script'], urls: ["<all_urls>"] }, ['blocking'])
