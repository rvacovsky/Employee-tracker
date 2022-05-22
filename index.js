const inquirer = require('inquirer');
const table = require('console.table');

// Main Navigation for Employee Tracker
const mainNav = () => {
    return inquirer.prompt([
        {
        type: "list",
        name: "nav",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
        },
    ])
     .then(function (data) {
         switch (data.nav) {
            case "View All Departments":
                viewDepts();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "View All Employees":
                viewEmps();
                break;
            case "Add a Department":
                AddDept();
                break;
            case "Add a Role":
                AddRole();
                break;
            case "Add an Employee":
                AddEmp();
                break;
            case "Update an Employee Role":
                UpdateRole();
                break;
         }
     });
    }

// Shows all Departments
viewDepts = () => {
    console.log('Here is the current list of departments:');
    const sql = `SELECT `
}

// Shows all Roles
viewRoles = () => {
    console.log('Here is the current list of roles:');
    const sql = `SELECT `
}

// Shows all Employees
viewEmps = () => {
    console.log('Here is the current list of employees:');
    const sql = `SELECT `
}

// Add Department
AddDept = () => {
    console.log('Here is the current list of employees:');
    const sql = `SELECT `
}

//Add Role
AddRole = () => {
    console.log('Here is the current list of employees:');
    const sql = `SELECT `
}

// Add Employee. At the end it will loop back to main navigation
const AddEmp = () => {
    return inquirer.prompt([
        {
        type: "input",
        name: "firstname",
        message: "What is the Employee's first name?",
        },
        {
        type: "input",
        name: "lastname",
        message: "What is the Employee's last name?",
        },
        {
        type: "list",
        name: "role",
        message: "What is the employee's role at the organization?",
        choices: [] 
        },
        {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager?",
        choices: []
        }
    ])
    .then((answers) => {
        const data = [answers.firstname, answers.lastname]
        mainNav();
    });
    
};

// Update an employee role