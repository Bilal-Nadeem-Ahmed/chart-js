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

  // temp li component to test onclick
  const Licomp = ({ item }) => {
    const handleClick = () => {
      console.log(`${item.name}has been clicked`);
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
        // <li>
        //   <img src={item.item.thumb} alt="coin thumbnail" />
        //   {item.item.name}
        // </li>
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
