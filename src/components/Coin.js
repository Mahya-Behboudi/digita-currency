import React from 'react';
// style
import Styles from './Coin.module.css';
const Coin = ({name ,  image , symbol , price, marketPrice , priceChange }) => {

    return (
        <div className={Styles.container}>
            <img className={Styles.image} src={image} alt='digital'/>
            <span className={Styles.name}>{name}</span>
            <span className={Styles.symbol}>{symbol}</span>
            <span className={Styles.currentPrice}>$ {price.toLocaleString()}</span>
            <span className={priceChange > 0 ?Styles.greenPriceChange :Styles.redPriceChange}>{priceChange.toFixed(2)}%</span>
            <span className={Styles.marketPrice}>$ {marketPrice.toLocaleString()}</span>
        </div>
    );
};

export default Coin;