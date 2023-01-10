import React from 'react'
import Payment from '../Payment/Payment'
import CardPayment from '../CardPayment/CardPayment'
import "./ParentPayment.css"

import HomeNavbar from '../Components-Navbar/HomeNavbar'

function ParentPayment() {


    return (
        <div className='parentPayment'>
            <HomeNavbar />
            <div className='row'>
                <div className='col-md-8'>
                    <Payment />
                </div>
                <div className='col-md-4'>
                    <CardPayment />
                </div>

            </div>
        </div>
    )
}

export default ParentPayment