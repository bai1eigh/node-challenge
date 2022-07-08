// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input // Creating an array of objects: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
const questions = [


    //Question for title
{name: 'title',
type:'input',
message:'What is the title of your project?',
default:'Project Title',
},

  //Question for description
{name: 'description',
type:'input',
message:'Please enter a description for your application.',
default:'Description',
},

  //Question for contributers
{name: 'contributers',
type: 'input',
default: 'Project contributers',
message:'Who are the contributers of this application?',
},

  //Question for license
{

    name: 'License',
    type:'list',
    message: 'Would you like to display the license of the project?',
    choices:  
    ['GNU AGPLv3', 
    'GNU GPLv3',
    'GNU LGPLv3', 
    'Mozilla Public License 2.0',
    'Apache License 2.0', 
    'MIT License', 
    'Boost Software License 1.0',
    'The Unlicense'],
    

},

  //Question for table of contents
{

    name:'Table of Contents',
    type:'input',
    message: 'Does your application require a table of contents?',
    
},

  //Question for usage

{
    name: 'usage',
    type: 'input',
    message: 'What is the intended usage of your application?',
    
},


  //Question for installation
{
    name: 'installation',
    type: 'input',
    message: 'How can someone install this project?',
    
},

  //Question for information
{
    name: 'information',
    type: 'input',
    message: 'Would you like to enter some information about how to use your project?',
    
},

  //Question for testing
{
    name: 'testing',
    type: 'input',
    message:'How is this project tested?',
    
},

  //Question for issues
{
    name: 'issues',
    type: 'input',
    message: 'What do I do if I have an issue?',
    
},
//username
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},

//email
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data) ;
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((data) => {
    //    console.log(JSON.stringify(data, null, " "));
       // data.getLicense = getLicense(data.license);
       writeToFile('./README.md', generateMarkdown(data));
    });
}

// Function call to initialize app
init();

