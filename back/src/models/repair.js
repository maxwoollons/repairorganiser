import { db_conn } from "../database.js";

export function allRepairs(){
    console.log("all orders")
    return db_conn.query("SELECT *,DATE_FORMAT(requiredby,'%d/%m/%y') as Date,DATE_FORMAT(requiredby,'%y-%m-%d') as CalDate FROM repair.repairs;")
}




