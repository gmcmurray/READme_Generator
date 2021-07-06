// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the title of your project? ",
        name:"title"
    },
    {
        type:"input",
        message:"Description of your project? ",
        name:"description"
    },
    
    {
        type:"input",
        message:"Where are the working files for the API? ",
        name:"workingfiles"
    },
    {
        type:"input",
        message:"What is the URL where API is deployed?",
        name:"deployedurl"
    },

    {
        type:"input",
        message:"Provide Usage information for the API: ",
        name:"usage"
    },
    {
        type:"input",
        message:"Who are Contributing to this Project? ",
        name:"contributors"
    },
    {
        type:"input",
        message:"What Tests are associated with this Project? ",
        name:"tests"
    },
    {
        type:"input",
        message:"Enter github username: ",
        name:"githubusername"
    },
    {
        type:"input",
        message:"Enter email to respond to Questions",
        name:"emailaddress"
    },

    {
        type:"input",
        message:"Attach any images including paths ",
        name:"imagespath"
    },
    {
        type:"rawlist",
        message:"Which licenses are you acknowledging? ",
        choices: ["MIT","BSD-2","BSD-3","Apache-2.0","Mozilla"],
        name:"license"
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("./output/README.md", generateMarkdown(response))
    })
    

}
// Function call to initialize app
init()

// inquirer
// .prompt([
//     {
//         type: "search-list",
//         message: "Select topping",
//         name: "topping",
//         choices: ["Pepperoni", "Ham", "Ground Meat", "Bacon", "Mozzarella", "Bottle"],
//         validate: function(answer) {
//             if (answer === 'Bottle') {
//                 return `Whoops, ${answer} is not a real topping.`;
//             }
//             return true;
//         }
//     }
// ])
// .then(function(answers) {
//     console.log(JSON.stringify(answers, null, "  "));
// })
// .catch(e => console.log(e));