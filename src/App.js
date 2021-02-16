import React,{useState,useEffect} from 'react'
import style from './App.module.css'

//import Components
// import {Cards} from './Components/Cards/Cards'
// import {Chart} from './Components/Chart/Chart'
// import {CountryPicker} from './Components/CountryPicker/CountryPicker'

//import all this components in single file in components/index.js
import {Cards,Chart,CountryPicker} from './Components/index'

//import api
import {Globalapi} from './api/index'



function App() {

let[data,setData]=useState({})
let[country,setCountry]=useState('')

useEffect(()=>{
  async function fetchData() {
    const data= await Globalapi()
    // console.log(data);
    setData(data)
  }
  fetchData()
  
},[])

const handleChangeCountry= async(countries) =>{
  // console.log(countries)
  let fetchedData;
    if(countries==='Global'){
    fetchedData= await Globalapi()
    }
    else{
      fetchedData= await Globalapi(countries)
    }
    setData(fetchedData)
    setCountry(countries)    
// console.log(fetchedData)

}
  return (
    <div className={style}>
    <Cards data={data} />
    <CountryPicker handleChangeCountry={handleChangeCountry}/>
   <Chart  data={data} country={country}/>
  
    </div>
  );
}

export default App;
