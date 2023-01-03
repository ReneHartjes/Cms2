import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Header.css"
import globe from '../icons/globe.png'
import lupe from '../icons/LupeWeiss.png'
import home from '../icons/home.png'

function Header(props) {

    const [passw, setpassw]= useState("")
    const [login, setlogin]= useState("")
    const [menu22, setmenu22]= useState(false)
    const [searchres, setsearchres] = useState({data:[]})
    const [searchresdocs, setsearchresdocs] = useState({data:[]})
    const [searchresarr, setsearchresarr] = useState([])
    const [extracon, setextracon] = useState({data:[]})
    const [langoption, setlangoption] = useState("eng")
    const [headwords, setheadwords] =useState([])
    const [Productword, setProductword] =useState("")
    const [paramscount, setparamscount] =useState("en")
    const [SearchWordLe, setSearchWordLe] =useState()
    let [Docsword, setDocsword] =useState("")
    const [country, setcountry] =useState()
    let params = useParams()
    const [headwordsger, setheadwordsger] = useState([
        "Große Auswahl", "Schnelle Lieferung","Höchste Qualität", "Maximale Sicherheit","Fragen?Rufen Sie uns am:02822-915-69-0", "Benutzername", "Passwort", "Anmelden",
        "Suchen","SORTIMENT", "KONFIGURATOR", "INSPIRATION", "ÜBER UNS", "SERVICE", "Ausloggen","PRODUKT SUPPORT", "KONTAKT"
    ])




    const [headwordseng, setheadwordseng] = useState([
        "Wide System Range", "Quick Delivery","Top Quality Products", "Safety Promised","Questions? Call +1 714 259 1372", "Username", "Password", "Sign in",
        "Search","ASSORTMENT", "CONFIGURATOR", "INSPIRATION", "ABOUT US", "SERVICE", "Log out","PRODUCT SUPPORT", "CONTACT"
    ])

    useEffect(()=>{
        if(props.language){
        if(props.language.match("de")){ setheadwords(headwordsger)}else{ setheadwords(headwordseng)}}
    },[])


    useEffect(()=>{
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/texts?filters[title][$eq]=countries')
        .then(res=>res.json())
        .then(json=>{setextracon(json)}).then(()=>renderrest())

    },[])

    useEffect(()=>{


    },[])


    function renderrest(){

        if(extracon.data.length >0 ){
          
            return(
                <>
                    <div className='diffcounts'>
                        <div className='diffcounts-inner'>
                        {
                            extracon.data[0].attributes.details.data.map((attrib)=>(
                                   
                               
                                    <>
                                         <button onClick={()=>{changelang("de"+"§§"+attrib.code);setmenu22(false);}}>
                                            {attrib.name}

                                        </button>
                                    </>
                                
                            ))

                        }
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

    function changelang(e){
        if(e != localStorage.getItem("Lang")){
            let splitarr = e.split("§§")
            localStorage.setItem("Lang",splitarr[0])
            localStorage.setItem("Country",splitarr[1])
            props.lang(e)
         
            if(e.match("de")){ setheadwords(headwordsger)}else{ setheadwords(headwordseng)}
            window.location.replace("/"+splitarr[0]+"-"+splitarr[1])
        }
    }

    
    const Searching = (event) => {
        const searchWord = event.target.value;

        if(searchWord.length >= 3){
            setSearchWordLe(searchWord)
        
            showsuggest()
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/products?filters[description][$contains]='+searchWord)
            .then(res=>res.json())
            .then(json=>{setsearchres(json)}).then(()=>renderSuggest())

            fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+'en-gb'+'-documents?filters[filename][$contains]='+searchWord)
            .then(res=>res.json())
            .then(json=>{setsearchresdocs(json)}).then(()=>renderDocs())
        }

    }
    function showsuggest(){

        if(SearchWordLe.length > 2){
            {document.querySelector(".search-suggest").style ="display:block;"}
        }
       
        if( document.getElementById("suggest").classList.contains("hideMe") == true){
            document.getElementById("suggest").classList.remove("hideMe")
        }

        if( document.getElementById("suggest").classList.contains("bordery") == true){
            document.getElementById("suggest").classList.remove("bordery")
        }
    }

    function hidesuggest(){

        document.getElementById("suggest").classList.add("hideMe")
    }

    function setDocword(){
        if(searchresdocs.data.length > 0 ){
            return(
                <h2><span></span>Documents:</h2>
            )
        }else{
            return(
                <></>
            )
        }
    }

    
    function setProdword(){
        if(searchres.data.length > 0 ){
            return(
                <h2><span></span>Products:</h2>
            )
        }else{
            return(
                <></>
            )
        }
    }

    function renderDocs(){
        console.log(searchresdocs)

        if(searchresdocs.data.length > 5){
            let arr = searchresdocs
            arr.data = arr.data.slice(0,5)
            setsearchresdocs(arr)
        }
        if(!searchresdocs){
            return(
                <>
                </>
            )
        }else{
            
           try{
            return(
                <>
               <h2 id='docs'>{setDocword()}</h2>
               <ul className='Search-Docs-list'>
              {
             searchresdocs.data.map((statss, index) => (
              <li className='Search-Documents'> 
                <a href={statss.attributes.free1}><img src="https://as1.ftcdn.net/v2/jpg/04/17/28/20/1000_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg" width="80"/>{statss.attributes.filename}</a>
              </li>
          
             ))}
                </ul>
                </>
            )}catch{

            }
        }
    }


    function renderSuggest(){
        console.log(searchres)
        if(searchres.data.length > 10){
            let arr = searchres
            arr.data = arr.data.slice(0,9)
            setsearchres(arr)
        }
        if(!searchres){
            return(
                <>
                </>
            )
        }else{
            
           try{
            return(
                <>
              <h2 id='prods'>{setProdword()}</h2>
              <ul className='Search-Product-list'>
              {
             searchres.data.map((statss, index) => (
              <li className='Search-Products'> 
              <a href={'/'+params.count+'/products/'+statss.attributes.artid}>
              
                
                <img src={statss.attributes.imgurl} width="80"/>
              
              
                {statss.attributes.title}</a>
               
              </li>
          
             ))}
                </ul>
                </>
            )}catch{

            }
        }
    }

    function fireLogin(){
        localStorage.setItem("User", login)
        window.location.reload()
    }

    function logout(){
        localStorage.removeItem("User")
        window.location.reload()
    }

    function loginstate(){
        if(localStorage.getItem("User")){

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
        if(menu22 == true){
            setmenu22(false)

        }else{
            setmenu22(true)
        }
    }

let langdataamerica = [["Argentinia","Espanol","en"],["Brasil","Portugês","en"],["Canada","English","en"],["Canada","Francais","en"],["Chile","Espanol","en"],["México","Espanol","en"],
    ["Puerto Rico","Espanol","en"],["United States","English","en"],["Uruguay","Espanol","en"]
]

let langdataEurope = [["Österreich","Deutsch","de"],["Austria","Englisch","en"],["Belgien","Deutsch","de"],["Belgium","English","en"],["Belique","Francais","en"],["Finland","English","en"],
["France","Francais","fr"],["Deutschland","Deutsch","de"],["Nederland","Nederlands","en"],["Norway","English","en"],["United Kingdom","English","en"],["Schweiz","Deutsch","de"]
]

    function menu(){
        if(menu22){
            return(
                <div className='langtogglemenu'>
                    <button id="closelangsel" onClick={()=>setmenu22(false)}>X</button>
                    <div className='lang-button-wrapper'>
                        <div className='lang-dev-wrap'>
                        <h3>Africa</h3>
                        <div className='lang-row'>
                            <button onClick={()=>{changelang("en"+"§§"+"Egypt");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Egypt</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("de"+"§§"+"Marocco");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Marocco</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("en"+"§§"+"Maroc");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Maroc</h4>
                                    <p>Francais</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("en"+"§§"+"South Africa");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>South Africa</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                        </div>
                        </div>
                        <div className='lang-dev-wrap'>
                        <h3>Americas</h3>
                        <div className='lang-row'>
                        {
                        langdataamerica.map((statss, index) => (
                            <button onClick={()=>{changelang(statss[2]+"§§"+statss[0]);setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>{statss[0]}</h4>
                                    <p>{statss[1]}</p>
                                </div>
                            </div>
                            </button>
                        ))}
                        </div>
                        </div>
                        <div className='lang-dev-wrap'>
                        <h3>Europe</h3>
                        <div className='lang-row'>
                        {
                            langdataEurope.map((statss, index) => (
                            <button onClick={()=>{changelang(statss[2]+"§§"+statss[0]);setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>{statss[0]}</h4>
                                    <p>{statss[1]}</p>
                                </div>
                            </div>
                            </button>
                    
                        ))
                        }
                        </div>
                        </div>
                        <div className='lang-dev-wrap'>
                        <h3>Middle East</h3>
                        <div className='lang-row'>
                        <button onClick={()=>{changelang("de"+"§§"+"Saudi Arabia");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Saudi Arabia</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("de"+"§§"+"UAE");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>United Arab Em.</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>  
                        </div>
                        </div>
                    </div>
                    <div className='allcountries'>
                        <div className='allcountries-inner'>
                        <button onClick={()=>togglecounts()}>All Countries <p>&#10094;</p></button>
                        </div>
                    </div>
                    <div id="addcounts" className='hider'>
                       
                        <br />
                        {renderrest()}
                    </div>
                </div>
            )
        }else{
            return(
                <></>
            )
        }
    }


    function togglecounts(){
        console.log("cung")
        if(document.getElementById("addcounts").classList.contains("viewer")){
            document.getElementById("addcounts").classList.add("hider")
            document.getElementById("addcounts").classList.remove("viewer")
           
        }
        else{

            document.getElementById("addcounts").classList.add("viewer")
            document.getElementById("addcounts").classList.remove("hider")
        }
    }
/*Prep Url Params*/
    let systemurl;
    let mainpageurl;
    let serviceurl;
    let projectsurl
    let configurl

    if(params.count){
        systemurl = "/"+params.count+"/systems"
        mainpageurl = "/"+params.count
        serviceurl = "/"+params.count+"/service"
        projectsurl = "/"+params.count+"/projects"
        configurl = "/"+params.count+"/configurator"

    }else{
        systemurl ="/systems"
        mainpageurl = "/"
        serviceurl= "/service"
        projectsurl = "/projects"
        configurl = "/configurator"
    }   

    window.onscroll = function() {myscrollFunction()};
var navbar = document.getElementById("header");
var sticky = 60;
function myscrollFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let lanarr = [];
useEffect(()=>{

    lanarr = params.count.split("-")
    console.log(lanarr)
    setparamscount(lanarr[0])


},[])

  return (
   
    <div className='Header-wrap'>
    <div className='Header' id="header">
        <div className='Header-top'>


        </div>
        <div className='Header-mid'>
            <div className='Header-logo'>
            <a href={mainpageurl}><img src='https://www.q-railing.com/files/logo-q-railing.png' width="101"/></a>
            </div>
            <div className='Header-mid-search'>
                <input placeholder={"Search now.."}on onFocus={()=>showsuggest()} onBlur={()=>hidesuggest()}onChange={Searching} type="text"/><button id="search"><img src={lupe} /></button>
                <div className='search-suggest' id="suggest">
                    {renderSuggest()}
                
                    {renderDocs()}
                </div>
            </div>
            <div className='Header-usermenu'> 
            <ul className='Header-user-nav'>
            <li>
            <button className='Langselect' onClick={()=>togglelangselect()}>
            <img src={globe} width="32" height="32"/> <span>{paramscount}</span>
            </button>
            {menu()}
            </li><li id="logintab"><img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg" width="32" height="32"/>{loginstate()}</li>
            </ul>
            </div>
        </div>
        <div className='Header-bottom'>
            <ul><li ><a id="sortimentlink" href={systemurl}>{headwords[9]} <p>❮</p></a></li><li ><a href={configurl}>{headwords[10]}</a></li>
            <li><a href={projectsurl}>{headwords[11]}</a></li><li><a href={"/"+params.count+"/about"}>{headwords[12]}</a></li>
            <li><a href={serviceurl}>{headwords[13]}</a></li><li><a href={serviceurl}>{headwords[15]}</a></li><li><a href={serviceurl}>{headwords[16]}</a></li></ul>
        </div>
    </div>
    </div>
  )
}

export default Header