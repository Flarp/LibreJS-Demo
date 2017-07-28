Array.from(document.scripts).map(element => {
  if (element.innerText.includes("hu")) { 
    element.remove()
    console.log('hur') 
  }
})
