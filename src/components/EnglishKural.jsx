import React from 'react'

function EnglishKural({ item }) {
    return (
        <div className='kural'>
            <p className='kural_no'>{item?.Number}</p>
            <p><b>{item?.transliteration1}<br />{item?.transliteration2}</b></p>
            <p><b><i>{item?.couplet}</i></b></p>
            <p><b>Translation</b>:{item?.Translation}</p>
            <p><b>Explanation</b>:{item?.explanation}</p>
        </div>
    )
}

export default EnglishKural