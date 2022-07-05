
-- Total assignments per day where total assignments 
-- is greater or equals to 10

SELECT day, count (*) as total_assignments  
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;

