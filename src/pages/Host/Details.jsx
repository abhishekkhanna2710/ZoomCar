import React from "react";

function Details(){
    return <>
    <div id="details">
     <div>
        <h4>What is Zoomcar Host?</h4>
        <p class="host-about-section-desc">
          Zoomcar Host is a new program for private car owners to earn rewards and reduce ownership cost by sharing their cars on the Zoomcar platform while they are not in use. All you have to do is share your car as per your convenience. Now reduce the idle time of your car and recover the related expenses with Zoomcar Host. Share and earn, on the go.
        </p>
     </div>
     <div>
        <h4>Why choose Zomcar Host?</h4>
        <p class="host-about-section-desc">
          Apart from its convenience, Zoomcar Host lets you earn money on an otherwise depreciating asset and do your bit for the environment by reducing carbon footprint. And with its flexibility, advanced keyless technology and accidental insurance coverage, you are in for a fully guided, hassle-free experience. If you’re concerned about the safety aspects of this arrangement, you’d be delighted to know that Zoomcar Host practices minimal human interaction. At Zoomcar Host, we also perform a meticulous background check of the renter to ensure safety and security.
        </p>
     </div>
     <div>
        <h4>Sharing personal car on Zoomcar Host</h4>
        <p class="host-about-section-desc">
          Paperwork can be boring and tiring. But we won't make you sit through a long procedure. All you need to do is visit the Zoomcar Host website, select your city, log in and agree to the terms and conditions. Enter your personal and car details, upload documents, and voila! You’re done. A dedicated Zoomcar relationship manager will meet you and help you out with the paperwork. After this, he will pick up your car and get the car safety devices and keyless entry devices installed. Your car is all set to accept bookings.
        </p>
     </div>
     <div>
        <h4>Why does Zommcar Host stand out?</h4>
        <p class="host-about-section-desc">
          Zoomcar Host lets you share, sit back and earn from home. You can share your cars for free and watch your earnings grow. Once you register with us, you will get paid on a monthly basis through direct deposit. You can also reduce your car ownership cost by cutting down on maintenance and other expenses. By sharing your car, you are going to recover investment in a depreciating asset. You are reducing the idle time of your car by sharing it on Zoomcar Host, as per your convenience.
        </p>
     </div>
     </div>
     </>
}


function Chevrolet(){
  return <>
       <option value="Aveo">Aveo</option>
                     <option value="Cruze">Cruze</option>
                     <option value="Opta">Opta</option>
                     <option value="Captiva">Captiva</option>
  </>
}
function Fiat(){
  return <>
       <option value="Punto">Punto</option>
                     <option value="Grande_Punto">Grande Punto</option>
                     <option value="Avvventura">Avventura</option>
                     
  </>
}
function Fort(){
  return <>
       <option value="Ecosport">Ecosport</option>
                     <option value="Endearvour">Endeavour</option>
                     <option value="Averest">Averest</option>
                     <option value="Rangar">Rangar</option>
  </>
}

function Honda(){
  return <>
       <option value="Amaze">Amaze</option>
                     <option value="Brio">Brio</option>
                     <option value="BR-V">BR-V</option>
                     <option value="City">City</option>
  </>
}
export {Details,Chevrolet,Fiat,Fort,Honda};