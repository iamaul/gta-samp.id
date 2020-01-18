import React from 'react';
import spinner from '../../images/spinner.gif';

export default function Spinner() {
    return (
        <div>
            <img
                src={spinner}
                alt="Spinner"
                style={{width: '100px', margin: 'auto', display: 'block'}}
            />
        </div>
    )
}
