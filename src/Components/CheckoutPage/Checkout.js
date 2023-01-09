import "./CheckOut.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeNavbar from "../Components-Navbar/HomeNavbar";

function Checkout() {

    const [totalPrice, setTotalPrice] = useState(0);
    const [protectionType, setProtectionType] = useState("basic");
    const navi = useNavigate();

    useEffect(() => {
        var data = JSON.parse(localStorage.getItem("data")) || { "Mileage": "60", "fuel": "Petrol", "image_url": "dfd", "name": "Swift", "price": "2580", "rating": "4.34", "trans": "Manual" };
        var startDate = localStorage.getItem("startDate") || "Jan 20";
        var endDate = localStorage.getItem("endDate") || "Jan 23";
        var myCity = localStorage.getItem("myCity") || "America";
        var bookingDetails = JSON.parse(localStorage.getItem("bookingDetails")) || {
            "carName": "Maruti Swift", "transmission": "Automatic", "fuelVariant": "Diesel", "imageUrl": "https://zoomcar-assets.zoomcar.com/photographs/original/08304423b968f88cf094fe53c17aa28100f4b38c.png?1663876373",
            "pickUpDate": "Jan 20", "pickUpTime": "08:30 AM", "pickUpPlace": "Terminal 3", "dropDate": "Jan 23", "dropTime": "09:30 AM", "dropPlace": "Terminal 3",
            "carRating": "4.3", "totalRatings": "341", "totalMileage": "10200", "totalPrice": "3230"
        };
        console.log("");
        document.getElementById("carNameH5Tag").innerText = data.name + " " + data.trans;
        document.getElementById("carTransmissionAndFuelVariantPTag").innerText = data.trans + " " + data.fuel;
        document.getElementById("carImage").src = data.image_url;
        document.getElementById("pickUpDataAndTimeH4Tag").innerText = startDate;
        document.getElementById("pickUpPlacePTag").innerText = myCity;
        document.getElementById("dropDataAndTimeH4Tag").innerText = endDate;
        document.getElementById("dropPlacePTag").innerText = myCity;
        document.getElementById("ratingAndKMSDrivenPTag").innerText = data.rating + " " + data.Mileage + "Kms driven";
        document.getElementById("freeCancellationPTag").innerText = "Free cancellation up to " + startDate + ".";
        setTotalPrice(Number(data.price) + 196);
        localStorage.setItem("newTotalPriceAfterProtection", Number(data.price) + 196);
        document.getElementById("basicTypeProtectionRadioButton").checked = "checked";
    }, []);

    let setProtectionTypeToBasic = () => {
        if (protectionType === "basic") {

        } else if (protectionType === "standard") {
            setProtectionType("basic");
            let a = totalPrice - 196;
            setTotalPrice(a);
            localStorage.setItem("newTotalPriceAfterProtection", a);
        } else {
            setProtectionType("basic");
            let a = totalPrice - 261;
            setTotalPrice(a);
            localStorage.setItem("newTotalPriceAfterProtection", a);
        }
    }

    let setProtectionTypeToStandard = () => {
        if (protectionType === "basic") {
            setProtectionType("standard");
            let a = totalPrice + 196;
            setTotalPrice(a);
            localStorage.setItem("newTotalPriceAfterProtection", a);
        } else if (protectionType === "standard") {

        } else {
            setProtectionType("standard");
            let a = totalPrice - 65;
            setTotalPrice(a);
            localStorage.setItem("newTotalPriceAfterProtection", a);
        }
    }

    let backTrack = () => {
        navi("/BookingCars");
    }

    let setProtectionTypeToPeaceOfMind = () => {
        if (protectionType === "basic") {
            setProtectionType("peaceOfMind");
            let a = totalPrice + 261;
            setTotalPrice(a);
            localStorage.setItem("newTotalPriceAfterProtection", a);
        } else if (protectionType === "standard") {
            setProtectionType("peaceOfMind");
            let a = totalPrice + 65;
            setTotalPrice(a);
            localStorage.setItem("newTotalPriceAfterProtection", a);
        } else {

        }
    }

    let changePosition = () => {
        document.getElementById("carImageLoading").style.left = "100vw";
    }

    let goToPaymentPage = () => {
        document.getElementById("carImageLoading").style.left = "100vw";
        setTimeout(() => {
            navi("/Payment");
        }, 2000);
    }


    return <div id="checkoutParentDiv">
        <HomeNavbar />
        <div id="upperGoBackIconParentDiv">

            <svg onClick={backTrack} id="goBackIcon" viewBox="0 0 448 512"> <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
        </div>

        <div id="divNextToIconDiv">

            <div id="carDetailsDiv">
                <div id="carDetailsTextStuffDiv">
                    <h3 id="carNameH5Tag">Kwid MT (Petrol)</h3>
                    <p id="carTransmissionAndFuelVariantPTag">Manual Petrol</p>
                </div>

                <div id="carDetailsImageDiv">
                    <img id="carImage" src="https://zoomcar-assets.zoomcar.com/photographs/original/5d9078c7423169ed133f300b0d759b20ee488ab6.png?1663875987" />
                </div>
            </div>

            <div id="bookingFeaturesDiv">

                <div id="pickUpDetailsDiv">
                    <div id="pickUpCircleDotDiv">
                        <svg id="pickUpCircleDotIcon" viewBox="0 0 512 512"> <path d="M160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256C352 309 309 352 256 352C202.1 352 160 309 160 256zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
                    </div>

                    <div id="pickUpTimeAndPlaceDiv">
                        <h4 id="pickUpDataAndTimeH4Tag"> 18 Jan, 08:30 AM</h4>
                        <p id="pickUpPlacePTag">Bijwasan</p>
                    </div>
                </div>



                <div id="dropDetailsDiv">
                    <div id="dropCircleDotDiv">
                        <svg id="dropCircleDotIcons" viewBox="0 0 512 512"> <path d="M328 160h-144C170.8 160 160 170.8 160 184v144C160 341.2 170.8 352 184 352h144c13.2 0 24-10.8 24-24v-144C352 170.8 341.2 160 328 160zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" /></svg>
                    </div>

                    <div id="dropTimeAndPlaceDiv">
                        <h4 id="dropDataAndTimeH4Tag"> 20 Jan, 08:30 AM</h4>
                        <p id="dropPlacePTag">Bijwasan</p>
                    </div>
                </div>

                <div id="unlimitedKMSWithoutFuelDiv">
                    <img id="fuelPumpImage" src="https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852" />
                    <p id="unlimitedKMSWithoutFuelPTag">Unlimited Kms without Fuel</p>
                </div>

                <div id="ratingAndKMSDrivenDiv">
                    <img id="starImage" src="https://zoomcar-assets.zoomcar.com/images/original/b04593cd90f850d14ed46ed739b0371457ef6834.png?1633947533" />
                    <p id="ratingAndKMSDrivenPTag">5.0 (7) · 10,907 kms driven</p>
                </div>

                <div id="freeCancellationDiv">
                    <p id="freeCancellationPTag">Free cancellation up to 18 January 2023, 02:30 AM</p>
                </div>

            </div>

            <div id="tripProtectionPackageDiv">

                <div id="tripProtectionPackageTextDiv">
                    <p id="tripProtectionPackageTextPTag">TRIP PROTECTION PACKAGE</p>
                </div>

                <div id="tripProtectionPackageOptionsDiv">

                    <div class="protectionOneTypeDiv">

                        <div class="protectionOneTypeSubDivToKeepItOnLeft">

                            <div class="typeImageDiv">
                                <img class="typeImage" src="https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237" />
                            </div>

                            <div class="typeNamePriceDiv">
                                <h4 class="typeNameH4Tag">Basic (₹196)</h4>
                                <p class="typeDescriptionPTag">You pay up to INR 3499 in case of any damage</p>
                            </div>

                        </div>

                        <div class="typeRadioButtonDiv">
                            <input onClick={setProtectionTypeToBasic} name="protectionType" class="protectionRadioButton" id="basicTypeProtectionRadioButton" type="radio" />
                        </div>

                    </div>

                    <div class="protectionOneTypeDiv">

                        <div class="protectionOneTypeSubDivToKeepItOnLeft">

                            <div class="typeImageDiv">
                                <img class="typeImage" src="https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237" />
                            </div>

                            <div class="typeNamePriceDiv">
                                <h4 class="typeNameH4Tag">Standard (₹392)</h4>
                                <p class="typeDescriptionPTag">You pay up to INR 999 in case of any damage</p>
                            </div>

                        </div>

                        <div class="typeRadioButtonDiv">
                            <input onClick={setProtectionTypeToStandard} name="protectionType" class="protectionRadioButton" id="standardTypeProtectionRadioButton" type="radio" />
                        </div>

                    </div>

                    <div class="protectionOneTypeDiv">

                        <div class="protectionOneTypeSubDivToKeepItOnLeft">

                            <div class="typeImageDiv">
                                <img class="typeImage" src="https://zoomcar-assets.zoomcar.com/images/original/f6b01d4ca15bc999a8a0bbe2bb64710cf71f9b75.png?1633967237" />
                            </div>

                            <div class="typeNamePriceDiv">
                                <h4 class="typeNameH4Tag">Peace of Mind (₹457)</h4>
                                <p class="typeDescriptionPTag">You pay up to INR 99 in case of any damage</p>
                            </div>

                        </div>

                        <div class="typeRadioButtonDiv">
                            <input onClick={setProtectionTypeToPeaceOfMind} name="protectionType" class="protectionRadioButton" id="peaceOfMindTypeProtectionRadioButton" type="radio" />
                        </div>

                    </div>


                </div>

            </div>


            <div id="howTripProtectionWorksDiv">
                <p style={{ "fontSize": "16px", "textAlign": "left", "marginTop": "0px", "marginBottom": "0px" }}>How trip protection works ?</p>
                <p style={{ "fontSize": "13px", "textAlign": "left", "marginTop": "0px", "marginBottom": "0px" }}>:- Zoomcar will assist in damage repair costs up to the amount as per the maximum deductible limit. • Does not cover any third-party liability or any intentional damage or damage that occurred due to intoxication or high speed, rash, or negligent driving. • Please read Zoomcar policy to know more.</p>
            </div>

            <div id="keepInMindDiv">

                <div id="keepInMindTextDiv">
                    <p id="keepInMindTextPTag">Keep In Mind</p>
                </div>

                <div id="keepInMindSubDivOfFeatures">

                    <div class="keepInMindCardDiv">
                        <img class="keepInMindCardImage" src="https://zoomcar-assets.zoomcar.com/images/original/0ebf53a526da3baa9621436223d17ee0a712495e.png?1584454768" />
                        <p class="keepInMindCardTextPTag">Driving License Mandatory</p>
                    </div>

                    <div class="keepInMindCardDiv">
                        <img class="keepInMindCardImage" src="https://zoomcar-assets.zoomcar.com/images/original/ccedfb3dddda918d76ad27240ffa582f4a59a157.png?1584454852" />
                        <p class="keepInMindCardTextPTag">Kindly return the car at the same fuel level.</p>
                    </div>

                    <div class="keepInMindCardDiv">
                        <img class="keepInMindCardImage" src="https://zoomcar-assets.zoomcar.com/images/original/afb10552c79c652619a45d814ab9f936f8592037.png?1584454817" />
                        <p class="keepInMindCardTextPTag">Hassle free cancellations and refunds.</p>
                    </div>



                </div>

            </div>


        </div>

        <div id="emptyDiv">

        </div>

        <div onClick={changePosition} id="subTotalDiv">
            <h2 id="totalAmountH2Tag">Total : ₹{totalPrice}</h2>

            <div className="myButtonsss">

                <button id="proceedToPayButton" onClick={goToPaymentPage}>PROCEED TO PAY ₹{totalPrice}</button>
            </div>
        </div>


        <img id="carImageLoading" src="https://static.vecteezy.com/system/resources/previews/005/576/332/original/car-icon-car-icon-car-icon-simple-sign-free-vector.jpg" />


    </div>

}

export default Checkout;