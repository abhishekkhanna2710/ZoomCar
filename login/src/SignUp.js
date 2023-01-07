import {json, Link} from "react-router-dom";
import "./styles.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(){

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const emailWarningRef = useRef(null);
    const nameWarningRef = useRef(null);
    const passwordSizeWarningRef = useRef(null);
    const confirmPasswordWarningRef = useRef(null);

    const navigate = useNavigate();

    let hideWarning = ()=>{
        emailWarningRef.current.style.display = "none";
    }

    let hideNameWarning = ()=>{
        nameWarningRef.current.style.display = "none";
    }

    let hidePasswordSizeWarning = ()=>{
        passwordSizeWarningRef.current.style.display = "none";
    }

  
    let hideConfirmPasswordWarning = ()=>{
        confirmPasswordWarningRef.current.style.display = "none";
    }

  
    let signUp = ()=>{

        console.log("sign up");
        
        var goAheadAndSignUp = true;

        if(nameRef.current.value.length < 4){
            nameWarningRef.current.style.display = "block";
            goAheadAndSignUp = false;
        }

        if(passwordRef.current.value.length < 8){
            passwordSizeWarningRef.current.style.display = "block";
            goAheadAndSignUp = false;
        }

        if(confirmPasswordRef.current.value !== passwordRef.current.value){
            confirmPasswordWarningRef.current.style.display = "block";
            goAheadAndSignUp = false;
            console.log("confirm warning");
        }

        ///////////// email check

        var usersData = JSON.parse(localStorage.getItem("usersData")) || [];

        for(let ind = 0; ind<usersData.length; ind++){
            let ele = usersData[ind];
            if(ele.email === emailRef.current.value){
                goAheadAndSignUp = false;
                emailWarningRef.current.style.display = "block";
                break;
            }
        }        


        ////

        if(goAheadAndSignUp){

            var usersData = JSON.parse(localStorage.getItem("usersData")) || [];

            usersData.push({"name":nameRef.current.value, "email":emailRef.current.value, "password":passwordRef.current.value});
            localStorage.setItem("usersData", JSON.stringify(usersData));

            alert("Account Created Successfully !");
            navigate("/login");
        }
        

    }

    return <div>

                    <img id="backgroundImage" src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"/>

                    <div id="containsAllDiv">

                    <div id="divNextToImageDiv">

                        <h3 id="enterDetailsH3Tag">Enter details to Sign Up</h3>
                        
                        <div id="menuDiv">

                            <input type="email" ref={emailRef} onClick={hideWarning} id="emailInputTag" className="menuInputItems" placeholder="Enter your email" />
                            <p ref={emailWarningRef} className="warningPTag" >This email is already registered !</p>
                            <input ref={nameRef} onClick={hideNameWarning}  className="menuInputItems"  placeholder="Enter your name"/>
                            <p ref={nameWarningRef} className="warningPTag"  >Name must contain at least 4 characters</p>
                            <input ref={passwordRef} onClick={hidePasswordSizeWarning} type="password" minLength="8" required className="menuInputItems" placeholder="Enter your password" />
                            <p ref={passwordSizeWarningRef} className="warningPTag" >Password must be atleast of 8 characters !</p>
                            <input ref={confirmPasswordRef} onClick={hideConfirmPasswordWarning} type="password" minLength="8" required  className="menuInputItems"  placeholder="Confirm your password"/>
                            <p ref={confirmPasswordWarningRef} className="warningPTag"  >Passwords don't match !</p>

                            <button onClick={signUp} id="logInButton">Sign Up</button>

                            <Link style={{"text-decoration":"none"}} to="/login"><p id="createNewAccountPTag">Already have an account?</p></Link>

                        </div>

                    </div>

                    </div>

           </div>

}

export default SignUp;