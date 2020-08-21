const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");


// const { ui } = require("inquirer");

var ui = new inquirer.ui.BottomBar();

const writeFileAsync = util.promisify(fs.writeFile);

// Start with a statement explaining how this will work. All sections are required for a 
// good README file. Any answer left blank will still create a section heading, but that
// section will be empty in the README file.
// write a function that collects information about what sections to include
// then use that information to populate the promptUser function
// AND use that information to create links for Table of Contents
// OR for each section, ask whether to include it (Y/N) and, if Y then ask for input

// Need to add conditions to be sure inputs are provided and in correct format
// Add error messages for improper inputs - how to check if something is an email address

ui.log.write("This application will create a README file using content generated through a series of prompts. All sections will appear in the file, so any answer left blank will have a heading with no content.");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this README File?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of this README file."
        },
        {
            type: "input",
            name: "installation",
            message: "Enter instructions for installing your application."
        },
        {
            type: "input",
            name: "usage",
            message: "Enter instructions for using your application."
        },
        {
            type: "list",
            name: "license",
            message: "What license do you want to use for this application?",
            choices: ["MIT", "Apache 2.0", "GPL v3", "Mozilla", "BSD 3"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter instructions for contributing to this file."
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter instructions for testing this application."
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. (Contact for questions.)"
        },

    ]);
}
// promptUser();

// function to generate README.md file using answers from above

async function init() {
    try {
        const data = await promptUser();
        console.log(data);

        const fileContent = generateMarkdown(data);
        console.log(fileContent);
        
        await writeFileAsync("readme.md", fileContent);
    }
    catch(err) {
        console.log(err);
    }
}

init();
// run promptUser()
// .then(function(answers) {
//     const readme = generateReadme(answers);
    
//     return writeFileAsync("readme.md", md); 
// })
//     .then(function(){
//         console.log("Your README file has been created.");
//     })
//     .catch(function(err) {
//         console.log(err);
//     });