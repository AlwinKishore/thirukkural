import React from 'react'
import { NavLink } from 'react-router-dom' 

function Header() {
    return (
        <header>
            <div className="container container-flex">
                <div className="site-title">
                    <h1>Thirukkural</h1>
                    <p className="subtitle">Excellence On The Art Of Living</p>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><NavLink to="/thirukkural/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/thirukkural/about" activeClassName="active">About</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header