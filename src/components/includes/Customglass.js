import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Konfigurator.css'
import Header from './includes/Header';
import Footer from './includes/Footer';


function Customglass(props) {
  let [lang, setlang] = useState()
  let [count, setcount] = useState()
  let [globallang, setgloballang] = useState()
  const params =  useParams()
  let [language, setlanguage] = useState()
  let [dataarr, setdataarr] = useState({data:[]})

  const langset = (message) => {
      let arr = message.split("§§")
      setlang(arr[0])
      props.lang(message)
    };
    useEffect(()=>{    
       
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]=ger')
            .then(res=>res.json())
            .then(json=>{setdataarr(json);console.log(json)}).then(console.log(dataarr))
        
    },[])


    function showitems(propers){
        if(document.getElementById(propers).classList.contains("hidden")){
            document.getElementById(propers).classList.remove("hidden")
            document.getElementById(propers).classList.add("shown")
        }else{
            document.getElementById(propers).classList.remove("shown")
            document.getElementById(propers).classList.add("hidden")
        }
        
    }

function Fetchee(){
    if(dataarr.data.length > 0){


        return(
            <div className='Config-inner'>
            <div className='Config-left'>
            <div className='selector'>
            <label for="anzahl">Anzahl Glasscheiben:</label>
            <select name="anzahl" id="anzahl" onChange="montagechange()">
                <option value="1">1 Stk</option>
                <option value="2">2 Stk</option>
                <option value="3">3 Stk</option>
                <option value="4">4 Stk</option>
                <option value="5">Benutzerdefiniert</option>
              </select>
            </div>
            <div className='switcher'>    
            <h3>Bohrungen</h3>
             <label className="switch" id="glasswitch">
            <input type="checkbox" onChange={()=>showitems("bohren")} id="checkedval" />
            <span className="slider2 round"></span>
            </label>
            </div>
            <div className='Config-Ecken hidden' id="bohren">
                <div>
                <label class="container">
                <input id="handlauf" type="checkbox" onChange={()=>showitems("stanbohr")}  />
                <span class="checkmark"></span> Standard-Bohrung
                </label>
                </div>
                <div id="stanbohr" className='hidden'>
                    <label>Anzahl standard Bohrung(en):<input type="text"/></label>
                </div>
                <div>
                <label class="container">
                <input id="handlauf" type="checkbox" onChange={()=>showitems("tapbohr")}  />
                <span class="checkmark"></span> Senkloch-Bohrung
                </label>
                </div>
                <div id="tapbohr" className='hidden'>
                    <label>Anzahl standard Bohrung(en):<input type="text"/></label>
                </div>
            </div>



            <div className='selector'>
            <label for="Glastype">Glastype:</label>
            <select name="glastype" id="glastype" onChange="montagechange()">
                <option value="Milchglas">Milchglas</option>
                <option value="Sicherheitsglas">Sicherheitsglas</option>
                <option value="Mattglas">Mattglas</option>
                <option value="Reinforced">Reinforced glas</option>
                <option value="Normal">Normal</option>
              </select>
            </div>
            <div className='selector'>
            <label for="staerke">Materialstärke:</label>
            <select name="staerke" id="staerke" onChange="montagechange()">
                <option value="4">4 mm</option>
                <option value="5">5 mm</option>
                <option value="6">6 mm</option>
                <option value="8">8 mm</option>
                <option value="10">10 mm</option>
                <option value="12">12 mm</option>
                <option value="15">15 mm</option>
                <option value="19">19 mm</option>
              </select>
            </div>
            <div>
                <label>Höhe (in mm):
                    <input type="text" placeholder='75' />
                </label>
            </div>
            <div>
                <label>Breite (in mm):
                    <input type="text" placeholder='150' />
                </label>
            </div>
            <div className='switcher'>    
            <h3>Ecken</h3>
             <label className="switch" id="glasswitch">
            <input type="checkbox" onChange={()=>showitems("configecken")} id="checkedval" />
            <span className="slider2 round"></span>
            </label>
            </div>
            <div className='Config-Ecken hidden' id="configecken">
                <div>
                <label class="container">
                <input id="handlauf" type="checkbox" onChange={console.log("wsqeq")}  />
                <span class="checkmark"></span> Glasecke links oben
                </label>
                </div>
                <div>
                <label class="container">
                <input id="handlauf" type="checkbox" onChange={console.log("wsqeq")}  />
                <span class="checkmark"></span> Glasecke rechts oben
                </label>
                </div>
                <div>
                <label class="container">
                <input id="handlauf" type="checkbox" onChange={console.log("wsqeq")}  />
                <span class="checkmark"></span> Glasecke links unten
                </label>
                </div>
                <div>
                <label class="container">
                <input id="handlauf" type="checkbox" onChange={console.log("wsqeq")}  />
                <span class="checkmark"></span> Glasecke rechts unten
                </label>
                </div>
            </div>




            </div>
            
            <div className='Config-right'>
            <img src="data:image/jpg;base64,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"/>
            </div>
            </div>
        )
       
        
    }else{
        return(
            <>
            </>
        )
    }

}

    
  return (
  <>
    <Header lang={langset} language={props.language}></Header>
    <div className='page'>
    <div className='BannerWarp'>
    
    </div>
    <div className='page-wrap'>
    <div className='Config-cards'>
        
        <div>
            <img scr=""></img>
            <a href={"/"+params.count+"/configurator/glass"}>Glass</a>
        </div>
    </div>


    configurator:{params.title}

    <div className='Config-selects'>
       

        {Fetchee()}
    </div>

  </div>  
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Customglass