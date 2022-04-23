document.body.onload = main 

class Box{
    constructor(h,w,l,t,c,d){
        this.height = "height:" + h + "px;"
        this.width = "width:" + w + "px;"
        this.left = "margin-left:" + l + "px;"
        this.top = "margin-top:" + t + "px;"
        this.colour = "background-color:" + c + ";"
        this.id = c
        this.drag = d
        this.styles = [this.height, this.width, this.left, this.top, this.colour]
    }
    render(){
        let style = ''
        for(let i = 0; i < this.styles.length; i ++){
            style += this.styles[i] + ';'
        }
        const div = document.createElement('div')
        div.setAttribute('style', style)
        div.setAttribute('draggable', this.drag)
        div.setAttribute("id", this.id)
        document.body.appendChild(div)
    }

    setColour(colour){
        const el = document.getElementById(this.id)
        el.remove()
        this.colour = "background-color:" + colour + ";"
        this.styles = [this.height, this.width, this.left, this.top, this.colour]
        let style = ''
        for(let i = 0; i < this.styles.length; i ++){
            style += this.styles[i] + ';'
        }
        const div = document.createElement('div')
        div.setAttribute('style', style)
        div.setAttribute('draggable', this.drag)
        div.setAttribute("id", this.id)
        document.body.appendChild(div)
    }
}

function renderBoxes(){
    const red = new Box(100, 100, 100, 100, "red", true)
    red.render()
    const orange = new Box(100, 100, 100, 100, "orange", true)
    orange.render()
    const blue = new Box(100, 100, 100, 100, "blue", true)
    blue.render()
    const purple = new Box(100, 100, 100, 100, "purple", true)
    purple.render()
    const green = new Box(100, 100, 100, 100, "green", true)
    green.render()
    const brown = new Box(100, 100, 100, 100, "brown", true)
    brown.render()
    const yellow = new Box(100, 100, 100, 100, "yellow", true)
    yellow.render()
    const black = new Box(100, 100, 100, 100, "black", true)
    black.render()
}

// class Person{
//     constructor(height, weight){
//         this.height = height,
//         this.weight = weight
//     }
//     getWeight(){
//         return this.weight
//     }
//     setWeight(arg){
//         this.weight = arg
//     }
// }

// const Bob = new Person('200cm', '120kg')
// const Anna = new Person('170cm', '70kg')




function main(){
    renderBoxes()
    const mainBox = new Box(300, 300, window.innerWidth/2.5, window.innerHeight/3, "grey", false)
    mainBox.render()

    document.body.addEventListener('dragstart', 
        function(e){
            const colour = e.target.id
            document.body.addEventListener('dragover', 
                function(e){
                    if(e.target.id == 'grey'){
                        mainBox.setColour(colour)
                    }
                }
            )
            console.log(colour)
        }
    )

    // let text = Bob.getWeight()

    // let appendText = document.createTextNode(text)
    // let header = document.createElement('h1')
    // header.appendChild(appendText)
    // document.body.appendChild(header)

    // Bob.setWeight("110kg")
    // text = Bob.getWeight()
    // appendText = document.createTextNode(text)
    // header = document.createElement('h1')
    // header.appendChild(appendText)
    // document.body.appendChild(header)

    console.log('lets get ready to code')
}
