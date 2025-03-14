const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hey, I am Abishek");
})

app.listen(1000,()=>{
    console.log("Server is running on http://localhost:1000");
});



