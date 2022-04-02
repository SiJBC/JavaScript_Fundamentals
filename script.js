document.body.onload = addElement

function addElement(){
    const newDiv = document.createElement('div')
    document.body.appendChild(newDiv)
    newDiv.classList.add("new")
    const content = document.createTextNode("Hello World")
    newDiv.appendChild(content)
    const button = document.createElement("button")
    const buttonContent = document.createTextNode("create element")
    button.appendChild(buttonContent)
    button.classList.add("styled")
    const linebreak = document.createElement("br")
    newDiv.appendChild(linebreak)
    newDiv.appendChild(button)
    button.addEventListener("click", function(){
        const img = document.createElement("img")
        newDiv.appendChild(img)
        img.setAttribute("src", "https://i.pinimg.com/564x/d9/08/e2/d908e2555ea9a9478caa5548798ede50.jpg")
    })
}