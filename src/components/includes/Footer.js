import React, { useEffect, useState } from 'react'
import './Footer.css'

function Footer(props) {
 

let [langstate, setlangstate] = useState();
let [values, setvalues] = useState([]);
let valarr = [];
let valarr2 = [];
let valarr3 = [];
useEffect(()=>{
  console.log("prefetch:"+"ger")
  fetcher()

},[])


  useEffect(()=>{
    console.log("prefetch:"+props.language)
    fetcher()

  },[props.language])

  function fetcher(){
    if(props.language){
    fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[systemtitel][$eq]=footer&filters[language][$eq]='+props.language.toLowerCase())
    .then(res=>res.json())
    .then(json=>setlangstate(json)).then(console.log(langstate)).then(()=>footerrender())}
    else{
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[systemtitel][$eq]=footer&filters[language][$eq]=ger')
      .then(res=>res.json())
      .then(json=>setlangstate(json)).then(console.log(langstate)).then(()=>footerrender()).then(()=> footrenderaddr())
    }
  }

  function footerrender(){


    

    if(langstate){
      console.log(langstate)
      let data1 = langstate.data[0].attributes.text1.split("§§")
      let data2 = langstate.data[0].attributes.text2.split("§§")
      let data3 = langstate.data[0].attributes.attributes.split("§§")

      for (let i = 0; i < data1.length; i++) {
        let returnval = data1[i].split("||")
        valarr.push([returnval[0],returnval[1]])
      }

      for (let i = 0; i < data2.length; i++) {
        let returnval = data2[i].split("||")
        valarr2.push([returnval[0],returnval[1]])
      }

      for (let i = 0; i < data3.length; i++) {
        let returnval = data3[i].split("||")
        valarr3.push([returnval[0],returnval[1]])
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
    console.log("called")
    console.log(valarr3)
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
    return(
      <ul id="Footer-block3">
      {
             valarr3.map((statss, index) => (
              <li> 
                <a href={statss[1]}>{statss[0]}</a>
              </li>
          
             ))}
    </ul>
    )
  }

  return (
    <div className='Footer-wrap'>
      <div className='Footer-inner'>
      <img src="https://www.q-railing.com/files/q-railing-logo.jpg" id="footerlogo" width={133} height="35"/>
      <div className='Footer-top'>
      
        <div className='Footer-Links'>
    
            {footerrender()}
            {footrenderprods()}
           
            
        </div>
        <div className='Footer-Address'>
        {footrenderaddr()}
        </div>
      </div>
      <div className='Footer-bot'>

      </div>
      </div>
    </div>
  )
}

export default Footer