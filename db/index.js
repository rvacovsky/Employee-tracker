const connection = require('./connection');

departmentSelect = () => {
    `SELECT department.id AS ID, department.name AS Department FROM department`;
}
  
createRole = () => {
    `INSERT INTO role (title, department_id, salary) VALUES (?,?,?)`;
}
  
findRoles = () => {
    `SELECT role.id AS ID, role.title AS Role, department.name AS Department, role.salary AS Salary FROM role
                  LEFT JOIN department ON role.department_id = department.id`;
}

roleSelect = () => {
    `SELECT role.title AS role FROM role`;
}

managerSelect = () => {
    `SELECT employee.first_name AS FirstName, employee.last_name AS LastName CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee`;
}

createEmployee = () => {
    `INSERT INTO employee (title, department_id, salary) VALUES (?,?,?)`;
}

module.exports = { departmentSelect, createRole, findRoles, roleSelect, managerSelect, createEmployee };