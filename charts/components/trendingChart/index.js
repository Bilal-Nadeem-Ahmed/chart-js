import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const TrendingChart = ({ idToFetch }) => {
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
    fetch(`https://api.coingecko.com/api/v3/coins/${idToFetch}/market_chart?vs_currency=gbp&days=1&interval=hourly
    `)
      .then((res) => res.json())
      .then((data) => {
        setChartData(formatData(data.prices));
      })
      .catch((err) => console.log(err));
  }, [idToFetch]);
  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: idToFetch,
      data: chartData,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      
      
      borderWidth: 1,
    }],
  }
  const options ={   options: {
      
      
    lineHeightAnnotation: {
      always:true,
      hover:false,
      lineweight:1.5
    },
    animation:{
      duration:2000
    },
    maintainApectRatio:true,
    responsive:true,
   scales: {
       xAxes: [{
           type: 'time',
           distribution: 'linear'
       }]
   }
}}


  
  return (
    <>
    <Line
     data={data}
     width={250}
     height={250}
     options={options.options}
    />
    <div>
      This is the trending chart
      {idToFetch}
    </div>
    </>
  );
};
export default TrendingChart;
