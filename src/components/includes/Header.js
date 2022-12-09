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
    const [searchres, setsearchres] = useState()
    const [searchresdocs, setsearchresdocs] = useState({data:[]})
    const [searchresarr, setsearchresarr] = useState([])
    const [langoption, setlangoption] = useState("eng")
    const [headwords, setheadwords] =useState([])
    const [Productword, setProductword] =useState("")
    let [Docsword, setDocsword] =useState("")
    const [country, setcountry] =useState()
    const [headwordsger, setheadwordsger] = useState([
        "Große Auswahl", "Schnelle Lieferung","Höchste Qualität", "Maximale Sicherheit","Fragen?Rufen Sie uns am:02822-915-69-0", "Benutzername", "Passwort", "Anmelden",
        "Suchen","PRODUKTE", "SYSTEME", "HIGHLIGHTS", "BESTSELLER", "%SALE", "Ausloggen"
    ])
    const [headwordseng, setheadwordseng] = useState([
        "Wide System Range", "Quick Delivery","Top Quality Products", "Safety Promised","Questions? Call +1 714 259 1372", "Username", "Password", "Sign in",
        "Search","PRODUCTS", "SYSTEMS", "HIGHLIGHTS", "BESTSELLER", "%SALE", "Log out"
    ])

    useEffect(()=>{
        if(props.language){
        if(props.language.match("GER")){ setheadwords(headwordsger)}else{ setheadwords(headwordseng)}}
    },[])

    function changelang(e){
        if(e != localStorage.getItem("Lang")){
            let splitarr = e.split("§§")
            localStorage.setItem("Lang",splitarr[0])
            localStorage.setItem("Country",splitarr[1])
            props.lang(e)
         
            if(e.match("GER")){ setheadwords(headwordsger)}else{ setheadwords(headwordseng)}
            window.location.replace("/"+splitarr[0]+"-"+splitarr[1])
        }
    }
    const params =  useParams()
    
    const Searching = (event) => {
        const searchWord = event.target.value;
        if(searchWord.length >= 3){
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/products?filters[description][$contains]='+searchWord)
            .then(res=>res.json())
            .then(json=>{setsearchres(json)}).then(()=>renderSuggest())

            fetch('https://squid-app-9h43v.ondigitalocean.app/api/documents?filters[title][$contains]='+searchWord)
            .then(res=>res.json())
            .then(json=>{setsearchresdocs(json)}).then(()=>renderDocs())
        }

    }


    function setDocword(){
        if(searchresdocs.data.length > 0 ){
            return(
                <h2>Documents</h2>
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
                <h2>Products</h2>
            )
        }else{
            return(
                <></>
            )
        }
    }

    function renderDocs(){
        console.log(searchresdocs)
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
                <a href={statss.attributes.free1}><img src="https://as1.ftcdn.net/v2/jpg/04/17/28/20/1000_F_417282083_X0pybvfs7bqvoNjDOjM3iDklGJ3lTU4q.jpg" width="80"/>{statss.attributes.title}.pdf</a>
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

let langdataamerica = [["Argentinia","Espanol","ENG"],["Brasil","Portugês","ENG"],["Canada","English","ENG"],["Canada","Francais","ENG"],["Chile","Espanol","ENG"],["México","Espanol","ENG"],
    ["Puerto Rico","Espanol","ENG"],["United States","English","ENG"],["Uruguay","Espanol","ENG"]
]

let langdataEurope = [["Österreich","Deutsch","GER"],["Austria","Englisch","ENG"],["Belgien","Deutsch","GER"],["Belgium","English","ENG"],["Belique","Francais","ENG"],["Finland","English","ENG"],
["France","Francais","ENG"],["Deutschland","Deutsch","GER"],["Nederland","Nederlands","ENG"],["Norway","English","ENG"],["United Kingdom","English","ENG"],["Schweiz","Deutsch","GER"]
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
                            <button onClick={()=>{changelang("GER"+"§§"+"Egypt");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Egypt</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("ENG"+"§§"+"Marocco");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Marocco</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("GER"+"§§"+"Maroc");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Maroc</h4>
                                    <p>Francais</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("ENG"+"§§"+"South Africa");setmenu22(false);}}>
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
                        <button onClick={()=>{changelang("GER"+"§§"+"Saudi Arabia");setmenu22(false);}}>
                            <div className='lang-card'>
                                <img src="https://icons.veryicon.com/png/o/weather/2px-linear-icon/landmark.png"  />
                                <div>
                                    <h4>Saudi Arabia</h4>
                                    <p>English</p>
                                </div>
                            </div>
                            </button>
                            <button onClick={()=>{changelang("GER"+"§§"+"UAE");setmenu22(false);}}>
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
                </div>
            )
        }else{
            return(
                <></>
            )
        }
    }

/*Prep Url Params*/
    let systemurl;
    let mainpageurl;

    if(params.count){
        systemurl = "/"+params.count+"/systems"
        mainpageurl = "/"+params.count
    }else{
        systemurl ="/systems"
        mainpageurl = "/"
    }   

  return (
   
    <div className='Header-wrap'>
    <div className='Header'>
        <div className='Header-top'>


        </div>
        <div className='Header-mid'>
            <div className='Header-logo'>
            <a href={mainpageurl}><img src='https://www.q-railing.com/files/2200076-qr-instagram-320x320.jpg' width="101"/></a>
            </div>
            <div className='Header-mid-search'>
                <input on onFocus={()=>{document.querySelector(".search-suggest").style ="display:block;"}} onChange={Searching} type="text"/><button id="search"><img src={lupe} /></button>
                <div className='search-suggest'>
                    {renderSuggest()}
                    {renderDocs()}
                </div>
            </div>
            <div className='Header-usermenu'> 
            <ul className='Header-user-nav'>
            <li>
            <button className='Langselect' onClick={()=>togglelangselect()}>
            <img src={globe} width="32" height="32"/> <span>{props.language}</span>
            </button>
            {menu()}
            </li><li id="logintab"><img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg" width="32" height="32"/>{loginstate()}</li>
            </ul>
            </div>
        </div>
        <div className='Header-bottom'>
            <ul><li><a href={mainpageurl}><img width={24} src={home}/></a></li><li ><a href={systemurl}>{headwords[10]}</a></li><li>{headwords[11]}</li><li>{headwords[12]}</li><li>{headwords[13]}</li></ul>
        </div>
    </div>
    </div>
  )
}

export default Header