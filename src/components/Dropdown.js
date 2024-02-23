import React, { useState } from 'react'

function Dropdown({ selectedValue, handleDropdownChange, label }) {

    return (
        <React.Fragment>
            <label htmlFor="chapters" className='dropdown-component'>
                {label}
                <select className='dropdown' value={selectedValue} onChange={handleDropdownChange}>
                    {/* Generate options dynamically */}
                    {[...Array(133).keys()].map((number) => (
                        <option key={number + 1} value={number + 1}>{number + 1}</option>
                    ))}
                </select>
            </label>
        </React.Fragment>
    )
}

export default Dropdown