import { db_conn } from "../database.js";

export function allRepairs(){
    console.log("all orders")
    return db_conn.query("SELECT * FROM repair.repairs;")
}




