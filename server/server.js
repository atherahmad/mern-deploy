import express from "express";
import "dotenv/config";
import cors from "cors"

import path from "path";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 5000;

// it will get the name of my current running file that is server.js

const __filename = fileURLToPath(import.meta.url);

// server directory
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "../client/build")))
app.use(cors());

app.get("/getmovies", (req, res)=>{
    const movies = ["movie1", "movie2", "movie3"]
    res.json({movies})
})

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client", "build", "index.html" ))
})
app.listen(PORT, ()=>{
    console.log(`Server listening at port ${PORT}`)
})