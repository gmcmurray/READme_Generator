// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const Emailvalidate = async (email) => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (!valid) {
            console.log(".  Please enter a valid email")
            return false;
        }
        return true;
    };
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project? ",
        name: "title"
    },
    {
        type: "input",
        message: "Description of your project? ",
        name: "description"
    },
    {
        type: "input",
        message: "Instructions for Installation of API ? ",
        name: "install"
    },
    {
        type: "input",
        message: "Where are the working files for the API? ",
        name: "workingfiles"
    },
    {
        type: "input",
        message: "What is the URL where API is deployed?",
        name: "deployedurl"
    },
    {
        type: "input",
        message: "Provide Usage information for the API: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Who are Contributing to this Project? ",
        name: "contributors"
    },
    {
        type: "input",
        message: "What Tests are associated with this Project? ",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter github username: ",
        name: "githubusername"
    },
    {
        type: "input",
        message: "Enter email to respond to Questions",
        name: "emailaddress",
        validate: function(emailaddress) {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailaddress)
            if (!valid) {
                console.log(".  Please enter a valid email")
                return false;
            }
            return true;
        }
    },
    {
        type: "rawlist",
        message: "Which licenses are you acknowledging? ",
        choices: ["MIT", "BSD-2", "BSD-3", "Apache-2.0", "Mozilla"],
        name: "license"
    }

];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
}

function appendToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log(response)
            writeToFile("./output/README.md", generateMarkdown(response))

        });
    }
// Function call to initialize app
init()

