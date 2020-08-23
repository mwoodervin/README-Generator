const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");


// const { ui } = require("inquirer");

var ui = new inquirer.ui.BottomBar();

const writeFileAsync = util.promisify(fs.writeFile);

ui.log.write("This application will create a README file using content generated through a series of prompts. All sections will appear in the file, so any answer left blank will generate a heading with no content.");

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of this project?",
            default: "Readme Template Generator"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of the application.",
            default: "This application creates a Readme file template with basic headings and content."
        },
        {
            type: "input",
            name: "installation",
            message: "Enter instructions for installing your application.",
            default: "node index.js"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter instructions for using your application.",
            default: "WHEN I want to create a new Readme file, THEN ..."
        },
        {
            type: "list",
            name: "license",
            message: "What licence are you using for this application?",
            choices: ["MIT", "Apache 2.0", "GPL v3", "Mozilla", "BSD 3"], 
            default: "MIT"
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter instructions for contributing to this file.",
            default: "If you are intereted in contributing to this project ..."
        },
        {
            type: "input",
            name: "testing",
            message: "Enter instructions for testing this application.",
            default: "Test information here"
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?",
            default: "mwoodervin"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address. (Contact for questions.)",
            default: "mwoodervin@gmail.com"
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
        
        await writeFileAsync("./output/readme.md", fileContent);
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