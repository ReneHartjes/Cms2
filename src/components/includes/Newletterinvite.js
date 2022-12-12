import React from 'react'
import './Newletterinvite.css'
import {useState, useEffect } from 'react'

function Newletterinvite(props) {


    let [infotext, setinfotext] = useState({data:[]})
    let [infotextlang, setinfotextlang] = useState("ger")


    useEffect(()=>{
      fetchdata(props.language)
    },[props.language])


    async function fetchdata(ee){
    
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[systemtitel][$eq]=newsletterinvite&filters[language][$eq]='+ee.toLowerCase())
        .then(res=>res.json())
        .then(json=>setinfotext(json)).then(()=>lollol())
    }

    function lollol(){
        console.log(infotext)
      if(infotext.data.length > 0){
        return(
          <>
            <div className='Newsletter-inner'>
            <div className='Newsletter-left'>
                <p >{infotext.data[0].attributes.titel2}</p>
                <br />
                <p className='Newsletter-title'></p>
            </div>
            <div className='Newsletter-right'>
                <div className='Newsletter-right-wrap'>
                <p>{infotext.data[0].attributes.text1}</p> 
                <br />
                <button>{infotext.data[0].attributes.text2.toUpperCase()}</button>
                </div>
            </div>
            </div>
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
    <div className='Newsletter-wrap'>

    {lollol()}
     
    </div>
  )
  
}

export default Newletterinvite