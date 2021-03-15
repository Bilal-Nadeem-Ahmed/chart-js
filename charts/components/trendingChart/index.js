import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2'

const TrendingChart = ({ currentPrice, chartData,idToFetch ,name}) => {
 
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
           distribution: 'linear',
           scaleLabel: {
            display: true,
            labelString: 'Time 24hr'}
       }],
   
   }
}}


  
  return (
    <>
   <p>{name} </p>
   <p>Current Value: £{currentPrice}</p>
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
