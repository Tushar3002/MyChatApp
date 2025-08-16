import express from "express";
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); //to parse the upcoming request with json payloads from req.body

app.use("/api/auth",authRoutes)

// app.get("/",(req,res)=>{
//     res.send("hello s")
// })


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server Running on server ${PORT}` )
})