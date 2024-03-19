import mysql from 'mysql2/promise';
import { NextResponse } from "next/server";

export const POST = async (req) => {
    let db;
    try {
      //console.log(req.body.username);
      const { username, preferred_language, standard_input, source_code } = await req.json();
      console.log(username + " " + preferred_language + " " + standard_input + " " + source_code);
      // Check if username is present
      if (!username) {
        return NextResponse.json({ error: 'Username is required' });
      }

        db = await mysql.createConnection({
        host: 'Manans-MacBook-Air.local',
        port: 3306,
        database: 'coding_platform',
        user: 'root',
        password: 'qwerty1234A!'
      });

      const [result] = await db.query(
        'INSERT INTO users (username, preferred_language, standard_input, source_code) VALUES (?, ?, ?, ?)',
        [username, preferred_language, standard_input, source_code]
      );

      console.log('Inserted ID:', result);
      return NextResponse.json({ error: 'Data inserted successfully' });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Internal server error' });;
      //.status(500).json({ error: 'Internal server error' });
    } finally {
      if(db){
        await db.end(); // Ensure to close the database connection
      }
    }
};
