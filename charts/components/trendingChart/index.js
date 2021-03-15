import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const TrendingChart = ({ idToFetch }) => {
  const [chartData,setChartData]= useState(null);
  // format the data 
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
    
    datasets: [{
      label: idToFetch,
      data: chartData,
      backgroundColor: '#565656',
      borderColor: 'gold',
      
      
      borderWidth: 2,
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
    maintainAspectRatio:false,
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
   
    <div className='graphcontainer'>
    <Line
     data={data}
     width={600}
     height={600}
     options={options.options}
    />
    </div>
    </>
  );
};
export default TrendingChart;
