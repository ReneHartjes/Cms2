import React from 'react'
import './Mainpagetext.css'
import {useState, useEffect } from 'react'

function Mainpagetext(props) {

    let [infotext, setinfotext] = useState({})
    let [infotextlang, setinfotextlang] = useState("eng")

    
    useEffect(()=>{
        setinfotextlang(localStorage.getItem("Lang"))
        if(props.lang){
            setinfotextlang(props.lang)
        
            fetchdata(props.lang)
        }
      
    }, [props.lang])
 

    async function fetchdata(infotextlang){
        fetch('http://164.90.160.246:8080/text/maintext/'+infotextlang)
     
        .then(res=>res.json())
        .then(json=>setinfotext(json)).then(console.log(infotext))
    }
    
  return (
    <div className='Mainpagetext-wrap'>
        <h2>{infotext[0]}</h2>
        <br />
        <p>{infotext[1]}</p>
        <br />
       <p>{infotext[2]}</p> 
      
    </div>
  )
}

export default Mainpagetext