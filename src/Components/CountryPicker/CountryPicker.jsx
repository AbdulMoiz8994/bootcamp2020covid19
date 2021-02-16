import React,{useState,useEffect} from 'react';
// import InputLabel from '@material-ui/core/InputLabel';
import {FormControl,NativeSelect} from '@material-ui/core';
// import Button from '@material-ui/core/Button';


//import Countrir api
import {Countries} from '../../api/index'

//import module style
import styles from './CountryPicker.module.css'

export const  CountryPicker=({handleChangeCountry})  =>{
    console.log(handleChangeCountry)
  const[datacountries,setdatacountries]=useState([])
useEffect(() =>{
  async function  fetchCountires() {
     const data=await Countries()
      console.log(data)    
      setdatacountries(data)
   }
   fetchCountires()
},[setdatacountries])



  return (
    <div className={styles.container}>
      <FormControl>
          <NativeSelect onChange={(e) => handleChangeCountry(e.target.value)}>
              <option value="Global">Global</option>
          {datacountries.map((Country,ind) =>{
         return( <option key={ind} value={Country}> 
          {Country} 
          </option>)
          })}
          </NativeSelect>      
      </FormControl>
    </div>
  );
}

