import React from 'react'
import './Mainpagetext.css'
import {useState, useEffect } from 'react'

function Mainpagetext(props) {

    let [infotext, setinfotext] = useState({})
    let [infotextlang, setinfotextlang] = useState("ger")


    useEffect(()=>{
      fetchdata(props.language)
    },[props.language])


    async function fetchdata(ee){
    
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[systemtitel][$eq]=mainpagetext&filters[language][$eq]='+ee.toLowerCase())
        .then(res=>res.json())
        .then(json=>setinfotext(json)).then(()=>lollol())
    }

    function lollol(){
      if(infotext.data){
        return(
          <>
          <h2>{infotext.data[0].attributes.title}</h2>
        <br />
        <p>{infotext.data[0].attributes.text1}</p>
        <br />
       <p>{infotext.data[0].attributes.text2}</p> 
      
          </>
        )
      }else{
  
        return(
          <>
          <h1>fetching</h1>
          </>
        )
      }
    }
    
  return (
    <div className='Mainpagetext-wrap'>
      {lollol()}

     
    </div>
  )
}

export default Mainpagetext