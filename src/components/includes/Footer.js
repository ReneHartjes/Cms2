import React, { useEffect, useState } from 'react'
import './Footer.css'

function Footer(props) {
 

let [langstate, setlangstate] = useState({data:[]});
let [values, setvalues] = useState([]);
let [addr, setaddr] = useState()
let valarr = [];
let valarr2 = [];
let valarr3 = [];
useEffect(()=>{

  fetcher()

},[])


  useEffect(()=>{

    fetcher()

  },[props.language])

  function fetcher(){
    if(props.language){
    fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[systemtitel][$eq]=footer&filters[language][$eq]='+props.language.toLowerCase())
    .then(res=>res.json())
    .then(json=>setlangstate(json)).then(()=>footerrender())}
    else{
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[systemtitel][$eq]=footer&filters[language][$eq]=ger')
      .then(res=>res.json())
      .then(json=>setlangstate(json)).then(()=>footerrender()).then(()=> footrenderaddr())
    }
  }

  function footerrender(){
    if(langstate.data.length > 0){
      console.log(langstate)
      let data1 = langstate.data[0].attributes.text1.split("§§")
      let data2 = langstate.data[0].attributes.text2.split("§§")
   

      for (let i = 0; i < data1.length; i++) {
        let returnval = data1[i].split("||")
        valarr.push([returnval[0],returnval[1]])
      }

      for (let i = 0; i < data2.length; i++) {
        let returnval = data2[i].split("||")
        valarr2.push([returnval[0],returnval[1]])
      }


      footrenderaddr()
      footrenderprods()
      return(
        <>
         
          <ul id="Footer-block1">
          {
     
     valarr.map((statss, index) => (
      <li> 
        <a href={statss[1]}>{statss[0]}</a>
      </li>
  
     ))}
            </ul>

            
        </>
      )



    }else{
      return(
        <>
 
        </>
      )
    }
  }

  function footrenderprods(){

    return(
      <ul id="Footer-block2">
      {
             valarr2.map((statss, index) => (
              <li> 
                <a href={statss[1]}>{statss[0]}</a>
              </li>
          
             ))}
    </ul>
    )
  }

  function footrenderaddr(){
    if(langstate.data.length > 0){
    return(
      <ul id="Footer-block3">
      {
              langstate.data[0].attributes.details.data.map((statss, index) => (
                <>
              <ul className='Footer-Addressblock'> 
                
                 <li> {statss}</li>
                 <li> {statss[1]}</li>
                 <li> {statss[2]}</li>
                 <li> {statss[3]}</li>
                 <li> {statss[4]}</li>
                 <li> {statss[5]}</li>
                 <li> {statss[6]}</li>
              </ul>
              <br />
              
              </>
          
             ))}
             
    </ul>
    )
  }
  }

  return (
    <div className='Footer-wrap'>
      <div className='Footer-inner'>
      
      <div className='Footer-top'>
      
        <div className='Footer-Links'>
    
            {footerrender()}
            {footrenderprods()}
           
            
        </div>
        <div className='Footer-Address'>
          <div className='Footer-Logo'>
        <img src="https://www.q-railing.com/files/q-railing-logo.jpg" id="footerlogo" width={133} height="35"/>
        </div>
        {footrenderaddr()}
        </div>
      </div>
      <div className='Footer-bot'>
        <ul className='Footer-bot-links'>
          <li><a href="/systems">Online Shop</a></li>
          <li><a href="/systems">Datenschutzerklärung</a></li>
          <li><a href="/systems">Impressum</a></li>
          <li><a href="/systems">AGB</a></li>
          <li><a href="/systems">© 2006 - 2022 Q-railing</a></li>
          
        </ul>
        <ul className='Footer-icons'>
          <li><a><img width={35} height={35} src='https://www.q-railing.com/files/icon-linkedin.png'/></a></li>
          <li><a><img width={35} height={35} src='https://www.q-railing.com/files/icon-istagram-1.png'/></a></li>
          <li><a><img width={35} height={35} src='https://www.q-railing.com/files/icon-facebook.png'/></a></li>
          <li><a><img width={35} height={35} src='https://www.q-railing.com/files/icon-twitter.png'/></a></li>
          <li><a><img width={35} height={35} src='https://www.q-railing.com/files/icon-youtube.png'/></a></li>
          <li><a><img width={35} height={35} src='https://www.q-railing.com/files/icon-whatsapp-1.png'/></a></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer