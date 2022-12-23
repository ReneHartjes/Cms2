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
    
  return (
    <div className='Mainpagetext-wrap'>
      <div className='Mainpagetext-inner'>
         {lollol()}
      </div>
      <div className='Mainpagetext-icons'>
        <div></div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/phoneicon.png?t=1671533104" width={60}/>
        <h5>Persönliche Beratung</h5>
        <p>Telefon, Whatsapp und Email</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/mailicon.png?t=1671532185" width={60}/>
        <h5>Verfügbarkeit</h5>
        <p>Unserer Produkte</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/mailicon.png?t=1671532185" width={60}/>
        <h5> > 6 Mio</h5>
        <p>Artikel auf Lager</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/phoneicon.png?t=1671533104" width={60}/>
        <h5>Kurze Versandzeiten</h5>
        <p>i.d.R. 24h Lieferung</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/mailicon.png?t=1671532185" width={60}/>
        <h5>CE-Zertifizierung</h5>
        <p>nach DIN EN 1090</p>
      </div>
      <div className='Mainpagetext-icons-card'>
        <img src="https://www.q-railing.com/files/phoneicon.png?t=1671533104" width={60}/>
        <h5>Geprüfte Qualität</h5>
        <p>durch Materialkontrolle</p>
      </div>
      <div></div>
      </div>


      <div className='Mainpagetext-btns'>
      <button id="aboutbtn">
        More about us
      </button>
      <button id="productsbtn">
       About Product quality
      </button>
      </div>

     
    </div>
  )
}

export default Mainpagetext