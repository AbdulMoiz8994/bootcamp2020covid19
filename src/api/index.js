import axios from 'axios';



const url='https://covid19.mathdro.id/api';

// console.log(url)
export async function Globalapi(country) {
// console.log(country)
    let ChangeUrl=url
    if(country){
        ChangeUrl=`${url}/countries/${country}`
    }
    try{
    const {data}= await axios.get(ChangeUrl)
    const modifyData={
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        lastUpdate: data.lastUpdate
    }
    // console.log(data);
    return modifyData
}
catch(error){
   return error
}
}


export async function AllCountry() {
    try{
    const {data}= await  axios.get(`${url}/daily`)    
      const modifyDailData= data.map((dailydata) =>({
          confirmed: dailydata.confirmed.total,
          deaths: dailydata.deaths.total,
          date: dailydata.reportDate
      }
     
      ))
    //   console.log(data);
      return modifyDailData
    }
    catch(error){
        return error
    }
}

export async function Countries() {
 try{
 const {data:{countries}}=await axios.get(`${url}/countries`)
//  console.log(countries)
    const modifyCountries=countries.map((country) => country.name)
   return modifyCountries
 }catch(error){
    return error
 }   
}
















































// export  const Globalapi= async() => {
//     try{   
//     const  resposne= await fetch(url)
//     const jsons=await resposne.json()
//     return jsons
//     }
//     catch(error){
//        return error

//     }
// }