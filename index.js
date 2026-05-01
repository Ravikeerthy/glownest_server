import dns from "node:dns";
// dns.setServers(["1.1.1.1", "8.8.8.8"]);

dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import dbConnection from "./database/dbConfig.js";
import productRoutes from "./routers/productRoutes.js"
import authRoutes from "./routers/authRoutes.js"
import orderRoutes from "./routers/orderRoutes.js"
import paymentRoutes from "./routers/paymentRoutes.js"

dotenv.config()
dbConnection();

const app = express()

app.use(cors(
    {
        origin:[
            "http://localhost:5173",
            "https://glownest-e-com.netlify.app"
        ],
        credentials:true,
    }
))
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.status(200).json({message:"Glownest API is running..."})
});

app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/payments", paymentRoutes)

app.listen(PORT, ()=>{
   console.log(`App is lisenting from the ${PORT}`);
   
})