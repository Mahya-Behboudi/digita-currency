import React, { useEffect, useState } from 'react';
// API
import { getCurrency } from '../Services/api';
// Component
import Coin from './Coin';
import Loader from './Loader';
// style
import Styles from './Landing.module.css';
const Landing = () => {
    const [coins , setCoin] = useState([]);
    const [search , setSearch] = useState('');
    useEffect(()=> {
        const fetchAPI = async () => {
            const data =await getCurrency();
            console.log(data);
            setCoin(data)
        }
        fetchAPI()
    },[])
    const searchHandler= event => {
        setSearch(event.target.value);
    }
    const searchCoins = coins.filter(coin =>coin.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div className={Styles.container}>
            <input type='text' className={Styles.input} placeholder='Search' value={search} onChange={searchHandler} />
            <div>
               {
                coins.length ?
                <div className={Styles.mainContainer}>
                    {
                    searchCoins.map(coin => <Coin
                        key={coin.id} 
                        name ={coin.name}
                        image={coin.image}
                        symbol= {coin.symbol.toUpperCase() }
                        price={coin.current_price}
                        marketPrice ={coin.market_cap}
                        priceChange = {coin.market_cap_change_percentage_24h}
                    
                    />)}
                    </div>:
                    <Loader/>
               }
            </div>
        </div>
    );
};

export default Landing;