import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function Booking() {
    const [services,setServices]= useState([])
    const [book, setBook]= useState("")
    const[sucessMessage,setSucessmessage]= useState("")
    useEffect(()=>{
        axios.get("http://localhost:4000/api/services")
        .then(res=>{
            setServices(res.data.services)
            // console.log(res.data.services);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])
    const handleBooking  = ()=>{
        axios.post("http://localhost:4000/api/bookings",{booking:book})
        .then((res)=>{
            console.log(res.data);
            setSucessmessage(res.data.message)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
  return (
    <div>
        <h1> services Availble</h1>
        {services.map((element,index)=>(
            <div key={index}>
            <h6 ><b>{element .service}</b></h6>
            <span>{element.about}</span>
            </div>
        ))}
        <br/>
        <br/>
        <br/>
            <h2> book for service</h2>
            <input type='text'value={book} onChange={(e)=>setBook(e.target.value)}/>
            <button onClick={()=>handleBooking()} >book</button>
            <br/>
            {sucessMessage}
    </div>
  )
}
