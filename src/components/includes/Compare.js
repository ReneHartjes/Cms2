import React from 'react'
import './Compare.css'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Compare(props) {

    let [infotext, setinfotext] = useState({data:[]})
    let [infotextlang, setinfotextlang] = useState("ger")

    let para = useParams()
    let la
    let arrla
    if(para.count){  la= para.count
    arrla = la.split("-") 
    }else{la="en"}
  



    useEffect(()=>{
      fetchdata(props.language)
    },[props.language])


    async function fetchdata(ee){
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+arrla[0]+'-texts?filters[filter][$eq]=mainpagetext')
        .then(res=>res.json())
        .then(json=>setinfotext(json)).then(()=>rendertable())
    }

    function rendertable(){
      if(infotext.data.length > 0){
        return(
          <>
          
          </>
        )
      }else{
        return(
          <></>
        )
      }
    }




    
  return (
    <div className='Mainpagetext-wrap'>
        {rendertable()}
    </div>
  )
}

export default Compare