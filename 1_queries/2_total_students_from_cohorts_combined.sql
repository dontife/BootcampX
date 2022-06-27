
-- Total number of students who were in the first 3 cohorts
SELECT count(*) 
FROM students 
WHERE (cohort_id = 1 OR cohort_id = 2 OR cohort_id = 3);


