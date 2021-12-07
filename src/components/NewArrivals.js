import React from 'react'
import './newArrivals.css'
import collection1 from './images/collection1.jpg'
import collection2 from './images/collection2.jpg'
import collection4 from './images/collection4.jpg'

const NewArrivals = () => {
    return (
        <div className="arrivals">
            <h1>New Arrivals</h1>
            <div className="arrival-container">
                <img src={collection1} alt="" />
                <img src={collection2} alt="" />
                <img src={collection4} alt="" />
            </div>

        </div>
    )
}

export default NewArrivals
