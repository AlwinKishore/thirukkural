import React from 'react'

function SearchBox({ kuralLabel, searchKural, changeSearchValue, handleReset }) {
    return (
        <div className='dropdown-component' >
            {kuralLabel} < input type='number' className='dropdown' name='kuralSearch' value={searchKural} min={1} max={1330} onChange={e => changeSearchValue(e)} />
            <button className='reset-btn' onClick={() => handleReset()}>Reset</button>
        </div >
    )
}

export default SearchBox