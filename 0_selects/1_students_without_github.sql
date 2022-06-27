
-- List of students that haven't added their github username to thier account yet
-- test run to show how ro 
SELECT id, name, email, cohort_id 
FROM students 
WHERE github IS null 
ORDER BY cohort_id;