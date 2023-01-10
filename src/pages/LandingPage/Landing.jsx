import React from 'react'
import landingStyle from "./Loading.module.css"
import Carousel from '../Carousel/Carousel'



function Landing() {
    return (
        <div>


            <Carousel />

            <div className={landingStyle.miniAbout}>
                <div div className={landingStyle.minibox}>
                    <i class="fa-sharp fa-solid fa-car"></i>
                    <h3>Largest Dealership of Cars</h3>
                    <p>MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
                </div>
                <div className={landingStyle.minibox2}>
                    <i class="fa-solid fa-dharmachakra"></i>
                    <h3>We Offers Lower Cars Prices</h3>
                    <p>MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
                </div>
                <div className={landingStyle.minibox}>
                    <i class="fa-sharp fa-solid fa-wrench"></i>
                    <h3>Multipoint Safety Checks</h3>
                    <p>MotorLand is nisi aliquip ex consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat.</p>
                </div>
            </div>



            {/* About Section */}
            <div className={landingStyle.aboutBig}>
                <div className={landingStyle.aboutUs}>

                    <h1>About <span>Us</span></h1>
                    <div className={landingStyle.about}>
                        <div className={landingStyle.leftContent}>
                            <p className={landingStyle.para}>Welcome to our store</p>
                            <h2>ZOOM CAR</h2>

                            <br />
                            <p>Zoomcar is India’s largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.</p>
                            <br />
                            <div className={landingStyle.button_borders}>
                                <button className={landingStyle.primary_button}> READ MORE
                                </button>
                            </div>

                        </div>


                        <div className={landingStyle.carImage}>
                            <img src="https://html.merku.love/rotors/assets/images/blog/img_07.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default Landing