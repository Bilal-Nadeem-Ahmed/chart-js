// use the coin geko api and make the request fot the7 7 most searched on coingeko
import { useState } from 'react';

const Fetch = () => {
  const [coins, setCoins] = useState(null);
  fetch('https://api.coingecko.com/api/v3/search/trending')
    .then((res) => res.json())
    .then((data) => {
      setCoins(data.coins);
    });

  return (
    <div>
      {coins.map((item) => {
        <h1>{item.name}</h1>;
      })}
    </div>
  );
};

// eslint-disable-next-line linebreak-style
export default Fetch;
