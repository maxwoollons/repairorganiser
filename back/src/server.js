import express from 'express';
import repairController from './controllers/repair.js';
import cors from "cors";
import corsOptions from './corsOptions.js';


const app = express();
app.use(cors(corsOptions));
app.use(express.json());
const port = 8000;

app.use('/api/repairs', repairController)


app.listen(port, () => console.log(`server running on port: http://localhost:${port}`))
