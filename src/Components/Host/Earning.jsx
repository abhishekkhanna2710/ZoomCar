// import e from "express";
import React, { useEffect, useState } from "react";
import HomeNavbar from "../Components-Navbar/HomeNavbar"
import Footer from "../Footer/Footer";
import "../CardPayment/CardPayment.css"

import styles from "./Earning.module.css";
import { Link } from "react-router-dom";

function Earning(){
    const [email ,setEmail]=useState("");
    const [name ,setName]=useState("");
    const [fuel ,setFuel]=useState("");
    const [seat,setSeats]=useState(0);
    const [days, setDays]=useState(0);
    const [url,setURL]=useState("");
    useEffect(()=>{
        var Data=JSON.parse(localStorage.getItem("loggedInUser"))||{};
        setEmail(Data.email);

    })
    useEffect(()=>{
        

        fetch(`https://car-api3-0.onrender.com/carData?name=${name}`)
        .then((res)=>{
            return res.json();
        })
        .then((jsonData)=>{
            console.log(jsonData[0].image_url)
            setURL(jsonData[0].image_url);
      
        })


    })
    
   

    const postData=(e)=>{
        
      e.preventDefault();
       


         let data={
              
             "image_url":url,
    "name": name,
    "price": "2580",
    "trans": "Manual",
    "fuel": fuel,
    "seat": seat,
    "Mileage":days,
    "rating": 0
        
          }

        fetch(`https://car-api3-0.onrender.com/carData`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)

        })
        if(name.length>0 && fuel.length>0 && seat>0 && days>0)
        {
        document.getElementById("popup1").style.visibility="visible";
        document.getElementById("popup1").style.opacity="1";
        }
        else
        {
            alert("Please Enter Required Field");
        }

    }
    
    const close=()=>{
        document.getElementById("popup1").style.visibility="hidden";
        document.getElementById("popup1").style.opacity="0";

    }

    return <>
    <div>
       <HomeNavbar/>
        <div className={styles.top}> 
            <h3>Zoomcar Host-India</h3>
            <div >Share few more details and move one step closer to EARNING up to ₹50,000 per month. Get up to 5000 bonus on successful sign-up to the program 🚘 💵 🥳</div>
        </div>
          
        
        <form className={styles.form}>
            <div>
            <p>Email-Id *</p>
            <input type="text" className={styles.fixbox} placeholder={email} />

            </div>
           
            <div>
            <p>Car Name *</p>
                <div >
                    <select name=""  className={styles.select} onChange={(e)=>setName(e.target.value)} required>
                        <option value="">Select Name</option>
                        <option value="Hyundai I20">Hyundai I20</option>
                        <option value="Toyota Glanza">Toyota Glanza</option>
                        <option value="Honda Amaze 1.2V">Honda Amaze 1.2V</option>
                        <option value="Tata Tiago">Tata Tiago</option>
                        <option value="Renault Kwid">Renault Kwid</option>
                    </select>

                </div>
               
            </div>
            <div>
                <p>Fuel *</p>
                <div>
                <select name="" id="" className={styles.select} onChange={(e)=>{setFuel(e.target.value)}}required>
                    <option value="">Select Fuel </option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                </select>
                </div>
               
            </div>
           
            <div  >
                  <p>No. of Seats*</p>
              
                  <input type="number" onChange={(e)=>setSeats(e.target.value)} required/>
                
            </div>
            
            <div  >
                  <p>Sharing Days*</p>
              
                  <input type="number"  onChange={(e)=>setDays(e.target.value)}  required/>
                
            </div>
            

            <div  className={styles.submit}>
        
                {/* <input type="submit" onClick={postData}/> */}
                <input  onClick={postData} type="submit" />
            
               
            </div>
         </form>
         <Footer/>

        </div>

      
        <div className='brtun'>

<div  id="popup1" className="overlay">
    <div className="popup">
        <div className='Congrats'>
            <h2>Congratulations</h2>
            <img style={{ width: "40px" }} src="https://cdn-icons-png.flaticon.com/128/9281/9281540.png" alt="" />
        </div>
        <a className="close" onClick={close} href="">&times;</a>
        <div className="content">
            You Have Sucessfully Registered Your Car

        </div>
        <br />
        {

            <Link to="/">
                <button>Proceed</button>
            </Link>
        }
    </div>
</div>
</div>
    


    </>

}


export default Earning;