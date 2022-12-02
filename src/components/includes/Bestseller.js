import React, { useEffect, useState } from 'react'
import './Bestseller.css'

function Bestseller(props) {

    let [bestseller, setbestseller] = useState([])
    useEffect(()=>{
        console.log(props.lang)
        fetch('http://localhost:8080/text/bestseller/'+props.lang)
        .then(res=>res.json())
        .then(json=>setbestseller(json))
    },[props.lang])
    console.log(bestseller)
  return (
    <div className='Bestseller'>

{
     
     bestseller.map((statss, index) => (
      <div className="Bestseller-card"> 
       <a href={statss.link}>
        <img src={statss.image} width="180px"></img>
        <h3>{statss.title}</h3>
       </a>
      </div>
  
     ))}


    </div>
  )
}

export default Bestseller