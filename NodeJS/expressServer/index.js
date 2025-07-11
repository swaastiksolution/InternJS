//1. import krna
import express from "express";

//2 initialize server
const app = express();

app.get("/",(req, res)=>{
    console.log(req.query);
    const {name} = req.query;
    return res.status(200).send(`<h1>hi there, ${name}</h1>`)
})




//3. listening and assigning a port
app.listen(5000, () => {
    console.log("hi from my server http://localhost:5000 ");
})
