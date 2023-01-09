import React from 'react'
import { useEffect, useState } from 'react'
import Car_products from '../Carproucts/Car_products';
import Filter from '../Filters/Filter';
import Footer from '../Footer/Footer';
import "./BookCar.css";
import HomeNavbar from '../Components-Navbar/HomeNavbar';

function Bookcar() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [defaultData, setDefaultData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getData = async () => {
        let url = (`https://car-api3-0.onrender.com/carData`)
        let res = await fetch(url);
        let car_data = await res.json();
        console.log(car_data);
        setData(car_data);
        setIsLoading(false);
    }

    const handleFilteredData = (data) => {
        setFilteredData(data)
    }

    useEffect(() => {
        getData();
    }, []);

    if (isLoading) {
        return <div className='Loader'>

            <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
                <circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
                <circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
                <circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
                <circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
            </svg>
        </div>;
    }

    return (
        <>
            <HomeNavbar />
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-md-4'>
                        <Filter data={data} onFilter={handleFilteredData} defaultData={defaultData} />
                    </div>

                    <div className='col-md-8'>
                        {
                            <Car_products carData={filteredData} data={data} />
                        }
                    </div>


                </div>


            </div>
            <Footer />
        </>
    )
}

export default Bookcar