import React from 'react'
import Footer from "../Footer/Footer";
import Landing from "../LandingPage/Landing";
import Imageslider from "../Slider/Slider";
import Services from "../Services/Services";
import Chat from "../Chatbox/Chat";
import Navbar from "../Components-Navbar/HomeNavbar";


function AllRoutes() {
    return (
        <div>
            <Navbar />
            <Landing />
            <Imageslider />
            <Services />
            <Chat />
            <Footer />
        </div>
    )
}

export default AllRoutes