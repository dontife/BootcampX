
-- Getting the names of all the students from a specified cohort using the cohort_id
SELECT id, name 
FROM students 
WHERE cohort_id = 1 
ORDER BY name ASC;