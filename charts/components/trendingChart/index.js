import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const TrendingChart = ({ idToFetch }) => {
  const [chartData,setChartData]= useState(null)
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${idToFetch}/market_chart?vs_currency=gbp&days=2
    `)
      .then((res) => res.json())
      .then((data) => {
        setChartData(data.prices);
      })
      .catch((err) => console.log(err));
  }, [idToFetch]);
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(255, 99, 132, 1)',
    
      
      borderWidth: 2,
    }],
  };
  return (
    <>
    <Line
     data={data}
     width={100}
     height={50}
     options={{ maintainAspectRatio: true }}
    />
    <div>
      This is the trending chart
      {idToFetch}
    </div>
    </>
  );
};
export default TrendingChart;
