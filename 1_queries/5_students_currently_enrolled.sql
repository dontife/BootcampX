

-- List of students currently enrolled in Bootcamp
SELECT name, id, cohort_id 
FROM students 
WHERE end_date IS NULL 
ORDER BY cohort_id;
