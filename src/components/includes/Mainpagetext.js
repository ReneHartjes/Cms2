import React from 'react'
import './Mainpagetext.css'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Mainpagetext(props) {

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
        .then(json=>setinfotext(json)).then(()=>lollol())
    }

    function lollol(){
      if(infotext.data.length > 0){
        return(
          <>
          <h2 id="mainpagetexttitle">{infotext.data[0].attributes.title}</h2>
        <br />
        <p>{infotext.data[0].attributes.text1}</p>
        <br />
       <p>{infotext.data[0].attributes.text2}</p> 
      
          </>
        )
      }else{
  
        return(
          <>
  
          </>
        )
      }
    }



  function renderimgs(){


    if(infotext.data.length > 0){
      return(
        <>
        
        <div className='Mainpagetext-icons'>
        <div></div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/phoneicon.png?t=1671533104" width={60}/>
        <h5>{infotext.data[0].attributes.details.data[0][0]}</h5>
        <p>{infotext.data[0].attributes.details.data[0][1]}</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/mailicon.png?t=1671532185" width={60}/>
        <h5>{infotext.data[0].attributes.details.data[1][0]}</h5>
        <p>{infotext.data[0].attributes.details.data[1][1]}</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/mailicon.png?t=1671532185" width={60}/>
        <h5>{infotext.data[0].attributes.details.data[2][0]}</h5>
        <p>{infotext.data[0].attributes.details.data[2][1]}</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/phoneicon.png?t=1671533104" width={60}/>
        <h5>{infotext.data[0].attributes.details.data[3][0]}</h5>
        <p>{infotext.data[0].attributes.details.data[3][1]}</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/mailicon.png?t=1671532185" width={60}/>
        <h5>{infotext.data[0].attributes.details.data[4][0]}</h5>
        <p>{infotext.data[0].attributes.details.data[4][1]}</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/phoneicon.png?t=1671533104" width={60}/>
        <h5>{infotext.data[0].attributes.details.data[5][0]}</h5>
        <p>{infotext.data[0].attributes.details.data[5][1]}</p>
      </div>
      <div></div>
      </div>


      <div className='Mainpagetext-btns'>
      <button id="aboutbtn">
      {infotext.data[0].attributes.titel2}
      </button>
      <button id="productsbtn">
      {infotext.data[0].attributes.titel3}
      </button>
      </div>
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
      <div className='Mainpagetext-inner'>
         {lollol()}
      </div>
        {renderimgs()}
    </div>
  )
}

export default Mainpagetext