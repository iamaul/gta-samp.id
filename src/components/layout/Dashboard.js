import React from 'react';
import Home from '../pages/Home';
import Sidebar from '../layout/Sidebar';

export default function Dashboard() {
    return (
        <div className="row">
            <div className="col-md-10">
                <Home />
            </div>
            <div className="col-md-2">
                <Sidebar />
            </div>
        </div>
    )
}
