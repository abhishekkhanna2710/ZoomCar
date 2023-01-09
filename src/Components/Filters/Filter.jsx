import React, { useState } from 'react'
import "./Filter.css"

export default function Filter({ data, onFilter }) {
    const [filter, setFilter] = useState("");



    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }



    const handleFilterSubmit = () => {
        // setFilteredData(datafILter);
        const dataToFilter = data.filter(item => item.name.includes(filter))
        onFilter(dataToFilter)
    }


    // Drive km filter
    const drivekmabove = () => {
        const dataToFilterMileage = data.filter(item => item.Mileage > 40)
        onFilter(dataToFilterMileage);
    }

    const drivekmbelow = () => {
        const dataToFilterMileage = data.filter(item => item.Mileage < 40)
        onFilter(dataToFilterMileage);
    }

    //Price High

    const PriceHigh = () => {
        const dataPriceHigh = data.filter(item => item.price > 2000)
        const sortedData = dataPriceHigh.sort((a, b) => b.price - a.price);
        onFilter(sortedData);
    }

    // Price low
    const PriceLow = () => {
        const dataPriceLow = data.filter(item => item.price > 2000)
        const sortedData = dataPriceLow.sort((a, b) => a.price - b.price);
        onFilter(sortedData);
    }


    // ratings
    const rated = () => {
        const ratings = data.filter(items => items.rating == 5.00)
        onFilter(ratings);
    }

    // marutiCar

    const marutiCar = () => {
        const carTypo = data.filter((item) => /^Maruti/.test(item.name));
        onFilter(carTypo);
    }

    // mahendraCar
    const mahendraCar = () => {
        const carTypo = data.filter((item) => /^Mahindra/.test(item.name));
        onFilter(carTypo);
    }
    // HondaCar
    const HondaCar = () => {
        const carTypo = data.filter((item) => /^Honda/.test(item.name));
        onFilter(carTypo);
    }

    //fourSeat

    const fourSeat = () => {
        const seatsData = data.filter((item) => item.seat == 4)
        onFilter(seatsData);
    }

    // fiveSeat
    const fiveSeat = () => {
        const seatsData = data.filter((item) => item.seat == 5)
        onFilter(seatsData);
    }

    // sevenSeat

    const sevenSeat = () => {
        const seatsData = data.filter((item) => item.seat == 7)
        onFilter(seatsData);
    }

    // petrol 
    const PetrolFuel = () => {
        const pfuel = data.filter((item) => item.fuel == "Petrol")
        onFilter(pfuel);
    }
    //Diesel
    const DieselFuel = () => {
        const Dfuel = data.filter((item) => item.fuel == "Diesel")
        onFilter(Dfuel);
    }

    //  Manual

    const Manual = () => {
        const man = data.filter((item) => item.trans == "Manual")
        onFilter(man);
    }

    // Automatic
    const Auto = () => {
        const Automatic = data.filter((item) => item.trans == "Automatic")
        onFilter(Automatic);
    }

    // Reset Data
    const resetData = () => {
        const dataToFilter = data.filter(item => item.name.includes(filter))
        onFilter(dataToFilter)
        setFilter("");


    }
    return (
        <>
            <div className='container-fluid filtero'>
                <div className='heading'>
                    <h2>Sort & Filters</h2>
                    {/* <p><a href="#" onClick={reset}>RESET</a></p> */}
                    <p><button className='reset' onClick={resetData}>RESET</button></p>

                </div>
                <br />
                <p>Sort By</p>
                <div className='car-type'>
                    <div>
                        <i class="fa-solid fa-car"></i>
                        <p>Include specific cars</p>
                    </div>
                    <p>Any specific model in mind? Find it here. <br /></p>
                </div>

                {/* <button>Filter Data</button> */}
                <div>
                    <input type="text" placeholder='Search Cars' value={filter} onChange={handleFilterChange} />
                    <button className='mybTn' onClick={handleFilterSubmit}>Filter Cars</button>
                    <br />
                    <br />


                    <br />

                    {/* Filter boxes Starts here */}

                    <div className='FilterBox'>


                        {/* Kmps below */}
                        <div>
                            <button className='btn' onClick={drivekmbelow}>
                                <i class="fa-solid fa-road"></i><br />
                                <p> Km 40 <i class="fa-sharp fa-solid fa-arrow-down"></i></p>  </button>
                        </div>
                        {/* High to low price */}
                        <div>
                            <button className='btn' onClick={PriceHigh}>
                                <i class="fa-sharp fa-solid fa-arrow-up"></i>
                                <i class="fa-solid fa-indian-rupee-sign"></i> <br />
                                <p> High to Low </p>
                            </button>
                        </div>

                        {/*Distance */}

                        <div>
                            <button className='btn' onClick={drivekmabove}>
                                <i class="fa-solid fa-location-dot"></i>
                                <p>Distance</p>
                            </button>
                        </div>

                        {/* Dummy Popularity */}

                        <div>
                            <button className='btn'>
                                <i class="fa-solid fa-volume-high"></i>
                                <p>Popularity</p>
                            </button>
                        </div>

                    </div>


                    <div className='FilterBox'>
                        {/* Kmps above */}
                        <div>
                            <button className='btn' onClick={drivekmabove}>
                                <i class="fa-solid fa-road"></i><br />
                                <p> Km 40 <i class="fa-sharp fa-solid fa-arrow-up"></i></p>  </button>
                        </div>


                        {/* low to high price */}
                        <div>
                            <button className='btn' onClick={PriceLow}>
                                <i class="fa-sharp fa-solid fa-arrow-down"></i>
                                <i class="fa-solid fa-indian-rupee-sign"></i> <br />
                                <p> Low to High </p>
                            </button>
                        </div>


                        {/* Rating star */}

                        <div>
                            <button className='btn' onClick={rated}>
                                <i class="fa-regular fa-star"></i>
                                <p>Best Rated</p>
                            </button>
                        </div>

                        {/* dummy car age*/}
                        <div>
                            <button className='btn' onClick={drivekmbelow}>
                                <i class="fa-solid fa-car-side"></i>
                                <p>Car age</p>
                            </button>
                        </div>



                    </div>


                </div>


                <hr style={{ border: "1px solid grey" }} />

                {/* ********************Car Types****************** */}

                <p>Car Type</p>
                <div className='car_types'>
                    <div>
                        <button className='btn' onClick={marutiCar}>
                            <i class="fa-solid fa-car-side"></i>
                            <p>Maruti</p>
                        </button>
                    </div>
                    <div>
                        <button className='btn' onClick={mahendraCar}>
                            <i class="fa-solid fa-car-rear"></i>
                            <p>Mahendra</p>
                        </button>
                    </div>
                    <div>
                        <button className='btn' onClick={HondaCar}>
                            <i class="fa-solid fa-car"></i>
                            <p>Honda</p>
                        </button>
                    </div>
                </div>

                <hr style={{ border: "1px solid grey" }} />

                {/* ********************Seats****************** */}
                <p>Seats</p>
                <div className='Seats'>
                    <div>
                        <button className='btn' onClick={fourSeat}>
                            <i class="fa-solid fa-car-rear"></i>
                            <p>4 seater</p>
                        </button>
                    </div>
                    <div>
                        <button className='btn' onClick={fiveSeat}>
                            <i class="fa-solid fa-car-rear"></i>
                            <p>5 seater</p>
                        </button>
                    </div>
                    <div>
                        <button className='btn' onClick={sevenSeat}>
                            <i class="fa-solid fa-car"></i>
                            <p>7 Seater</p>
                        </button>
                    </div>
                </div>

                <hr style={{ border: "1px solid grey" }} />

                {/* ********************Fuel****************** */}
                <p>Seats</p>
                <div className='Fuels'>
                    <div>
                        <button className='btn' onClick={PetrolFuel}>
                            <i class="fa-solid fa-gas-pump"></i>
                            <p>Petrol</p>
                        </button>
                    </div>
                    <div>
                        <button className='btn' onClick={DieselFuel}>
                            <i class="fa-solid fa-gas-pump"></i>
                            <p>Diesel</p>
                        </button>
                    </div>

                </div>

                <hr style={{ border: "1px solid grey" }} />

                {/* ********************Transmission****************** */}
                <p>Transmission</p>
                <div className='Transmission'>
                    <div>
                        <button className='btn' onClick={Manual}>
                            <i class="fa-solid fa-car-side"></i>
                            <p>Manual</p>
                        </button>
                    </div>
                    <div>
                        <button className='btn' onClick={Auto}>
                            <i class="fa-solid fa-car-rear"></i>
                            <p>Automatic</p>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

