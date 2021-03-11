// use the coin geko api and make the request fot the7 7 most searched on coingeko
import { useState, useEffect } from 'react';

const Fetch = () => {
  const [coins, setCoins] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.coins);
        setIsLoading(false);
      })
      .catch((err) => { console.log(err); });
  }, []);
  console.log(coins);
  const Trending = () => (
    <ul className="trendinglist">
      {coins.map(((item) => (
        <li>
          <img src={item.item.thumb} alt="coin thumbnail" />
          {item.item.name}
        </li>
      )))}
    </ul>
  );

  return (
    <div>
      {isLoading ? <div>loading...</div> : <Trending />}

    </div>
  );
};

// eslint-disable-next-line linebreak-style
export default Fetch;
