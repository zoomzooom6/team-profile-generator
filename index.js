//import necessary dependancies
const inquirer = require('inquirer');
const { writeFile } = require('./src/generate-site');
//import object declarations
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

employeesTable = [];

const firstPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID number?',
            validate: numInput => {
                if (numInput) {
                    return true;
                } else {
                    console.log('Please enter your ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is your office number (numbers only)?',
            validate: offNumInput => {
                if (offNumInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }
    ]).then(({ name, id, email, officeNum }) => {
        this.Manager = new Manager(name, id, email, officeNum);
        employeesTable.push(this.Manager);
    });
};

const employeesPrompt = empData => {
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'What kind of employee is this?',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the employee's name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter their employee ID number',
            validate: numInput => {
                if (numInput) {
                    return true;
                } else {
                    console.log('Please enter their ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'edu',
            message: 'Provide their Github username (for Engineers) or current school (for Interns)',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('Please provide an input!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmp',
            message: 'Do you want to add another employee?',
            default: false
        }
    ])
        .then(({ employee, name, id, email, edu }) => {
            if (employee === 'Engineer') {
                this.Engineer = new Engineer(name, id, email, edu);
                employeesTable.push(this.Engineer);
            } else {
                this.Intern = new Intern(name, id, email, edu);
                employeesTable.push(this.Intern);
            }
            if (this.confirmAddEmp) {
                return employeesPrompt(empData);
            } else {
                console.log(employeesTable);
                console.log(employeesTable[1].constructor.name);
            }
        })
}

firstPrompt()
    .then(employeesPrompt);