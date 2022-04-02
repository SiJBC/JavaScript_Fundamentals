document.body.onload = main
const div = document.createElement("div")
const showButton = document.createElement("button")
const hideButton = document.createElement("button")
const showButtonContent = document.createTextNode("create element")
const hideButtonContent = document.createTextNode("hide element")
const img = document.createElement("img")
showButton.appendChild(showButtonContent)
hideButton.appendChild(hideButtonContent)
div.appendChild(showButton)
div.appendChild(hideButton)
showButton.classList.add("styled")
hideButton.classList.add("styled")
hideButton.style.display = "none" 

function main () {
    document.body.appendChild(div)
    div.classList.add("container")
    showButton.addEventListener("click", showElement)
    hideButton.addEventListener("click", hideElement)
}

function showElement(){
    div.appendChild(img)
    img.setAttribute("src", "https://i.pinimg.com/564x/d9/08/e2/d908e2555ea9a9478caa5548798ede50.jpg")
    hideButton.style.display = "block"
    showButton.style.display = "none"
}

function hideElement(){
    img.setAttribute("src", "")
    showButton.style.display = "block"
    hideButton.style.display = "none"
}

