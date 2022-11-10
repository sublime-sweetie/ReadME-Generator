const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
    type: 'input',
    name:'Description',
    message: "Please enter 2-3 sentances describing your project."
  },

   { type: 'checkbox',
    name:'Table of Contents',
    message: "Please enter your sections for the table of contents.",
    choices: ["HTML", "CSS", "JavaScript"]
  },
{
    type: 'list',
    name:'contact',
    message: 'What is your preferred method of communication?',
    choices:["email", "phone", "text"]
  
  },
  {
    type: 'input',
    name:'name',
    message: "What is your name?"
  
  },

   { type: 'checkbox',
    name:'language',
    message: "What languages do you know?",
    choices: ["HTML", "CSS", "JavaScript"]
  },
{
    type: 'list',
    name:'contact',
    message: 'What is your preferred method of communication?',
    choices:["email", "phone", "text"]
  
  },
  {
    type: 'input',
    name:'name',
    message: "What is your name?"},

   { type: 'checkbox',
    name:'language',
    message: "What languages do you know?",
    choices: ["HTML", "CSS", "JavaScript"]
  }

  ])
  .then((data) => {
const filename = `${data.name.toLowerCase().split(" ").join(" ")}.json`
 fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
 err ? console.log(err) : console.log("Success!!")
 );

});


