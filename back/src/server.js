import express from 'express';
import repairController from './controllers/repair.js';
import session from 'express-session';
// import cors from "cors";
// import corsOptions from './corsOptions.js';
import proxy from 'express-http-proxy';
import loginController from './controllers/login.js';



const app = express();
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
    }));
app.use(express.json());


const port = 8000;

app.use('/api/repairs', repairController)
app.use('/api/login', loginController)
app.use('/', proxy('http://localhost:4173/'));




app.listen(port, () => console.log(`server running on port: http://localhost:${port}`))
