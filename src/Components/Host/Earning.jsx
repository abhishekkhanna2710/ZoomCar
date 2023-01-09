import React from "react";

import "./Earning.css";



function Earning(){

    return <>
    <div>
       
        <div id="top"> 
            <h3>Zoomcar Host-India</h3>
            <div class="page-header__subtext page-header__subtext--header">Share few more details and move one step closer to EARNING up to ₹50,000 per month. Get up to 5000 bonus on successful sign-up to the program 🚘 💵 🥳</div>
        </div>
        
        <div id="form">
            <div class="fix-box">
                <p>Mobile Number</p>
                <div>+91 </div>
            </div>
            <div class="fix-box">
                <p>Email-Id</p>
                <div >

                </div>
            </div>
            <div>
                <p>Car Number *</p>
                <div>
                <input type="text" autoFocus required/>
                </div>
               
            </div>
            <div>
                <p>Car Name *</p>
                <input type="text" required/>
            </div>
            <div>
                <p>Car KM driven *</p>
                <input type="number" required />
            </div>
            <div  >
                <p>No. of Seats*</p>
              
                  <input type="number" required/>
                
            </div>
            <div id="submit">
                <button onClick={()=>alert("Resister Successfully")}>Submit</button>
            </div>
         </div>

        </div>

      

    


    </>

}


export default Earning;