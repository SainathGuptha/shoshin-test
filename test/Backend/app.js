const express= require("express")
const app= express()

const service= [{service:"cabooking",about:"this  is car booking we do wash oil change end to end seice"}]
const booking= []
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hi")
})
app.get("/api/services",(req,res)=>{
res.status(200).json({
    services: service
})
})
app.post("/api/bookings",(req,res)=>{
    booking.push(req.body.booking)
    console.log(req.body.booking);
    res.status(200).json({
        message:   `booking sucessful ${req.body.booking}`
    })
})
app.listen(4000,()=>console.log("server running art port 4000"))