class Shape {
    constructor (color, text, fillcolor) {
        this.color = color
        this.text = text
        this.fillcolor = fillcolor
    }

}

class Circle extends Shape {
    constructor (color, text, fillcolor) {
        super(color, text, fillcolor);
        this.text = `<text fill="${this.color}" font-size="45" font-family="Verdana" x="57" y="115">${this.text}</text>`;
        this.shape = `<circle cx="100" cy="100" r="100" fill="${this.fillcolor}"/>`;
    }

    display () {
        return `<circle cx="100" cy="100" r="100" fill="${this.fillcolor}"/>`;
    }
}

class Polygon extends Shape {
    constructor (color, text, fillcolor) {
        super(color, text, fillcolor);
        this.text = `<text fill="${this.color}" font-size="20" font-family="Verdana" x="31" y="70">${this.text}</text>`;
        this.shape = `<polygon points= "50,0 100,100 0,100" x="14" y="23" fill="${this.fillcolor}"/>`;
    }

    display () {
        return `<polygon points= "50,0 100,100 0,100" x="14" y="23" fill="${this.fillcolor}"/>`;
    }
}

class Rectangle extends Shape {
    constructor (color, text, fillcolor) {
        super(color, text, fillcolor);
        this.text = `<text fill="${this.color}" font-size="45" font-family="Verdana" x="35" y="190">${this.text}</text>`;
        this.shape = `<rect x="10" y="100" width="150" height="150" fill="${this.fillcolor}"/>`;
    }

    display () {
        return `<rect x="10" y="100" width="150" height="150" fill="${this.fillcolor}"/>`;
    }
}

generateSVG = (data) => {
    //calling the classes 
    if( data.shape === 'circle') {
        const circle = new Circle (data.color, data.text, data.fillcolor)
        return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="300">
        ${circle.shape} 
        ${circle.text}
        </svg>`
    } else if (data.shape === 'triangle') {
        const polygon = new Polygon (data.color, data.text, data.fillcolor)
        return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="300">
        ${polygon.shape} 
        ${polygon.text}
        </svg>`

    } else if (data.shape === "square") {
        const rectangle = new Rectangle (data.color, data.text, data.fillcolor)
        return `<?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="300">
        ${rectangle.shape} 
        ${rectangle.text}
        </svg>`

    }

}


module.exports = {Circle, Polygon, Rectangle, generateSVG};