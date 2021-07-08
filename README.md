[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# ReadMe File Generator 

## Table of Contents
1.  [Description](#descrip) 
2. [Installation](#install)
3. [Usage](#usage)
4. [License](#lic)
5. [Contributing](#contri)
6. [Tests](#test)
7. [MockUp](#mockup)
8. [Questions](#quest)

---------------------------------------
## 1. Description <a id="descrip"> </a>
The API is a file generator using line command line application through a
series of prompts/questions in the terminal window.  Inquirer is used to
accomplish the data gathering and is installed through npm.  The answers to
the series of questions are used to generate a READme.md file.
Inquirer accepts different input types and this application used two: text,
and rawlist which was used to collect license info.  

The index.js file is the main file which initiates the api through the inquirer.prompt
command and then passes the reponse to the functions in the generateMarkdown.js file.  
The generateMarkdown.js file contains the rendering functions for the READme.md and 
is linked to index.js through and export.modules and require command in the respective files.  The READme.md file has a table of contents which hyperlinks to the respective
section in the body of the document.

Finally the built out READme.md file is stored using a writefile function (from fs module) 
in the output folder under READme.md file.


----------------------------------------------

## 2. Installation <a id="install"></a>
Installation Instructions: 

From the terminal command line (make sure you are in the directory containing the index.js file): 
1) install - i  (first time to pull in necessary library/functions from the package.json file)
2) node  index.js  

Files used in API found : https://github.com/gmcmurray/READme_Generator 

API deployed here : none

-------------------------------------------------

## 3. Usage <a id="usage"></a>
The API is  to be used to help automate generating
a professional ReadMe.md file for API projects.  The
sequence of questions in the inquirer prompt cover the
most common categories of information required for a API
READme.md found in Github.

-----------------------------------------------------

## 4. License <a id="lic"></a>

License covering API:
MIT License
    Copyright (c) <2021> <George McMurray>
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

----------------------------------------------

## 5. Contributing <a id="contri"></a>

George McMurray

-------------------------------------------------

## 6. Tests <a id="test"></a>
The following tests were conducted on the API:
none

## 7. Mock-Up <a id="mockup"></a>

The following animation demonstrates the application functionality:
![user responds to command line questions to generate a ReadMe.md file](./Develop/utils/ReadMeFileGenerator.gif)

---------------------------------------

## 8.  Questions <a id="quest"></a>
For any questions you can email me at:
gmcmurray1493@gmail

My github username is gmcmurray

---------------------------------