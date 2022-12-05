import React, { useEffect, useState } from 'react'
import "./Header.css"

function Header(props) {

    const [passw, setpassw]= useState("")
    const [login, setlogin]= useState("")
    const [menu22, setmenu22]= useState(false)
    
    const [langoption, setlangoption] = useState("eng")
    const [headwords, setheadwords] =useState([])
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
            console.log("HeaderLang:"+e)
            if(e.match("GER")){ setheadwords(headwordsger)}else{ setheadwords(headwordseng)}
           
        }
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