# Office Tracker 👨‍💼

Office Tracker is a CLI (command-line interface) that uses SQL to create and maintain a database for employees, their roles, and the departments in which they work. 

## User Story

As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business.

## Acceptance Criteria

When the user starts the application, they are presented with the following options:
* View all departments
* View all roles
* View all employees
* Add a department
* Add a role
* Add an employee
* Update an employee role
* Remove a role

When the user chooses to view all departments, they are presented with a formatted table showing department names and department IDs. When the user chooses to view all roles, they are presented with the job title, role ID, the department that role belongs to, and the salary for that role.

When the user chooses to view all employees, they are presented with a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and managers that the employees report to.

When 'add a department' is chosen, the user is prompted to enter the name of the department and that department is added to the database. When the user chooses to add a role, they are prompted to enter the name, salary, and department for the role and that role is added to the database.

When the user adds an employee, they are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database. When they choose to update an employee role, they are prompted to select an employee to update and their new role and this information is updated in the database.

## Technologies Used

* [MySQL](https://www.mysql.com/)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Inquirer](https://www.npmjs.com/package/inquirer)

## Link to Demo Video

https://drive.google.com/file/d/1izSq5vpDmCopx9sAFGM3vu0pZdO9ub1a/view
