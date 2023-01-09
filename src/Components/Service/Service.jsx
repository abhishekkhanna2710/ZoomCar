import React from "react";
import "./Service.css";
import HomeNavbar from "../Components-Navbar/HomeNavbar";
import Footer from "../Footer/Footer";

function Service() {
  return (
    <div className="Service">
      <HomeNavbar />
      <div id="parenttop">
        <div id="top1">
          <h1>
            Inspiring Profitable <br></br>Mobility Solutions of<br></br>
            Tomorrow
          </h1>
          <p>
            Suite of Connected Technology Offerings and<br></br> Connected
            Mobility Solutions for Businesses<br></br> Worldwide
          </p>
          <button>Request Demo</button>
        </div>
        <div id="top2">
          <img
            src="https://zms.zoomcar.com/wp-content/uploads/2022/02/hero-banner-1.png"
            alt="Image1"
          />
        </div>
      </div>
      <hr />
      <div id="zms_productoffrings">
        <div id="zms_click">
          <div id="CVS">Connected Vehicle Solutions</div>
          <div id="YMS">Yield Management Services</div>
        </div>
        <div id="cy_content">
          All-in-one solution to reduce operating costs over 30% via advanced
          vehicle monitoring and management systems
        </div>
      </div>
      <h3 style={{ textAlign: "center", marginBottom: "40px" }}>Features</h3>
      <div class="zms_feat">
        <div class="zms_features">
          <div class="zms_fet_heading">Renter Platform </div>
          <div class="zms_fet_text">
            Customisable stack to launch station based & free-floating keyless
            renter services
          </div>
        </div>
        <div class="zms_features">
          <div class="zms_fet_heading">Subscription Platform</div>
          <div class="zms_fet_text">
            Whitelabel Subscription platform that works across all vehicle types
            for higher utilization
          </div>
        </div>
        <div class="zms_features">
          <div class="zms_fet_heading">Dynamic Pricing</div>
          <div class="zms_fet_text">
            Plug and play module matching demand-supply and maximizing ROI
          </div>
        </div>
        <div class="zms_features">
          <div class="zms_fet_heading">Analytics & Reporting</div>
          <div class="zms_fet_text">
            Empower decision making through advanced Data Science and Analytics
            capabilities
          </div>
        </div>
        <div class="zms_features">
          <div class="zms_fet_heading">Real-Time Monitoring</div>
          <div class="zms_fet_text">
            Connectivity and Real-time monitoring features to bring more
            transparency and reliability
          </div>
        </div>
      </div>

      <h2 class="zms_h2">Proven track records</h2>
      <div className="Contentoo">
        <p class="zms_fet_text">
          Backed by deep learnings and great driving experiences brought to you
          over 1 billion+ kms spanning over 7 years
        </p>
      </div>

      <div id="zms_ptr">
        <div>
          <img
            class="ptr_icons"
            src="https://zms.zoomcar.com/wp-content/uploads/2022/02/vehicle-health-management.svg"
            alt=""
          />
          <p>30% Fuel Costs Savings</p>
        </div>
        <div>
          <img
            class="ptr_icons"
            src="https://zms.zoomcar.com/wp-content/uploads/2022/02/vehicle-tracking.svg"
            alt=""
          />
          <p>20% Reduction in Fleet Downtime</p>
        </div>
        <div>
          <img
            class="ptr_icons"
            src="https://zms.zoomcar.com/wp-content/uploads/2022/02/driver-assistance-system.svg"
            alt=""
          />
          <p>50% Less Accidents & Better Safety</p>
        </div>
      </div>

      <div id="element">
        <div id="element1">
          <h2>Driver Behavior Intelligence App</h2>
          <p>
            Our product features the driver score on the basis of their usage of
            the vehicle. The advanced tech uses IoT-based devices that keep a
            check on different parameters such as clutch, gear, accelerator,
            brake, and more; identifies the pressure exerted and compares it to
            the set limit. The judgment of our application is authentic
            therefore the data becomes reliable. The data collected using this
            product can help the insurance sector in judging whether the claim
            is fraudulent or authentic. Such data can further be used to build a
            customer base by providing a better discount to those with good
            driver's scores as compared to those with bad driver's scores.
          </p>
        </div>
        <div id="element2">
          <img
            src="https://zms.zoomcar.com/wp-content/uploads/2022/02/driver-behavior-1.jpg"
            alt=""
          />
        </div>
      </div>

      <div id="zms_connect">
        <form>
          <h2 class="zms_h2">Connect With Us</h2>
          <p>
            Leave details for us to help your business become future <br></br>{" "}
            ready
          </p>
          <div>
            <input id="name" type="text" placeholder="Name" value=""></input>
            <input
              id="company"
              type="text"
              placeholder="Company Name"
              value=""
            ></input>
          </div>
          <div>
            <input id="email" type="email" placeholder="Email" value=""></input>
          </div>
          <div>
            <input
              id="phoneno"
              type="number"
              placeholder="Phone Number"
              value=""
            ></input>
            <input
              id="country"
              type="text"
              placeholder="Country"
              value=""
            ></input>
          </div>
          <div>
            <textarea
              id="requirments"
              type="text"
              placeholder="Mention Requirments"
              value=""
            ></textarea>
          </div>
          <div>
            <input id="c_submit" type="submit"></input>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
