import React, { useState } from "react"
import "./styles.css"

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="home-logo">
                    <a href="/home">
                        <img src={""} alt="Logo"/>
                    </a>
                </div>
                {isAuthenticated ? (
                    <div className="authenticated-container">
                        <div className="welcome-user">Hi, User</div>
                        <div>Logout</div>
                    </div>
                ) : (
                    <div className="nonauthenticated-container">
                        <div>Login</div>
                        <div>Register</div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar