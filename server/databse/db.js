import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI=process.env.DB_URI;

export const connection = () => {
    
    mongoose.set('strictQuery', false);

    mongoose.connect(URI ,{ useNewUrlParser: true });
    mongoose.connection.on('connected',()=>{
        console.log('Database connected Sucessfully');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error',(e)=>{
        console.log('Error while connecting to the database',e.message);
    })
}
export default connection;