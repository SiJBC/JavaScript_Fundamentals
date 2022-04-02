document.body.onload = main
const div = document.createElement("div")
document.body.appendChild(div)
const showButton = document.createElement("button")
const hideButton = document.createElement("button")
const showButtonContent = document.createTextNode("create element")
const hideButtonContent = document.createTextNode("hide element")
const img = document.createElement("img")
showButton.appendChild(showButtonContent)
hideButton.appendChild(hideButtonContent)
div.appendChild(showButton)
div.appendChild(hideButton)
let toggleButtonValue = false

function showElement(){
    toggleButton()
    toggleElement()
    div.appendChild(img)
    img.setAttribute("src", "https://i.pinimg.com/564x/d9/08/e2/d908e2555ea9a9478caa5548798ede50.jpg")
}

function hideElement(){
    toggleButton()
    toggleElement()
    img.setAttribute("src", "")
}

function toggleButton()
{
    toggleButtonValue = !toggleButtonValue
    console.log(toggleButtonValue)
}

function toggleElement(){
    if(!toggleButtonValue){
        hideButton.style.display = "none"
        showButton.style.display = "block"
    }else{
        showButton.style.display = "none"
        hideButton.style.display = "block"

    }
}

function main(){
    showButton.addEventListener('click', showElement)
    hideButton.addEventListener('click', hideElement)
    showButton.classList.add("styled")
    hideButton.classList.add("styled")
    toggleElement()
}
