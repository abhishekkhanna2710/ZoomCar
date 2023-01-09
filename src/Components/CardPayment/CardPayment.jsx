import React from 'react'
import "./CardPayment.css"
import { Link } from 'react-router-dom'

function CardPayment() {
    var data = JSON.parse(localStorage.getItem("data"))
    var startDate = localStorage.getItem("startDate")
    var endDate = localStorage.getItem("endDate")
    var myCity = localStorage.getItem("myCity")

    var TotalPrice = localStorage.getItem("newTotalPriceAfterProtection");


    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "23px" }}>Booking Details</h2>
            <div className='container-fluid'>
                <div className='CardPay'>
                    <div className='UpperBar'>
                        <div>
                            <h4>{data.name}</h4>
                            <div className='carConto'>
                                <p><i class="fa-solid fa-check"></i>{data.trans}</p>
                                <p><i class="fa-solid fa-gas-pump"></i>{data.fuel}</p>
                            </div>
                        </div>

                        <div className='ImagoCar'>
                            <img src={data.image_url} alt="Car" />
                        </div>
                    </div>

                    <div className="middlebar">
                        <p>  <i class="fa-regular fa-calendar-days"></i> {startDate}</p>
                        <h5><i class="fa-solid fa-location-dot"></i>{myCity}</h5>

                        <p>  <i class="fa-regular fa-calendar-days"></i> {endDate}</p>
                        <h5><i class="fa-solid fa-location-dot"></i>{myCity}</h5>
                    </div>

                    <div className="barBox">
                        <p>Free cancellation up to 28 January 2023, 02:30 AM</p>
                    </div>


                    <hr />
                    <div className="endBar">
                        <p>Final Fare</p>
                        <p> $ <span>{TotalPrice}</span></p>
                    </div>



                </div>




                <div className="box">
                    <a className='button' href="#popup1">
                        <button>PAY</button>
                    </a>
                </div>



                <div className='brtun'>

                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <div className='Congrats'>
                                <h2>Congratulations</h2>
                                <img style={{ width: "40px" }} src="https://cdn-icons-png.flaticon.com/128/9281/9281540.png" alt="" />
                            </div>
                            <a className="close" href="#">&times;</a>
                            <div className="content">
                                You Have Sucessfully Booked Your Car

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
            </div>
        </>
    )
}
export default CardPayment