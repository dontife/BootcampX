const args = process.argv.slice(2);

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT  DISTINCT teachers.name as teacher_name, cohorts.name as name
  FROM assistance_requests
  JOIN teachers ON  teacher_id = teachers.id
  JOIN students ON student_id = students.id
  JOIN cohorts ON cohort_id = cohorts.id
  WHERE cohorts.name LIKE '%${args[0]}%'
  ORDER BY name;
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} : ${user.teacher_name}`);    
  })
  // console.log(res.rows) 
})
.catch(err => console.error('query error', err.stack));
