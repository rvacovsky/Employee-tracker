USE tracker;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Enginnering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('Sales Lead', 300000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineering', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, roles_id, manager_id)
VALUES
    ('Ozzy', 'Osbourne', 1, null),
    ('Tony', 'Iommi', 3, 1),
    ('Geezer', 'Butler', 4, 2),
    ('Bill', 'Ward', 3, 2);



