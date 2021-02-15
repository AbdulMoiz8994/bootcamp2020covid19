import axios from 'axios';



const url='https://covid19.mathdro.id/api';

// console.log(url)
export async function Globalapi() {
    try{
    const {data}= await axios.get(url)
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
    return data
    }
    catch(error){
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