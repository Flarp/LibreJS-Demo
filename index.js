const acorn = require('acorn/dist/acorn_loose.js')
//const match = /^.*Copyright \([cC]\).*$/
browser.webRequest.onBeforeRequest.addListener(request => {
  return new Promise((resolve, reject) => {
     fetch(request.url)
    .then(res => res.text())
    .then(text => {
      let cancel = false
      console.log(acorn.parse_dammit(text, 
        { onComment: (x, c) => {
          console.log(c)
          if (c.includes("hu")) cancel = true
        }}
      ))
      
      resolve({ cancel: cancel })
    })
})}, { types: ['script'], urls: ["<all_urls>"] }, ['blocking'])

