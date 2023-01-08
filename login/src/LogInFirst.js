import "./styles.css";
import {useNavigate, Link} from "react-router-dom";
import { useRef } from "react";


function LogInFirst(){

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const credentialsWarningRef = useRef(null);

    const navigate = useNavigate();

    let logIn = ()=>{

        console.log("hhh");

        var usersData = JSON.parse(localStorage.getItem("usersData")) || [];

        var loggedInSuccessfully = false;

        for(let ind = 0; ind<usersData.length; ind++){
            let element = usersData[ind];
            if(element.email === emailRef.current.value && element.password === passwordRef.current.value){
                alert("Logged In Successfully !");
                localStorage.setItem("loggedInUser", JSON.stringify(element));
                navigate("/");
                loggedInSuccessfully = true;
                break;
            }
        }

        if(loggedInSuccessfully){

        } else{
            credentialsWarningRef.current.style.display = "block";
            if(validateEmail(emailRef.current.value)){
            
            }
        }

    }

    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
    }


    return <div>

                <div id="containsAllDiv">

                    <div id="imageDiv">
                        <img id="logInImage" src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"/>
                    </div>

                    <div id="divNextToImageDiv">

                        <h3 id="enterDetailsH3Tag">Enter details to login</h3>
                        
                        <div id="menuDiv">

                            <p ref={credentialsWarningRef} className="warningPTag">Please enter correct credentials !</p>

                            <input onClick={()=>credentialsWarningRef.current.style.display="none"} ref={emailRef} className="menuInputItems" placeholder="Enter your email" />
                            <input onClick={()=>credentialsWarningRef.current.style.display="none"} ref={passwordRef} type="password" className="menuInputItems"  placeholder="Enter your password"/>

                            <button onClick={logIn} id="logInButton">Log In</button>

                            <Link style={{"text-decoration":"none"}} to="/signup"><p id="createNewAccountPTag">Create New Account</p></Link>

                        </div>

                    </div>

                </div>

           </div>
}

export default LogInFirst;
