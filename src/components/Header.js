import React from 'react'

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
                        <li><a href="/">Home </a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header