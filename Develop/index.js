// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of your project?",
        name:"title"
    },
    {
        type:"input",
        message:"Provide description",
        name:"descrip"
    },
    {
        type:"input",
        message:"Provide Usage information",
        name:"usage"
    },
    {
        type:"input",
        message:"Get license information",
        name:"license"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        // let markdownText = generateMarkdown(response);
        writeToFile("./output/README.md", generateMarkdown(response))
    })
}
// Function call to initialize app
init()
