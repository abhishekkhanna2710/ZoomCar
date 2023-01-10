import logo from "../Media/logo.png";
import earnlogo from "../Media/earnlogo.png";
import { useState } from "react";

import { Details, Chevrolet, Fiat, Fort, Honda } from "./Details";
import { Sai, Vanshika, Rahul } from "./video";
import HomeNavbar from "../Components-Navbar/HostNavbar";
import Footer from "../Footer/Footer";

import "./Host.css";
import "./responsive.css";

import file from "../Media/file.png";
import car from "../Media/car.png";
import earn from "../Media/earn.jpeg";
import carcoverage from "../Media/carcoverage.jpeg";
import pocket from "../Media/pocket.jpeg";
import flexibility from "../Media/flexibility.jpeg";
import ReactDOM from 'react-dom';




let arr = [];
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner4.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner-1.png");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner2.jpg");
arr.push("https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/host-web-banner3.jpg");



let i = 1;
function imageAdd() {
    const rootElement = ReactDOM.createRoot(document.getElementById('box2'));
    rootElement.render(
        <>
            <img id="image" src={arr[i]} alt="" />
            <div id="transperent-box">
                <div id="first-box">
                    <p class="sharing_is_earning">Sharing is Earning</p>
                    <p>Share your car and earn upto ₹50000</p>
                    <button id="button">START EARNING</button>
                </div>
                <div id="empty-box">
                    <h1>jdckdcn</h1>
                    <h3>jncjkdcn</h3>

                </div>
            </div>
        </>
    );
    i++;
    if (i === 3) {
        i = 0;
    }

}

setInterval(imageAdd, 5000);

