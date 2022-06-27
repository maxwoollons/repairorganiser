import mysql from "mysql2/promise";

export const db_conn = mysql.createPool({
    host: "localhost",          
    user: "root",
    password: "38?a5W.9",
    port: "3306",
    database: "repair"
    
});


