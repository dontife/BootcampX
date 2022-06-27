
-- List of gradaute students without linked Github account
SELECT name, email, phone 
FROM students 
WHERE end_date IS NOT NULL 
AND github IS NULL;