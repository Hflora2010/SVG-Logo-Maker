const inquirer = require('inquirer')

//object destructuring
const { Circle } = require("./shapes")
const { Triangle } = require("./shapes")
const { Square } = require("./shapes")

const fs = require("fs/promises")

const questions = [
    {
        type: 'input',
        message: 'Enter the characters for your logo',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'Enter the color of your logo',
        name: 'color',
    },
    {
        type: 'list',
        message: 'select the shape for your logo',
        choices: [
            "circle", "square", "triangle"
        ],
        name: 'shape'
    }
]


function cli() {
    console.log("cli starting")
    return inquirer.prompt(questions).then((answers) =>{
        console.log(answers)
        let logo
        switch (answers.shape) {
            case "circle":
                logo = new Circle()
                break;
            case "triangle":
                logo = new Triangle()
                console.log("triangle")
                break;
            case "square":
                logo = new Square()
                console.log('square')
                break;

        
            default:
                throw new Error(); 
        }
    }) 
    
}

module.exports = cli