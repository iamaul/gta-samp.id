import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-dark mt-4 fixed-bottom">
                    <div className="container">
                        <p className="m-0 text-center text-white">Copyright &copy; 2019</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
