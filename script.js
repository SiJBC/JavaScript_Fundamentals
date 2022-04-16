document.body.onload = main

document.body.addEventListener('click', function(event){
    if(event.target.id === 'red'){
        appendFront(red)
        if(green.position === 1){
            appendMiddle(green)
            appendBack(blue)
        }else{
            appendMiddle(green)
            appendBack(blue)
        }
    }
    if (event.target.id === 'blue') {
        appendFront(blue)
        if (green.position === 1) {
          appendMiddle(green)
          appendBack(red)
        } else {
          appendMiddle(green)
          appendBack(red)
        }
      }
    if (event.target.id === 'green') {
    appendFront(green)
        if (blue.position === 1) {
        appendMiddle(blue)
        appendBack(red)
    } else {
        appendMiddle(blue)
        appendBack(red)
    }
    }
})

const box = {
    margin: '100px;',
    width: '150px;',
    height: '150px;',
    opacity: '0.9;',
    position: 'absolute;'
}

const front = {
    position: 1,
    top: '60px;',
    left: '60px;',
    'z-index': '3;'
}
function appendFront(color){
    color.position = front.position
    color.top = front.top
    color.left = front.left
    color['z-index'] = front['z-index']
    main()
}

const middle = {
    position: 2,
    top: '30px;',
    left: '30px;',
    'z-index': '2;'
}
function appendMiddle(color){
    color.position = middle.position
    color.top = middle.top
    color.left = middle.left
    color['z-index'] = middle['z-index']
    main()
}

const back = {
    position: 3,
    top: '0px;',
    left: '0px;',
    'z-index': '1;'
}
function appendBack(color){
    color.position = back.position
    color.top = back.top
    color.left = back.left
    color['z-index'] = back['z-index']
    main()
}

const red = {
    position: 3,
    color: 'red',
    top: '0px;',
    left: '0px;',
    background: '#ff0000;',
    'z-index': '1;'
}
const green = {
    position: 2,
    color: 'green',
    top: '30px;',
    left: '30px;',
    background: '#00ff00;',
    'z-index': '2;'
}
const blue = {
    position: 1,
    color: 'blue',
    top: '60px;',
    left: '60px;',
    background: '#0000ff;',
    'z-index': '3;'
}



function boxStyling(){
    let boxStyleString = `margin: ${box.margin} height: ${box.height} width: ${box.width} opacity: ${box.opacity} position: ${box.position}`
    return boxStyleString
}

function append(object){
    let div = document.createElement('div')
    let style = boxStyling() + 
    `
    top: ${object.top}
    left: ${object.left}
    background: ${object.background}
    z-index: ${object['z-index']}
    `
    div.setAttribute('style', style)
    document.body.appendChild(div)
    div.id = `${object.color}`
}

const array = [blue,green, red]

function main(){
    array.forEach(color => append(color))
}