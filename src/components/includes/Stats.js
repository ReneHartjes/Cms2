import React from 'react'
import './Stats.css'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Stats() {
    let [infotext, setinfotext] = useState({data:[]})
    let para = useParams()
    let la
    let arrla
    if(para.count){  la= para.count
    arrla = la.split("-") 
    }else{la="en"}


    useEffect(()=>{
        fetchdata()
      },[])
  
  
      async function fetchdata(){
      
          fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+arrla[0]+'-texts?filters[filter][$eq]=weareqrailing')
          .then(res=>res.json())
          .then(json=>setinfotext(json)).then(()=>rendering())
      }

      function rendering(){

        if(infotext.data.length > 0){

            return(

                <>
                 <div className='Stats-wrapper'>
                            <div className='Stats-inner'>
            <div className='Stats-head'>
            <h2>{infotext.data[0].attributes.text1}</h2>
            <p>{infotext.data[0].attributes.text2}</p>
            </div>
            <div className='Stats-3col'>
                    <div className='Stats-1col'>
                        <h2>+20</h2>
                        <p>{infotext.data[0].attributes.titel1}</p>
                    </div>
                    <div className='Stats-1col'>
                        <h2>+250</h2>
                        <p>{infotext.data[0].attributes.titel2}</p>
                    </div>
                    <div className='Stats-1col'>
                        <h2>EN 1090-1</h2>
                        <p>{infotext.data[0].attributes.titel3}</p>
                    </div>
            </div>
        </div>
        </div>
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
        <>
        {rendering()}
        </>
  )
}

export default Stats