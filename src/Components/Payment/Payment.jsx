import React from "react";
import "./Payment.css";


function Payment() {
  return (
    <div>
      <h1 style={{ fontSize: "22px", textAlign: "center", marginBottom: "20px"}}>Select a Payment method</h1>
      <div id="parentbox">
        <div id="left">
          <h2 style={{fontSize: "20px"}}>PAYMENT OPTIONS</h2>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/9fcb8335a89265849f23225858489f2a9ce8e121.png?1584453574"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}} >UPI</h4>
              <p>Google Pay, PhonePe, BHIM UPI</p>
            </div>
          </div>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/97f051d76793fffe5ab182ffa58b8eb47c5ba0cf.png?1584453494"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}}>Credit / Debit / ATM Card</h4>
              <p>All major card providers are supported</p>
            </div>
          </div>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/1317404625e385185d23ea43a0c34569d6432d09.png?1632130014"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}}>Mobile Wallet</h4>
              <p>All major wallet are supported</p>
            </div>
          </div>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/4dd051886e5403aafb9725b7d2ab42c80f9b1df6.png?1584453529"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}}>Net Banking</h4>
              <p>All major banks are supported</p>
            </div>
          </div>
        </div>
        <div id="right">
          <h2 style={{fontSize: "20px"}}>PREFERRED PAYMENT OPTIONS</h2>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/4aef7198237a74ac187c75d270f8d516cfaa5e9b.png?1584453889"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}}>Google Pay</h4>
            </div>
          </div>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/2f05f4e5f91bf2f481569c3a3c4345b2cf447ff7.png?1584453837"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}}>PhonePe</h4>
            </div>
          </div>
          <div id="parent">
            <div>
              <img
                src="https://zoomcar-assets.zoomcar.com/images/original/91871c2e202fd271724063a4a38033612d37c219.png?1584602070"
                alt="UPI"
              />
            </div>
            <div>
              <h4 style={{fontSize: "16px"}}>Paytm UPI</h4>
            </div>
          </div>
        </div>
      </div>

    </div>


  );
}

export default Payment;
