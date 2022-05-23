USE tracker;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Enginnering'),
    ('Finance'),
    ('Legal');

INSERT INTO role
    (title, department_id, salary)
VALUES
    ('Sales Lead', 1, 100000),
    ('Salesperson', 1, 80000),
    ('Lead Engineer', 2, 150000),
    ('Software Engineering', 2, 120000),
    ('Account Manager', 3, 160000),
    ('Accountant', 3, 125000),
    ('Legal Team Lead', 4, 250000),
    ('Lawyer', 4, 190000);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Ozzy', 'Osbourne', 1, null),
    ('Tony', 'Iommi', 7, 1),
    ('Geezer', 'Butler', 4, 2),
    ('Bill', 'Ward', 3, 2),
    ('Robin', 'Zander', 1, 6),
    ('Rick', 'Nielsen', 5, null),
    ('Bun E.', 'Carlos', 3, 6),
    ('Tom', 'Petersson', 4, 6),
    ('Alice', 'Cooper', 1, null);



