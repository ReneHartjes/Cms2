import React, { useEffect, useState } from 'react'
import "./Header.css"

function Header(props) {

    useEffect(()=>{
        changelang("GER")
      },[])
    const [passw, setpassw]= useState("")
    const [login, setlogin]= useState("")
    const [menu22, setmenu22]= useState(false)
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
        }
        if(localStorage.getItem("Lang") == "ENG"){
            setheadwords(headwordseng)
         
        }
    },localStorage.getItem("Lang"))

    function changelang(e){
        console.log(e)
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
    function togglelangselect(){
        console.log("aa")
        if(menu22 == true){
            setmenu22(false)

        }else{
            setmenu22(true)
        }

    }

    function menu(){
        if(menu22){
            return(
                <div className='langtogglemenu'>
                    <button onClick={()=>{changelang("GER");setmenu22(false)}}><img src="https://shop.de.q-railing.com/content/files/images/languages/1031.gif"/> Deutsch(Deutschland)</button>
                    <button onClick={()=>{changelang("ENG");setmenu22(false)}}><img src="https://shop.dk.q-railing.com/content/files/images/languages/2057.gif"/> English(GB)</button>
                    <button onClick={()=>{changelang("ENG");setmenu22(false)}}><img src="https://shop.de.q-railing.com/content/files/images/languages/1036.gif"/> Francais(France)</button>
                    <button onClick={()=>{changelang("GER");setmenu22(false)}}><img src="https://shop.de.q-railing.com/content/files/images/languages/1043.gif"/> Nederlands(Nederland)</button>
                </div>
            )
        }else{
            return(
                <></>
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
           <div> <ul className='Header-user-nav'>
            <li>
            <button onClick={()=>togglelangselect()}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYt_pU8wAiTPl5ffMcgcwNj7854hN17HZntw&usqp=CAU" width="16" height="16"/>
            </button>
            {menu()}
            </li><li>{headwords[4]}</li><li id="logintab"><img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg" width="16" height="16"/>{loginstate()}</li><li></li></ul></div>
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
            <ul><li><a href="/products">{headwords[9]}</a></li><li ><a href="/systems">{headwords[10]}</a></li><li>{headwords[11]}</li><li>{headwords[12]}</li><li>{headwords[13]}</li></ul>
        </div>
    </div>
    </div>
  )
}

export default Header