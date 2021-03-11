import { useEffect } from 'react';

const TrendingChart = ({ idToFetch }) => {
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${idToFetch}/market_chart?vs_currency=gbp&days=1&interval=daily`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [idToFetch]);
  return (
    <div>
      This is the trending chart
      {idToFetch}
    </div>
  );
};
export default TrendingChart;
