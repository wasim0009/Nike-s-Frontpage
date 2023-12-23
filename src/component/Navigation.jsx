import React from 'react'

function Navigation() {
    return (
        <div><nav>
            <div className="logo">
                <img src="/image/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </nav></div>
    )
}

export default Navigation