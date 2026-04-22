import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const dbConnection = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING,{
            serverSelectionTimeoutMS:5000,
            family:4
        })
        console.log("DataBase is connected");
        return connection;
        
    } catch (error) {
        console.log("DataBase is not connected", error);
        
    }
}

export default dbConnection;