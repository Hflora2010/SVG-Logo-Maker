
// TODO: Include packages needed for this application

const fs = require('fs');

const inquirer = require('inquirer');

const { generateSVG } = require('./lib/shapes');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the characters for your logo. No more than 3 characters please',
        name: 'text',
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
            "Circle", "Square", "Triangle"
        ],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter the fill color of your logo',
        name: 'fillcolor',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            const fileName = './examples/logo.svg';
            writeToFile(fileName, generateSVG(data))
        })
        .catch(error => {
            throw error
        })
}

// Function call to initialize app
init();

