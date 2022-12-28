import React from 'react'
import './Newletterinvite.css'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function Newletterinvite(props) {


    let [infotext, setinfotext] = useState({data:[]})
    let [infotextlang, setinfotextlang] = useState("ger")
    let la;
    let arrla
    let [email, setemail] = useState("")
    let para = useParams()
    let [addcon, setaddcon] = useState()
    if(para.count){  la= para.count
      arrla = la.split("-") 
    }
    else
    {la="en"}

    useEffect(()=>{
      fetchdata(props.language)
    },[props.language])


    useEffect(()=>{
      addnewsletter()
    },[addcon])
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
                <button onClick={()=>{setaddcon(true)}}>{infotext.data[0].attributes.text2.toUpperCase()}</button>
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


    function addnewsletter(){
      if(addcon === true){
        return(
          <>
            <div className='Newsletterinvite'>
              
              <div className='Newsletterinvite-close'><button id="closenlinvite"onClick={()=>setaddcon(false)}>X</button></div>
              <div className='Newsletterinviter-inner'>
                <div className='Newsletterinviter-text'>
                  <h2>Newsletteranmeldung</h2>
                  <h3>JA – HALTEN SIE MICH AUF DEM LAUFENDEN</h3>
                  <p>Melden Sie sich für unseren monatlichen Newsletter an,
                    um von folgenden Vorteilen zu profitieren:
                  </p>
                  <ul>
                    <li className='Newsletter-text-list'><p className='Newsletter-text-entry'>Exklusive Angebote und Sonderaktionen</p></li>
                    <li className='Newsletter-text-list'><p className='Newsletter-text-entry'>Projekte und Inspirationen</p></li>
                    <li className='Newsletter-text-list'>Produktupdates</li>
                    <li className='Newsletter-text-list'>Praxisnahe Einblicke</li>
                    <li className='Newsletter-text-list'>Technische Spezifikationen und vieles mehr</li>
                  </ul>
 
                </div>
                <div className='Newsletterinviter-inputs'>
                <div>
              <label className='Formlabel'><p>Email: </p><input className='Forminputs' type="text" id="email" /></label>
              <label className='Formlabel'><p>Firma: </p><input className='Forminputs' type="text" id="comp" /></label>
              <label className='Formlabel' id="anrede"><p>Anrede: </p><label>Herr:<input className='Forminputs' type="checkbox" id="male" /></label><label>Female:<input className='Forminputs' type="checkbox" id="female" /></label></label>
              <label className='Formlabel'><p>Vorname: </p><input className='Forminputs' type="text" id="vname" /></label>
              <label className='Formlabel'><p>Nachname:</p> <input className='Forminputs' type="text" id="nname" /></label>
              <label className='Formlabel'><p>Postleitzahl:</p> <input className='Forminputs' type="text" id="plz" /></label>
            
                </div>
                <div className='Join'>
                <label className='Formlabel langlable'><p id="check1text">Ich habe die Q-railing Datenschutzerklärung gelesen und bin damit einverstanden.: </p><input className='Forminputs' type="checkbox" id="check1" /></label>
                <label className='Formlabel langlable'><p id="check2text">Ja, senden Sie mir Sonderangebote, die neuesten Updates sowie technische Details von Q-railing per E-Mail.: </p><input className='Forminputs' type="checkbox" id="check2" /></label>
                  <button onClick={()=>senddata()}>Jetzt abbonieren</button>
                </div>
                </div>
              </div>
            </div>
          </>
        )
      }else{
        return(
          <></>
        )
      }
    }

    function senddata(){
      let mail = document.getElementById("email")
      let comp = document.getElementById("comp")
      let male = document.getElementById("male")
      let female = document.getElementById("female")
      let vname = document.getElementById("vname")
      let nname = document.getElementById("nname")
      let plz = document.getElementById("plz")
      let accept1 = document.getElementById("check1")
      let accept2 = document.getElementById("check2")
      let checkval ="0"; 

      if(accept1.checked){
        console.log("yhahahah")
        console.log(mail.value)
        console.log(vname.value)
        let gender = ""
        if(male.checked){
          gender= "male"
        }
        if(female.checked){
          gender = "female"
        }
        let fname = vname.value+" "+ nname.value
        let mailval = mail.value
        let langval = arrla[0]
        let countval = arrla[1]
        let plzval = plz.value
        let data2 = comp.value
        if(accept2.checked){
          checkval = "1"
        }
        let reqbody = JSON.stringify({
          "data": {
            "titel": checkval,
            "filter": plzval,
            "email": mailval,
            "country": countval,
            "language": langval,
            "data1": fname,
            "data2":data2,
            "data3":gender
          }
        })
    
    
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: reqbody
          };
    
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/newsletters', requestOptions)
        .then(response => response.json()).then(setTimeout(()=>{
          
          let menu = document.querySelector(".Newsletterinvite")
          if(menu.classList.contains("slideaway")){
            menu.classList.remove("slideaway")
          }

          menu.classList.add("slideaway")

      
      },50))
        .then(data => this.setState({ postId: data.id })).then(setTimeout(()=>{setaddcon(false)},300));



      }
     else{
       document.getElementById("check1text").classList.add("checkfail")
      }
    

    }
    
  return (
   <> {lollol()}
   
   
   {addnewsletter()}
   </>

   
     
 
  )
  
}

export default Newletterinvite