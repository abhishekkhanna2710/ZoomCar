import React, { useEffect } from 'react'
import Date from '../Date/Date';
import "./Car_products.css";
import { Link } from 'react-router-dom';





function Car_products({ carData, data }) {
    // const min = 1;
    // const max = 100;
    // const rand = Math.random() * (max - min) + min;
    // const res = parseFloat(rand.toFixed(1))
    const storeData = (e) => {
        localStorage.setItem("data", JSON.stringify(e));
        console.log(e)
    }

    useEffect(() => {


    }, [])

    return (


        <div>

     
            <Date />

            {
                carData.length == 0 ? data.map(e => {
                    return (

                        <div className='container-fluid mainCars'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='carImage col-md-6'>
                                        <img src={e.image_url} alt="cars" />
                                    </div>

                                    <div className='carContent col-md-6'>
                                        <h1>{e.name}</h1>
                                        <div className='flex'>
                                            <p>{e.trans} .</p>
                                            <p>{e.fuel} .</p>
                                            <p>{e.seat} seats</p>
                                        </div>

                                        <div className='rating'>
                                            <i class="fa-solid fa-star"></i>
                                            <p>{e.rating}. </p>
                                            <p>{e.Mileage} Kms Driven</p>

                                        </div>

                                        <p><i class="fa-sharp fa-solid fa-car-side"></i> Terminal Delivery Available</p>
                                    </div>
                                </div>

                                <div className='col-md-4 pricetag'>
                                    {/* <img src={e.image_url} alt="" /> */}
                                    <h2>$ {e.price}</h2>
                                    <p>$ 5789</p>
                                    <div className='buttonstyle'>

                                        {
                                            <Link to="/CheckOut">
                                                <button onClick={() => storeData(e)}> Book Now

                                                </button>

                                            </Link>
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }) : carData.map((e, i) => {
                    return (


                        <div className='container-fluid mainCars'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <div className='carImage col-md-6'>
                                        <img src={e.image_url} alt="cars" />
                                    </div>

                                    <div className='carContent col-md-6'>
                                        <h1>{e.name}</h1>
                                        <div className='flex'>
                                            <p>{e.trans} .</p>
                                            <p>{e.fuel} .</p>
                                            <p>{e.seat} seats</p>
                                        </div>

                                        <div className='rating'>
                                            <i class="fa-solid fa-star"></i>
                                            <p>{e.rating}. </p>
                                            <p>{e.Mileage} Kms Driven</p>

                                        </div>

                                        <p><i class="fa-sharp fa-solid fa-car-side"></i> Terminal Delivery Available</p>
                                    </div>
                                </div>

                                <div className='col-md-4 pricetag'>
                                    {/* <img src={e.image_url} alt="" /> */}
                                    <h2>$ {e.price}</h2>
                                    <p>$ 5789</p>
                                    <div className='buttonstyle'>
                                        {
                                            <Link to="/CheckOut">
                                                <button onClick={() => storeData(e)}> Book Now

                                                </button>

                                            </Link>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Car_products