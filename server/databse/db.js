import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

export const connection = () => {
    
    mongoose.set('strictQuery', false);

    const url= `mongodb://${USERNAME}:${PASSWORD}@todolist.v0uoffe.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(url ,{ useNewUrlParser: true });
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