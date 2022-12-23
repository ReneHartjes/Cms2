import React from 'react'
import './Newletterinvite.css'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Newletterinvite(props) {


    let [infotext, setinfotext] = useState({data:[]})
    let [infotextlang, setinfotextlang] = useState("ger")
    let la;
    let arrla
    let para = useParams()
    if(para.count){  la= para.count
      arrla = la.split("-") 
    }
    else
    {la="en"}

    useEffect(()=>{
      fetchdata(props.language)
    },[props.language])

    let paraa = useParams()



    async function fetchdata(ee){
    
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+arrla[0]+'-texts?filters[filter][$eq]=newsletterinvite')
        .then(res=>res.json())
        .then(json=>setinfotext(json)).then(()=>lollol())
    }

    function lollol(){
        console.log(infotext)
      if(infotext.data.length > 0){
        return(
          <>
          <div className='Newsletter-wrap'>
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
            </div></div>
          </>
        )
      }else{
  
        return(
          <>
     
          </>
        )
      }
    }
    
  return (
   <> {lollol()}</>

   
     
 
  )
  
}

export default Newletterinvite