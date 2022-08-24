import React from 'react';

const Coin = ({name ,  image , symbol , price, marketPrice , priceChange }) => {

    return (
        <div>
            <img src={image} alt='digital'/>
            <span>{name}</span>
            <span>{symbol}</span>
            <span>{price.toLocaleString()}</span>
            <span>{marketPrice.toLocaleString()}</span>
            <span>{priceChange}</span>
        </div>
    );
};

export default Coin;