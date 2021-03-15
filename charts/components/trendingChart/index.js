import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const TrendingChart = ({ currentPrice, chartData,idToFetch ,name}) => {
 
  const data = {
    
    datasets: [{
      label: idToFetch,
      data: chartData,
      backgroundColor: '#56565670',
      borderColor: 'gold',
      
      
      borderWidth: 1.5,
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
           distribution: 'linear',
           scaleLabel: {
            display: true,
            labelString: 'Time 24hr'}
       }],
   
   }
}}


  
  return (
    <>
   <p>Coin Name: <span className='gold'>{name}</span> </p>
   <p>Current Value: <span className='gold'>£ {currentPrice}</span></p>
    <div className='graphcontainer'>
      
    <Line
     data={data}
     width={400}
     height={400}
     options={options.options}
    />
    </div>
    </>
  );
};
export default TrendingChart;
