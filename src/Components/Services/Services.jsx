import React from 'react'
import ServiceStyle from "./Services.module.css"

function Services() {
    return (
        <div className={ServiceStyle.mainservices}>
           
            <h1>What We Offer</h1>
            <p>Get here your Dream car, what you want</p>
            <div className={ServiceStyle.services}>
                <div>
                    <i class="fa-solid fa-car"></i>
                    <h3>Enjoy Unlimited KM's</h3>
                    <p>Easy access & monitor driving Score, calculated on the basis of different driving parameters</p>
                </div>
                <div>
                    <i class="fa-solid fa-car-battery"></i>
                    <h3>Zero Security Deposit</h3>
                    <p>Easy access & monitor driving Score, calculated on the basis of different driving parameters</p>
                </div>
                <div>
                    <i class="fa-brands fa-deezer"></i>
                    <h3>Zero Toll Charges</h3>
                    <p>Easy access & monitor driving Score, calculated on the basis of different driving parameters</p>
                </div>
                <div>
                    <i class="fa-brands fa-free-code-camp"></i>
                    <h3>Reschedule for FREE</h3>
                    <p>Easy access & monitor driving Score, calculated on the basis of different driving parameters</p>
                </div>

            </div>


        </div>
    )
}

export default Services