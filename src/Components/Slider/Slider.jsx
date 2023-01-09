import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"

function Imageslider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    return (
        <div className='slidoMain'>
            <div className='slido'>
                <p>Check out our recent cars</p>
                <h1>Featured Vehicles</h1>
                <Slider {...settings}>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src="https://carena.bolvo.com/wp-content/uploads/2016/10/2014_volkswagen_xl_sport_concept_3-wide-1024x640.jpg" alt="" />
                                <h3>Audi R8 V10 PLUS</h3>
                                <p>$400,000</p>
                            </div>

                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src="https://carena.bolvo.com/wp-content/uploads/2016/10/lexus_rc_350_2015-wide-1024x640.jpg" alt="" />
                                <h3>Lamborghini Huracan LP610-4</h3>
                                <p>$460,000</p>
                            </div>

                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src="https://carena.bolvo.com/wp-content/uploads/2016/10/2014_wheelsandmore_ferrari_la_famiglia_fiwe-wide-1024x640.jpg" alt="" />
                                <h3>Mercedes-Benz C 220</h3>
                                <p>$550,000</p>
                            </div>

                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src="https://carena.bolvo.com/wp-content/uploads/2016/10/the_lamborghini_reventon_concept-wide-1024x640.jpg" alt="" />
                                <h3>Mercedes-Benz SLR Mclaren LP610-4</h3>
                                <p>$780,000</p>
                            </div>

                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src="https://carena.bolvo.com/wp-content/uploads/2016/10/lexus_rc_350_2015-wide-1024x640.jpg" alt="" />
                                <h3>2021 BMW X1</h3>
                                <p>$560,000</p>
                            </div>

                        </div>
                    </div>
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='card-image'>
                                <img src="https://carena.bolvo.com/wp-content/uploads/2016/10/2014_wheelsandmore_ferrari_la_famiglia_fiwe-wide-1024x640.jpg" alt="" />
                                <h3>Audi Prestige 2019</h3>
                                <p>$660,000</p>
                            </div>

                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Imageslider