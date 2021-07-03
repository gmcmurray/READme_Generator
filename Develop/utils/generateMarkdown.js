// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function renderMainTitle(title){

}

var title = "Test"
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
let outpfile = `
# ${response.title} \n
## Table of Contents

1. ### [Description](#descrip) 

2. ### [Installation](#install)

3. ### [Usage](#usage)

4. ### [License](#lic)

5. ### [Contributing](#contri)

6. ### [Tests](#test)

7. ### [Questions](#quest)

8. ### [Images](#images)
---------------------------------
## 1. Description<a id="descrip"></a>
${response.descrip}
`
return outpfile;
}

module.exports = generateMarkdown;
