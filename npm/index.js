// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("../Develop/utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions=[
    {
      type: 'input',
      name:'title',
      message: "Please enter the name of your project."
    },
    {
    type: 'input',
    name:'description',
    message: "Please enter 2-3 sentances describing your project."
  },

  { 
    type: 'checkbox',
    name:'tableOfContents',
    message: 'Please select your sections you want to include in the table of contents.',
    choices: ["Description", "Installation", "Useage", "Credits", "License", "Badges", "Features", "Tests", "How to contribute"]
  },
{
    type: 'checkbox',
    name:'installation',
    message: 'What does your client need to install to make your project work?',
    choices:["Browser", "Mobile", "custom hardware"]
  
  },
  {
    type: 'input',
    name:'useage',
    message: 'How is your project intended to be used?'
  
  },
  {
    type: 'input',
    name:'credits',
    message: 'Enter the names & emails of all collaborators.'
  
  },

   { type: 'checkbox',
    name:'license',
    message: 'Which License did you use?',
    choices: ["MIT", "Apache v2.0", "General Public License"]
  },
  {
    type: 'checkbox',
    name:'badges',
    message: 'Select which badges you want to add',
    choices:["License badge", "Downloads", "Forks", "Socials"]
    // https://img.shields.io/badge/License-MIT-blueviolet
    // https://img.shields.io/badge/License-Apache2.0-blueviolet
    // https://img.shields.io/badge/License-General%20Public-blueviolet
  },
  {
    type: 'checkbox',
    name:'features',
    message: 'What features does this project provide?',
    choices:["mobile compadability","dynamic programming","ease of access" ]
  },
  {
    type: 'input',
    name:'tests',
    message: 'Please inert the links to the tests. Or enter N/A.',
  },
  {
    type: 'input',
    name:'contact',
    message: 'Enter your email address or Github username.'
  }
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(fileName, data)
  }
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(response =>{ 
    writeToFile('Readme.md', generateMarkdown(response))
    console.log('Successfully created README.md!')
  })
}


// Function call to initialize app
init();