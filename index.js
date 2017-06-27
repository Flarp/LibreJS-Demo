const acorn = require('acorn/dist/acorn_loose.js')
browser.webRequest.onBeforeRequest.addListener(request => {
  return new Promise((resolve, reject) => {
     fetch(request.url)
    .then(res => res.text())
    .then(text => {
      console.log(acorn.parse_dammit(text))
      resolve({ cancel: false })
    })
  })
}, { types: ['script'], urls: ["<all_urls>"] }, ['blocking'])
