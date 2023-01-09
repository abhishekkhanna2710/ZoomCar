import React from 'react'
import "./Carousel.css"
import { Link } from 'react-router-dom';



function Carousel() {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h4>WE HAVE EVERYTHING </h4>
                    <h1>YOUR CAR NEEDS</h1>

                </div>
                <div>

                    <Link to="/BookingCars">
                        <button type="button">Book Now <i class="fa-solid fa-arrow-right"></i></button>
                    </Link>


                </div>

            </div>
        </div >
    )
}

export default Carousel