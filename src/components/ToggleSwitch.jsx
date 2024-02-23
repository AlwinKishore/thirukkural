// Filename: ./components/ToggleSwitch.js

import React, { useEffect } from "react";

const ToggleSwitch = ({ label, changeLanguage }) => {
    return (
        <div className="toggle-container">
            {/* {label}{" "} */}
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label} onClick={(e) => changeLanguage(e)}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;
