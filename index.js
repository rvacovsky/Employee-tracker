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
                addDept();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmp();
                break;
            case "Update an Employee Role":
                updateRole();
                break;
            case "Remove a Role":
                removeRole();
                break;
                default:
                    quit();
         }
     });
}

// Shows all Departments
viewDepts = () => {
    db.deptView ().then(([rows]) => {
        let department = rows;
        console.table(department)
    })
      .then(() => mainNav())
}

// Shows all Roles
viewRoles = () => {
    db.roleView ().then(([rows]) => {
        let role = rows;
        console.table(role)
    })
      .then(() => mainNav())
}

// Shows all Employees
viewEmps = () => {
    db.empView ().then(([rows]) => {
        let employee = rows;
        console.table(employee)
    })
      .then(() => mainNav()) 
}

// Add Department
function addDept() {
    db.deptAdd()
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the new department"
        }
    ]).then ((data) => {
    db.query(data, (err, res) => {
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
    ]).then(roles => {
        db.createRole(roles)
            .then(() => console.log(`Added ${roles.title} to the database!`))
            .then(() => mainNav())
    })
});
}


// Add Employee. At the end it will loop back to main navigation
function addEmp () {
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
updateRole = () => {
    db.roleUpdate(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows);
        mainNav();
    });
}

// Delete a role
function removeRole () {
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

  
quit = () => {
    console.log("Goodbye!");
    process.exit();
}

mainNav();