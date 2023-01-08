import logo from "../Media/logo.png";
import "../Host/Host.css"

function Navbar(){
    return <>

<div id="navbar">
        <div id="logo">
            <span class="menu">☰</span>
            
                <span class="logo-icon">
                    <a href="">
                        <img src={logo} alt="" />
                     </a></span>
        
        </div>
        <div id="rightbar">
            <div>
                <p>FAQs</p>
            </div>
            <div>
                <p>Refer & Earn</p>
            </div>
            <div>
                <p><a href="">Sign Up/Login</a></p>
            </div>
          
 
        </div>
       
    </div>
    </>

}


export default Navbar;