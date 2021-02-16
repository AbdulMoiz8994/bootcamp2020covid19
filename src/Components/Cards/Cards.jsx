import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import {Card,Grid} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//import count-up
import CountUp from 'react-countup'
//import css module
import styles from './Cards.module.css'

//external module class name
import ClassNames from 'classnames'

export  function Cards({data:{confirmed,deaths,recovered,lastUpdate}}) {
// console.log(data)
if(!confirmed){
    return "Loading..."
}
  return (
      <div className={styles.container}>

      <Grid container spacing={10}>

<Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card,styles.recovered)}>
    
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          Recovered
        </Typography>
        <Typography variant="h5" component="h2">
       <CountUp
         start={0}
         end= {recovered.value} 
         duration={2.5}
         separator=","      
       />
        </Typography>

        <Typography variant="body2" component="p">
          {new Date(lastUpdate).toDateString()}
        </Typography>

        <Typography variant="body2">
          Number of Recovered Cases of Covid-19
        </Typography>
      </CardContent>
      
   
    </Grid>

    <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card,styles.deaths)}>

      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          Deaths
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp
         start={0}
         end= {deaths.value} 
         duration={2.5}
         separator=","      
       />
        </Typography>

        <Typography variant="body2" component="p">
        {new Date(lastUpdate).toDateString()}

        </Typography>

        <Typography variant="body2">
          Number of Deaths Cases of Covid-19
        </Typography>
      </CardContent>    
    </Grid>



    <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card,styles.infected)}>

      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          Infected
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp
         start={0}
         end= {confirmed.value} 
         duration={2.5}
         separator=","      
       />
        </Typography>

        <Typography variant="body2" component="p">
        {new Date(lastUpdate).toDateString()}

        </Typography>

        <Typography variant="body2">
          Number of Active Cases of Covid-19
        </Typography>
      </CardContent>    
    </Grid>
    </Grid>
   </div>
  );
}


































// import React from 'react'

// export const Cards = ({data}) => {
//     console.log(data)
//     return (
//         <div>
//             <h1>This is Cards</h1>
//         </div>
//     )
// }