function Host() {

    const [detailsArrow, setDetailsArrow] = useState("https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png");
    // const [i,set]=useState(0);
    const [value, setValue] = useState(15);
    const [total, setTotal] = useState(45000);
    const [video, setVideo] = useState(null);





    const [select, setSelect] = useState(<Chevrolet />)

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.value == "Chevrolet") {
            setSelect(<Chevrolet />);
            setTotal(45000)
        }
        else if (e.target.value == "Fiat") {
            setSelect(<Fiat />);
            setTotal(48000)
        }
        else if (e.target.value == "Fort") {
            setSelect(<Fort />)
            setTotal(51000)
        }
        else {
            setSelect(<Honda />)
            setTotal(60000)
        }

    }




    const handleArrow = () => {
        if (detailsArrow === "https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png") {
            setDetailsArrow("https://www.zoomcar.com/zap/subscribe/build/3c157e2ab203052562fc508f65ac5104.png");
        }
        else {
            setDetailsArrow("https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png");

        }
    }

    const handleVideo = () => {
        if (video == null) {

        }
        else {
            setVideo(null);
            document.getElementById("page").style.backgroundColor = "rgb(255, 255, 255)";
        }
    }







    return <>
        <div id="page" onClick={handleVideo}>
            <HomeNavbar />

            <div id="earning-container">
                <div id="box1">
                    <div class="box1" >
                        <p>How much could you earn by sharing your car?</p>
                        <div id="select">
                            <select name="" id="select1" onChange={handleChange}>

                                <option value="Chevrolet">Chevrolet</option>
                                <option value="Fiat">Fiat</option>
                                <option value="Fort">Fort</option>
                                <option value="Honda">Honda</option>

                            </select>

                            <select name="" id="select2">
                                {select}

                            </select>
                        </div>

                        <p>Sharing days :</p>
                        <div id="main">

                            <input type="range" min="0" max="30" step="1" value={value} onInput={(e) => { setValue(e.target.value) }}></input>
                            <p>{value} Days</p>
                            <div class="line" ></div>

                        </div>


                        <p class="font">Your monthly earning upto</p>

                        <div class="rupees">
                            <p>₹{value * (total / 30)}</p>
                        </div>


                    </div>
                    <div class="box2">
                        <div>
                            <img src={earnlogo} alt="" />
                        </div>
                        <div >
                            <div><p class="font">Earn Joining Bonus of Upto</p></div>

                            <div class="rupees" > <p>
                                ₹5000
                            </p>

                            </div>

                        </div>

                    </div>

                </div>
                <div id="box2">

                    <img id="image" src={arr[0]} alt="" />
                    <div id="transperent-box">
                        <div id="first-box">
                            <p class="sharing_is_earning">Sharing is Earning</p>
                            <p>Share your car and earn upto ₹50000</p>
                            <button id="button">START EARNING</button>
                        </div>

                        <div id="empty-box">
                            <h1>jdckdcn</h1>
                            <h3>jncjkdcn</h3>

                        </div>
                    </div>

                </div>
            </div>
            <div id="steps">
                <p>3 SIMPLE STEPS TO START SHARING AND EARNING</p>
                <hr />
                <div>

                    <div>
                        <div>
                            <img src={file} alt="" />

                        </div>
                        <p class="font">Tell us about yourself</p>
                        <p>Share your car details with us throuth this <a href="">form</a> and shedule a car inspection from our experts</p>

                    </div>
                    <div>
                        <div>
                            <img src={car} alt="" />
                        </div>
                        <p class="font">Setup for sharing</p>
                        <p>Signup on the app and provide your PAN, Bank and Address details and you are now ready to share your car</p>

                    </div>
                    <div>
                        <div>
                            <img id="earn" src={earn} alt="" />
                        </div>

                        <p class="font">Share and earn</p>
                        <p>Select the sharing dates for your car. Our experts will visit you to install the safty devices and you are ready to earn</p>

                    </div>




                </div>
            </div>
            <div id="whyShare">
                <div id="why"><p>Why share your car with us?</p></div>
                <div>
                    <img src={carcoverage} alt="" />


                    <p class="font">Major damage and repair coverage</p>


                    <p>We provide damage cover and handle repairs in case of damage during a booking</p>
                </div>
                <div>
                    <img src={pocket} alt="" />
                    <br />
                    <br />
                    <p class="font">Earning from home</p>


                    <p>Our hosts earn upto Rs.50000 per month along with added bounces for sharing their cars</p>
                </div>
                <div>
                    <img src={flexibility} alt="" />
                    <br />
                    <br />
                    <p class="font">Power of flexibility</p>


                    <p>Using our mobile app, you can share your convenience and shedule</p>
                </div>
                <div>
                    <img src={car} alt="" />
                    <br />
                    <br />
                    <p class="font">Safe, secured and smoot</p>


                    <p>We install safety and keyless entry devices to make sharing your car a safe, secured and smoooth process</p>
                </div>
            </div>
            <div>
                {video}
            </div>
            <div id="videos">
                <p>HEAR FROM OUR HOSTS</p>
                <div>
                    <div>
                        <div class="video">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/SaiKrishna.png"></img>
                        </div>
                        <div class="play" onClick={() => { setVideo(<Sai />); document.getElementById("page").style.backgroundColor = "#66666673"; document.getElementById("youtub-video").style.position = "fixed" }}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" class="host-testimonials-container-blocks-block-play-icon" />
                        </div>

                        <div class="subBox">
                            <p>Sai Krishna, Loan Officer, Hyderabad </p>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg" class="host-testimonials-container-blocks-block-description-image" />
                            <p class="font">Passive income for me</p>
                            <p>Around 10-15 % of the amount I receive goes to EMI, rest of the amount is a passive income for me</p>


                        </div>
                    </div>
                    <div>
                        <div class="video">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/Vanshika.png"></img>
                        </div>
                        <div class="play" onClick={() => { setVideo(<Vanshika />); document.getElementById("page").style.backgroundColor = "#66666673"; document.getElementById("youtub-video").style.position = "fixed" }}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" class="host-testimonials-container-blocks-block-play-icon" />
                        </div>

                        <div class="subBox">
                            <p>Vanshika, HR, Mumbai</p>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg" class="host-testimonials-container-blocks-block-description-image" />
                            <p class="font">Car is paying for itself</p>
                            <p>I am in love with this idea and enjoying my time with Zoomcar host. My car is paying for itself and that's great benefit</p>

                        </div>
                    </div>
                    <div>
                        <div class="video">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/testimonial/Rahul.png"></img>
                        </div>
                        <div class="play" onClick={() => { setVideo(<Rahul />); document.getElementById("page").style.backgroundColor = "#66666673"; document.getElementById("youtub-video").style.position = "fixed" }}>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/play.png" class="host-testimonials-container-blocks-block-play-icon" />
                        </div>

                        <div class="subBox">
                            <p>Rahul, Banglore</p>
                            <img src="https://doav52ie4cv60.cloudfront.net/images/quotes.svg" class="host-testimonials-container-blocks-block-description-image" />
                            <p class="font">Great Return n investment</p>
                            <p>Average I earn ₹20-26k per month, that's a great return on investment on my car </p>

                        </div>
                    </div>

                </div>
            </div>

            <div id="gift">
                <img src="https://doav52ie4cv60.cloudfront.net/in/host/share-your-car/images/ZH_referral_banner_app_02.jpg" alt="" />
            </div>
            <div id="questions">
                <p>STILL HAVE QUESTIONS?</p>
                <div>
                    <div>
                        <div class="question">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/renters-ico.svg" />
                            <p >Do I need to meet the guests of my car?</p>
                            <div class="host-questions-accordion-block-header-arrow-container"><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div class="question">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/earn-ico.svg" />
                            <p >How much will I earn?</p>
                            <div class="host-questions-accordion-block-header-arrow-container"><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div class="question">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/get-paid-ico.svg" />
                            <p >How will I get Paid?</p>
                            <div class="host-questions-accordion-block-header-arrow-container"><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div class="question">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/car-price-ico.svg" />
                            <p >How is the price of my car decided</p>
                            <div class="host-questions-accordion-block-header-arrow-container"><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div class="question">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/challans-ico.svg" />
                            <p >What happens if my car gets challans or traffic fines while my car is being shared?</p>
                            <div class="host-questions-accordion-block-header-arrow-container"><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div class="question">
                            <img src="https://doav52ie4cv60.cloudfront.net/images/setting-ico.svg" />
                            <p >Why are safety devices installed?</p>
                            <div class="host-questions-accordion-block-header-arrow-container"><img src="https://www.zoomcar.com/zap/subscribe/build/145dbdacf67ffb58dcc19159ad49e336.png" class="host-questions-accordion-block-header-arrow-container-image" /></div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div id="confused">

                <p>Still confused? </p>
                <p>We are here to help</p>
                <p>FAQs</p>

                <div id="bottom">

                    <img src="https://doav52ie4cv60.cloudfront.net/images/never-stop.svg" />

                </div>

            </div>
            <div id="More">
                <p>More about zoomcar host</p>
                <img src={detailsArrow} onClick={handleArrow} class="host-questions-accordion-block-header-arrow-container-image" />
                {/* <img src="https://www.zoomcar.com/zap/subscribe/build/3c157e2ab203052562fc508f65ac5104.png" class="host-questions-accordion-block-header-arrow-container-image"> */}
            </div>
            <div>
                {detailsArrow === "https://www.zoomcar.com/zap/subscribe/build/3c157e2ab203052562fc508f65ac5104.png" ? <Details style={{}} /> : null}
            </div>

        </div>
        <Footer />



    </>
}

export default Host