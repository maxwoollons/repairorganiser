import express from 'express';
import repairController from './controllers/repair.js';
// import cors from "cors";
// import corsOptions from './corsOptions.js';
import proxy from 'express-http-proxy';



const app = express();
// app.use(cors(corsOptions));
app.use(express.json());


const port = 8000;

app.use('/api/repairs', repairController)
app.use('/', proxy('http://localhost:3000'));



app.listen(port, () => console.log(`server running on port: http://localhost:${port}`))
