import React from 'react'

function TamilKural({ item }) {
    return (
        <div className='kural'>
            <p className='kural_no'>{item?.Number}</p>
            <p><b>{item?.Line1}<br />{item?.Line2}</b></p>
            <p><b>விளக்கம்</b>: <i>{item?.mv}</i></p>
            <p><b>மு. கல்யாணசுந்தரம் விளக்கம்</b>: {item?.mk}</p>
        </div>
    )
}

export default TamilKural