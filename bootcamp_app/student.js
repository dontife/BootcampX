const args = process.argv.slice(2);
console.log(args);
args[1] = Number(args[1]);
console.log(args);
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

 pool.query(`
   SELECT students.id as student_id, students.name as student_name, cohorts.name as cohort_name
   FROM students
   JOIN cohorts ON cohorts.id = cohort_id
   WHERE cohorts.name LIKE '%${args[0]}%'
   LIMIT ${args[1]};
 `)
   .then(res => {
     res.rows.forEach(user => {
       console.log(`${user.student_name} has an id of ${user.student_id} and was in the ${user.cohort_name} cohort`);    
     })
     // console.log(res.rows) 
   })
   .catch(err => console.error('query error', err.stack));


//   pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// });