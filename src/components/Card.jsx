import React from 'react'
import propTypes from 'prop-types'

function Card({data}) {
const {
    location,
    current,
} = data

    return (
        <div className="bg-white p-4 mt-5 rounded-lg shadow-md min-w-[200px] w-3/6">
            <div className="text-center">
                <span className="block text-xl font-bold text-stone-800">
                    {location.name}
                </span>
                <span className="text-stone-700">
                    {`${location.region}, ${location.country}`}
                </span>
            </div>

            <div className="flex justify-center mt-1 mb-0.5 font-bold text-stone-800">
                <span className="text-6xl">{current.temp_c}</span>
                <span className="text-2xl mt-1">°C</span>
            </div>

            <div className="flex flex-col justify-center items-center">
                <img src={current.condition.icon} alt="" />
                <span className="text-stone-700 font-medium">
                    {current.condition.text}
                </span>
            </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    data: propTypes.object,
}.isRequired