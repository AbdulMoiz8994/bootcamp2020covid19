import React,{useEffect, useState} from 'react'
//import Chart.js
import  {Line,Bar} from 'react-chartjs-2'
//import api from index.js file
import {AllCountry} from '../../api/index'
//import module.css file
import  styles from './Chart.module.css'


export const Chart = ({data:{confirmed,deaths,recovered},country}) => {
  // console.log(confirmed,deaths,recovered)


    let[dailyData,setDailData]=useState([])
    useEffect(() =>{
        async function fetchDailyData() {
            const data= await AllCountry()
            // console.log(data)
            setDailData(data)
        }
        // console.log(dailyData)
            fetchDailyData()
    },[])


    const LineChart = (
      dailyData !== 0 ?(  <Line
       data={{
        labels: dailyData.map(({date}) => date),
        
        datasets: [
          {
            label: 'INFECTED',
            data: dailyData.map(({confirmed}) => confirmed),
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#4DD637',
            borderColor: '#6EC72D',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3DBE29',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
          {
            label: 'Deaths',
            data: dailyData.map(({deaths}) => deaths),
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#DE4839',
            borderColor: '#BF3312',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#E21717',
            pointBackgroundColor: '#D82E2F',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
        ]
    }}
        />) : null
    );
//bar chart
const barChart=(
  confirmed ? ( <Bar
  data={{
      labels: ['Confirmed','Deaths',"Recovered"],
      datasets: [{
          label: 'Numebr OF People',
          backgroundColor: [
            '#EF5354',
            'rgba(128,0,0, 0.9)',
            'rgba(50,205,50,0.7)'
          ],
          data:[confirmed.value,deaths.value,recovered.value]

        }
      ]
    }}
    options={{
      legend:{display: false},
      title:{display: true, text: `Current state is ${country}`}
      
    }}
  /> 
    ): null
)

    return (
        <div className={styles.container}>
        {country ? barChart : LineChart}
        </div>
    )
}
