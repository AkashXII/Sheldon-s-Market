import mysql from 'mysql2/promise'

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'WJ28@krhps',
  database: 'harvest_barn',
})

export default db