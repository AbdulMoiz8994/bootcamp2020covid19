import React,{useEffect} from 'react'

import {AllCountry} from '../../api/index'

export const Chart = () => {
    useEffect(() =>{
        async function fetchcountry() {
            const data= await AllCountry()
            console.log(data)
        }
            fetchcountry()
    },[])
    return (
        <div>
            <h1>This is Chart</h1>
        </div>
    )
}
