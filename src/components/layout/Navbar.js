import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SampLogo from '../assets/SampLogo';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 shadow">
                    <div className="container">
                        <Link to="/" className="navbar-brand mx-auto">
                            <SampLogo />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarMain">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav ml-auto">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
