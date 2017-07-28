const script = document.createElement("script")
script.innerText = "Array.from(document.scripts).map(element => {\n  if (element.innerText.includes(\"hu\")) { \n    element.remove()\n    console.log('hur') \n  }\n})\n"

document.head.insertBefore(script, document.head.firstChild)
