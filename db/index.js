const db = require('./connection');
class database{
    constructor (db){
        this.db = db
    }
    deptAdd = (department) => {
        return this.db.promise().query('INSERT INTO department SET ?', department);
    }
    deptView = () => {
        return this.db.promise().query('SELECT department.id AS ID, department.name AS Department FROM department')
    }
    roleView = () => {
        return this.db.promise().query('SELECT role.id AS ID, role.title AS Role, department.name AS Department, role.salary AS Salary FROM role LEFT JOIN department ON role.department_id = department.id');
    }
    empView = () => {
        return this.db.promise().query('SELECT employee.id AS ID, employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id')
    }
    deptSelect = () => {
        return this.db.promise().query('SELECT department.id AS ID, department.name AS Department FROM department');
    } 
    createRole = (role) => {
        return this.db.promise().query('INSERT INTO role SET ?', role) ;
    }
    roleUpdate = () => {
        return this.db.promise().query('SELECT * FROM employees');
    }
    findRoles = () => {
        return this.db.promise().query('SELECT role.id AS ID, role.title AS Role, department.name AS Department, role.salary AS Salary FROM role LEFT JOIN department ON role.department_id = department.id');
    }
    roleSelect = () => {
        return this.db.promise().query('SELECT role.title AS role FROM role');
    }
    managerSelect = () => {
        return this.db.promise().query('SELECT employee.first_name AS FirstName, employee.last_name AS LastName CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee');
    }
    createEmployee = (employee) => {
        return this.db.promise().query('INSERT INTO employee SET ?', employee);
    }
}


module.exports = new database(db);