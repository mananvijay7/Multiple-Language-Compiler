import mysql from 'mysql2/promise';

export const connection = async function() {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : undefined,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
    });
    
    console.log('Connected to MySQL server');
    await db.end();
    
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
}
