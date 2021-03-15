// use the coin geko api and make the request fot the7 7 most searched on coingeko

import { useState, useEffect } from 'react';
import TrendingChart from '../trendingChart';

const Trending = () => {
  const [coins, setCoins] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCoin, SetSelectedCoin] = useState(null);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.coins);
        setIsLoading(false);
        SetSelectedCoin(data.coins[0].item.id);
      })
      .catch((err) => { console.log(err); });
  }, []);

  // temp li component to test onclick
  const Licomp = ({ item }) => {
    const handleClick = () => {
      SetSelectedCoin(item.id);
    };
    return (
      <li onClick={handleClick}>
        <img src={item.thumb} alt="coin thumbnail" />
         {item.name}
      </li>
    );
  };
 //fetch for chart data 

 const [chartData,setChartData]= useState(null);
 //format the data 
 const formatData = data=>{
   return data.map((item)=>{
    return {
       t:item[0],
       y:item[1].toFixed(4)
     }
   })
 }


 useEffect(() => {
   setTimeout(()=>{

    fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=gbp&days=1&interval=hourly
    `)
      .then((res) => res.json())
      .then((data) => {
        setChartData(formatData(data.prices));
      })
      .catch((err) => console.log(err));
  }, []);
 


   },500)
   

  // end of li component
  const Trending = () => (
    <ul className="trendinglist">
      {coins.map(((item) => (
        <Licomp key={item.item.symbol} item={item.item} />

      )))}
    </ul>
  );

  return (
    <div>
      {isLoading ? <div>loading...</div> : <Trending />}
      {selectedCoin ? <TrendingChart chartData ={chartData}idToFetch={selectedCoin} /> : null}
      
    </div>
  );
};

// eslint-disable-next-line linebreak-style
export default Trending;
