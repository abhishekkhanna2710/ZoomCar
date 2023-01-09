import React, { useState } from 'react'
import "./Date.css"
import dbJson from './db.json'

function Date() {

    const cityList = dbJson.city_list;

    const [cities, setCities] = useState("");

    const handleCityChange = (e) => {
        setCities(e.target.value);
        let myCity = document.getElementById("city").value;

        localStorage.setItem("myCity", myCity);
    }

    // Start date
    function changeStartDate() {
        let start = document.getElementById("startDate").value
        localStorage.setItem("startDate", start)
    }
    function changeEndDate() {
        let end = document.getElementById("endDate").value
        localStorage.setItem("endDate", end)
    }

    return (
        <div>
            <div className="boxupper">
                <div className="twobox">
                    <h3>Location</h3>
                    <div className='location'>
                        {/* <span className="lock">Location</span> <p id="place"> </p> */}

                        <h4>{cities}</h4>
                    </div>
                    <select name="city" id="city" onChange={handleCityChange}>
                        <option value="">Select City</option>
                        {
                            cityList.map(city => (
                                <option value={city}>{city}</option>
                            ))
                        }

                    </select>
                </div>
                <div className="twobox" >
                    <div>
                        <h6>Start Date</h6>
                        <input type="date" className="date" id="startDate" onChange={changeStartDate} />
                    </div>

                    <i class="fa-solid fa-arrow-right"></i>

                    <div>
                        <h6>End Date</h6>
                        <input type="date" className="date" id="endDate" onChange={changeEndDate} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Date
