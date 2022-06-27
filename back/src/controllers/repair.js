import express from 'express';
import { allRepairs } from '../models/repair.js';

const repairController = express.Router()

repairController.get('/all',(req,res)=>{
    allRepairs().then(data=>{
        res.status(200).json(data[0])
        console.log(data[0])
    }
    ).catch(err=>{
        res.status(500).json(err)
    }
    )
    

})


export default repairController


// http://localhost:8000/api/repairs/all