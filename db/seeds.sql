INSERT INTO employees
    (first_name, last_name, role_id)
VALUES
    ('Ozzy', 'Osbourne', 1),
    ('Tony', 'Iommi', 7),
    ('Geezer', 'Butler', 4),
    ('Bill', 'Ward', 3),
    ('Robin', 'Zander', 1),
    ('Rick', 'Nielsen', 5),
    ('Bun E.', 'Carlos', 3),
    ('Tom', 'Petersson', 4),
    ('Alice', 'Cooper', 1);

INSERT INTO role
    (title, role_id, department_id, salary)
VALUES
    ('Sales Lead', 1, 1, 100000),
    ('Salesperson', 2, 1, 80000),
    ('Lead Engineer', 3, 2, 150000),
    ('Software Engineering', 4, 2, 120000),
    ('Account Manager', 5, 3, 160000),
    ('Accountant', 6, 3, 125000),
    ('Legal Team Lead', 7, 4, 250000),
    ('Lawyer', 8, 4, 190000);

INSERT INTO department
    (name, department_id)
VALUES
    ('Sales', 1),
    ('Enginnering', 2),
    ('Finance', 3),
    ('Legal', 4);


