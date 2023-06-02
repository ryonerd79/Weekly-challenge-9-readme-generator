// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repository?', 
    },

    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What is in your table of contents?',
    },

    {
        type: 'input',
        name: 'installation',
        message: 'What is installed on your repository?',
    },
    {
        
        type: 'input',
        name: 'description',
        message: 'What is the repository about?',

    },


    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?',
    },

    {
        type: 'list',
        name: 'license',
        message: 'What is the license on your repository?',
        choices: [
            'MIT',
            'AGPL',
            'GPL',
            'APACHE'
        ]
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Who is contributing your repository?',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'What are the tests on your repository?',
    },

    {
        type: 'input',
        name: 'questions',
        message: 'What are the questions on your repository?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];
inquirer.prompt(questions)
.then((data) => {
    fs.writeFile(`README.md`, generateMarkdown(data), (err) => err ? console.error(err) : console.log('Readme generated'))
})
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
