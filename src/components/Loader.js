import React from 'react';
// Loader image
import spinner from  '../images/Loader.gif';

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='Loader'/>
            <p>Loading...</p>
        </div>
    );
};

export default Loader;