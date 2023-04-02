class Shape {
    constructor (prop) {
        this.color = ""
        this.prop = prop
    }

    // This is a setting function that sets the color 
    setColor (color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor () {
        //look into super
        super();
    }

    display () {
        return `<circle cx="50" y="50" r="40" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    constructor () {
        super();
    }

    display () {
        return `<triangle /> `
    }
}

class Square extends Shape {
    constructor () {
        super()
    }

    display () {
        return `<square />`
    }
}


// var myCircle = new Circle();
// myCircle.setColor("red");
// console.log(myCircle.display());


module.exports = {Shape, Circle, Triangle, Square}