import { connection } from '../../utils/db';
import mysql from 'mysql2/promise';

export const POST = async (request, response) => {
    const { username, codeLang, input, srcCode } = request.body;
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : undefined,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
      });
    try {
        const [result] = await db.query(
            'INSERT INTO user (username, code_lang, stdin, src_code) VALUES (?, ?, ?, ?)',
            [username, codeLang, input, srcCode]
        );
        console.log('Inserted ID:', result);
        response.status(200).json({ message: 'Form submitted successfully' });
        return response;
    } catch (error) {
        // Handle error
        console.error(error);
        response.status(500).json({ message: 'Internal server error' });
        return response;
    }finally{
      await db.end();
    }
};
