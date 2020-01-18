import React from 'react';
import samplogo from '../../images/sa-mp.gif';

export default function SampLogo() {
    return (
        <div>
            <img
                src={samplogo}
                alt="SA-MP Logo"
                style={{width: '150px', margin: 'auto', display: 'block'}}
            />
        </div>
    )
}
