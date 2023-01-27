import express from 'express';
import connection from './databse/db.js';


const app = express();
const PORT = 3000;


app.listen(PORT,()=> console.log(`server started sucessfully on port ${PORT}`))
connection();