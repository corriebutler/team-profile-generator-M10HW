const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const teamMembers = [];

function mainMenu() {
    // Engineer or Intern or All Done!
    inquirer.prompt ([
        {
        type: 'list',
        name: 'mainMenu',
        message: 'What do you want to do next?',
        choices: ['Add Engineer', 'Add Intern', 'All Done!']
        }
    ])
    // Switch statement based on the response
    .then(res => {
        switch(res.mainMenu) {
            case 'Add Engineer': 
                return addEngineer();
            case 'Add Intern': 
                return addIntern();
            default: 
            // Run Build Team Function to add to HTML doc
                return buildTeam();
        }
    })
};

function addManager () {
    console.log(`Let's build your team! Starting with the team manager!`);
    // Inquirer to ask about the manager - 4 questions (name, id, email, officenumber)
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?',
        },
    ])
    // Build the manager using the information from the prompts passed through the constructor
    .then(res => {
        const {name, id, email, officeNumber} = res;
        let manager = new Manager( name, id, email, officeNumber);
        // Add manager to the team array (teamMembers)
        teamMembers.push(manager);
        console.log(manager);
        // Call Main Menu - only one manager per team so it's outside the main menu flow
        mainMenu();
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the engineer\'s GitHub account?',
        },
    ])
    // Build the engineer using the information from the prompts passed through the constructor
    .then(res => {
        const {name, id, email, gitHub} = res;
        let engineer = new Engineer( name, id, email, gitHub);
        // Add engineer to the team array (teamMembers)
        teamMembers.push(engineer);
        // Call Main Menu - only one engineer per team so it's outside the main menu flow
        mainMenu();
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s employee id number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What school is the intern from?',
        },
    ])
    // Build the intern using the information from the prompts passed through the constructor
    .then(res => {
        const {name, id, email, school} = res;
        let intern = new Intern( name, id, email, school);
        // Add intern to the team array (teamMembers)
        teamMembers.push(intern);
        // Call Main Menu - only one intern per team so it's outside the main menu flow
        mainMenu();
    })
};

function buildTeam() {

};

addManager();