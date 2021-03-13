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
      {selectedCoin ? <TrendingChart idToFetch={selectedCoin} /> : null}
    </div>
  );
};

// eslint-disable-next-line linebreak-style
export default Trending;
