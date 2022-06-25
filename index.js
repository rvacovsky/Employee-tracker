const inquirer = require('inquirer');

const db = require('./db');
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
                addRole();
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
    db.deptView( (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Shows all Roles
viewRoles = () => {
    db.roleView(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Shows all Employees
viewEmps = () => {
    db.empView(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Add Department
function AddDept() {
    db.deptAdd()
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the new department"
        }
    ]).then ((data) => {
    db.query(sql, data, (err, res) => {
        if (err) throw err;
        console.log("Department Added!")
    });
        mainNav();
    });
};

//Add Role
function addRole() {
    db.deptSelect()
    .then(([rows]) => {
        let department = rows;
        const departmentChoices = department.map(({ id, name }) => ({
            name: name,
            value: id
        }));  
   
    inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "Enter the new role"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "list",
            name: "department",
            message: "What department does this role fall under?",
            choices: departmentChoices
        }        
    ]).then(role => {
        db.createRole(role)
            .then(() => console.log(`Added ${role.title} to the database!`))
            .then(() => mainNav())
    })
});
}


// Add Employee. At the end it will loop back to main navigation
function AddEmp () {
    db.roleSelect()
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, name }) => ({
                name: name,
                value: id
            }));
    db.managerSelect()
    .then(([rows]) => {
        let managers = rows;
        const managerChoices = managers.map(({ id, name }) => ({
            name: name,
            value: id
        }));
    
    inquirer.prompt([
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
            choices: roleChoices
        },
        {
            type: "list",
            name: "manager",
            message: "Who is the employee's manager?",
            choices: managerChoices
        }
    ]).then(employee => {
        db.createEmployee(employee)
            .then(() => console.log(`Added ${employee.name} to the database!`))
            .then(() => mainNav())
    })
    
})})};

// Update an employee role
UpdateRole = () => {
    db.roleUpdate(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Delete a role
function removeRole() {
    db.findRoles()
        .then(([rows]) => {
            let roles = rows;
            const roleChoices = roles.map(({ id, title }) => ({
                name: title,
                value: id
            })); 

            inquirer.prompt([
                {
                    type: "list",
                    name: "roleId",
                    message: "Which role would you like to remove?",
                    choices: roleChoices
                }
            ])
                .then(res => db.removeRole(res.roleId))
                .then(() => console.log("Removed role from the database!"))
                .then(() => mainNav())
        })
}

function departmentSelect() {
    db.deptSelect()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, name }) => ({
            name: name,
            value: id
        }));  
    });
}
  
quit = () => {
    console.log("Goodbye!");
    process.exit();
}

mainNav();