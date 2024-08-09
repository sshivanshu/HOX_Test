import { createPool } from 'mysql2/promise';
import mysql from "mysql2";

 export async function connect() {
    const connection = await createPool({ 
        host: "localhost", 
        user: "root", 
        password: "shiva1234#", 
        database: "HOX"
      }); 

    return connection;
}