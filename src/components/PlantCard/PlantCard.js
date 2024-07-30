import "./PlantCard.css"
import React from 'react'


function PlantCard({_id,names,category,image,price,description}) {
    return (
        <div className='plant-card'>
            <h1 className='plant-tiltle'>{names}</h1>
            <p className='plant-price'>Price:{price}</p>
        </div>
    )

}
export default PlantCard
