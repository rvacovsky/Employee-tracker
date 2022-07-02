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
        return this.db.promise().query('SELECT roles.id AS ID, roles.title AS Role, department.name AS Department, roles.salary AS Salary FROM roles LEFT JOIN department ON roles.department_id = department.id');
    }
    empView = () => {
        return this.db.promise().query('SELECT employee.id AS ID, employee.first_name AS FirstName, employee.last_name AS LastName, roles.title AS Title, department.name AS Department, roles.salary AS Salary, CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee LEFT JOIN roles ON employee.roles_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON employee.manager_id = manager.id')
    }
    deptSelect = () => {
        return this.db.promise().query('SELECT department.id AS ID, department.name AS Department FROM department');
    } 
    createRole = (roles) => {
        return this.db.promise().query('INSERT INTO roles SET ?', roles) ;
    }
    roleUpdate = () => {
        return this.db.promise().query('SELECT * FROM employee');
    }
    findRoles = () => {
        return this.db.promise().query('SELECT roles.id AS ID, roles.title AS Role, department.name AS Department, roles.salary AS Salary FROM roles LEFT JOIN department ON roles.department_id = department.id');
    }
    roleSelect = () => {
        return this.db.promise().query('SELECT roles.title AS roles FROM roles');
    }
    managerSelect = () => {
        return this.db.promise().query('SELECT employee.first_name AS FirstName, employee.last_name AS LastName CONCAT(manager.first_name, " ", manager.last_name) AS Manager FROM employee');
    }
    createEmployee = (employee) => {
        return this.db.promise().query('INSERT INTO employee SET ?', employee);
    }
}


module.exports = new database(db);