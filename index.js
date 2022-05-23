const inquirer = require('inquirer');

const db = require('./db/connection');
require('console.table');


// Main Navigation for Employee Tracker
const mainNav = () => {
    return inquirer.prompt([
        {
        type: "list",
        name: "nav",
        message: "What would you like to do?",
        choices: ["View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Add a Department",
                    "Add a Role",
                    "Add an Employee",
                    "Update an Employee Role",
                    "Quit"]
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
                default:
                    quit();
         }
     });
    }

// Shows all Departments
viewDepts = () => {
    console.log('Here is the current list of departments:');
    const sql = `SELECT department.id AS ID,
                department.name AS Department
                FROM department`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Shows all Roles
viewRoles = () => {
    console.log('Here is the current list of roles:');
    const sql = `SELECT role.id AS ID,
                role.title AS Role,
                department.name AS Department,
                role.salary AS Salary
                FROM role
                LEFT JOIN department ON role.department_id = department.id`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Shows all Employees
viewEmps = () => {
    console.log('Here is the current list of employees:');
    const sql = `SELECT employee.id AS ID,
                employee.first_name AS FirstName,
                employee.last_name AS LastName,
                role.title AS Title,
                department.name AS Department,
                role.salary AS Salary,
                CONCAT(manager.first_name, " ", manager.last_name) AS Manager
                FROM employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employee manager ON employee.manager_id = manager.id`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Add Department
AddDept = async () => {
    const sql= `INSERT INTO department SET ?`
    await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the new department"
        }
    ]).then ((data) => {
    db.query(sql, data, (err, res) => {
        if (err) throw err;
    });
        mainNav();
    });
};



//Add Role
AddRole = async () => {
    const sql = `INSERT INTO role (title, department_id, salary) VALUES (?,?,?)`;
    const params = [role.title, role.department.id, role.salary];
    let departments = [];
    await inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "Enter the new role"
        },
        {
            type: "list",
            name: "department",
            message: "What department does this role fall under?",
            choices: departments
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        }
    ]).then((params) => {
        db.query(sql, params, (err, res) => {
            if (err) throw err;
        })
        mainNav();
    });
    
};

// Add Employee. At the end it will loop back to main navigation
const AddEmp = async () => {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "firstname",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "lastname",
            message: "What is the employee's last name?"
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
    ]);
    const data = [answers.firstname, answers.lastname, answers.role, answers.manager];
    mainNav();
    
};

// Update an employee role
UpdateRole = () => {
    console.log('Whose role would you like to update?');
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

function quit() {
    console.log("Goodbye!");
    process.exit();
  }

mainNav();