import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import dbConnection from "./database/dbConfig.js";
import productRoutes from "./routers/productRoutes.js"
import authRoutes from "./routers/authRoutes.js"

dotenv.config()
dbConnection();

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.status(200).json({message:"Glownest API is running..."})
});

app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)


app.listen(PORT, ()=>{
   console.log(`App is lisenting from the ${PORT}`);
   
})