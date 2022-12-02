import React, { useEffect, useState } from 'react'
import "./HeaderBlau.css"

function Headerblau(props) {

    useEffect(()=>{
        changelang("GER")
      },[])
    const [passw, setpassw]= useState("")
    const [login, setlogin]= useState("")
    const [lang, setlang]= useState([])
    const [langoption, setlangoption] = useState()
    const [headwords, setheadwords] =useState([])
    const [headwordsger, setheadwordsger] = useState([
        "Große Auswahl", "Schnelle Lieferung","Höchste Qualität", "Maximale Sicherheit","Fragen?Rufen Sie uns am:02822-915-69-0", "Benutzername", "Passwort", "Anmelden",
        "Suchen","PRODUKTE", "SYSTEME", "HIGHLIGHTS", "BESTSELLER", "%SALE", "Ausloggen"
    ])
    const [headwordseng, setheadwordseng] = useState([
        "Wide System Range", "Quick Delivery","Top Quality Products", "Safety Promised","Questions? Call +1 714 259 1372", "Username", "Password", "Sign in",
        "Search","PRODUCTS", "SYSTEMS", "HIGHLIGHTS", "BESTSELLER", "%SALE", "Log out"
    ])


    useEffect(() =>{
        console.log(localStorage.getItem("Lang") + "awsedqwd")

        if(localStorage.getItem("Lang") == "GER"){
            setheadwords(headwordsger)
            setlangoption(headwordsger)
        }
        if(localStorage.getItem("Lang") == "ENG"){
            setheadwords(headwordseng)
            setlangoption(headwordseng)
         
        }
    },localStorage.getItem("Lang"))

    function changelang(e){
        if(e == "GER" || e == "ENG"){
        
        if(e != localStorage.getItem("Lang")){
            localStorage.setItem("Lang",e)
            props.lang(e)
        }
      

   

        }
       
        
        console.log(localStorage.getItem("Lang"))
        
    }

    function fireLogin(){
        console.log(login)
        localStorage.setItem("User", login)
        window.location.reload()
    }

    function logout(){
        localStorage.removeItem("User")
        window.location.reload()
    }

    function loginstate(){
        if(localStorage.getItem("User")){
            console.log(localStorage.getItem("User"))
            return(
                <>
                <h3>hello {localStorage.getItem("User")}</h3>
                <button onClick={()=>logout()}>{headwords[14]}</button>
                </>
            )
        }else{
            return(
                <div className='loginpopup'>
                    <label >{headwords[5]}
                <input type="text" placeholder="username" name="username" onChange={(e)=>setlogin(e.target.value)}/></label>
                <label> {headwords[6]}:
                <input type="password" placeholder="password?" name="password" onChange={(e)=>setpassw(e.target.value)}/></label>
                <button onClick={()=>fireLogin()}>{headwords[7]}</button>
                </div>
            )
        }
    }




  return (
    <div className='Header-wrap'>
    <div className='Header'>
        <div className='Header-top'>
           <div> <ul className='Header-promise'><li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />{headwords[0]}</li>
           <li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />{headwords[1]}</li>
           <li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />{headwords[2]}</li>
           <li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />{headwords[3]}</li>
           </ul></div>
           <div> <ul className='Header-user-nav'><li><select onChange={(e)=>changelang(e.target.value)}>
            <option>{langoption}</option>
            <option>GER</option>
            <option>ENG</option>
            </select></li><li>{headwords[4]}</li><li id="logintab"><img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg" width="16" height="16"/>{loginstate()}</li><li></li></ul></div>
        </div>
        <div className='Header-mid'>
            <div>
            <a href="/"><img src='https://shop.de.q-railing.com/content/files/content/logo-q-railing.png'/></a>
            </div>
            <div className='Header-mid-search'>
                <input type="text"/><button>{headwords[8]}</button>
            </div>
            <div id="Header-mid-search-results"></div>
        </div>
        <div className='Header-bottom'>
            <ul><li><a href="/products">{headwords[9]}</a></li><li>{headwords[10]}</li><li>{headwords[11]}</li><li>{headwords[12]}</li><li>{headwords[13]}</li></ul>
        </div>
    </div>
    </div>
  )
}

export default HeaderBlau