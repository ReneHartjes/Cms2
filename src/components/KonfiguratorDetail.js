import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './KonfiguratorDetail.css'
import Header from './includes/Header';
import Footer from './includes/Footer';


function Konfigurator(props) {
  let [lang, setlang] = useState()
  let [count, setcount] = useState()
  let [globallang, setgloballang] = useState()
  const params =  useParams()
  let [language, setlanguage] = useState()
  let [bgimg, setbgimg] = useState("")
  let [val1, setval1] = useState(1000)
  let [val2, setval2] = useState(1000)
  let [val3, setval3] = useState(2500)
  let [dataarr, setdataarr] = useState({data:[]})
  let [stepcount, setstepcount] = useState(1)

  let [form, setform] = useState()
  let [line, setline] = useState()
  let [underg, setunderg] = useState()
  let [color, setcolor]  = useState()
  let [glassfill, setglassfill] = useState()
  let [handlauf, sethandlauf]  = useState()

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

    function nexter(intend){
        if(intend == 1){
        if(document.querySelector(".railchoice").classList.contains("hidden") == true){
            document.querySelector(".railchoice").classList.remove("hidden")
        }}
        if(intend == "easyalu" || intend == "easysmart" || intend =="easyup"){
            if(document.querySelector(".underchoice").classList.contains("hidden") == false){
                document.querySelector(".underchoice").classList.add("hidden")}
            if(document.querySelector(".glassfill").classList.contains("hidden") == false){
                document.querySelector(".glassfill").classList.add("hidden")}
            if(document.querySelector(".color").classList.contains("hidden") == false){
                document.querySelector(".color").classList.add("hidden")}
            if(document.querySelector(".railingtop").classList.contains("hidden") == false){
                document.querySelector(".railingtop").classList.add("hidden")} 
            if(document.querySelector(".underchoice").classList.contains("hidden") == true){
                document.querySelector(".underchoice").classList.remove("hidden")}
            if(document.querySelector(".underchoice").children[2].classList.contains("hidden") == true){
                    document.querySelector(".underchoice").children[2].classList.remove("hidden")
                    document.querySelector(".underchoice").children[3].classList.remove("hidden")
                }
            
            }
        if(intend == "easyup"){
            document.querySelector(".underchoice").children[2].classList.add("hidden")
            document.querySelector(".underchoice").children[3].classList.add("hidden")
        }
        if(intend == "uc"){
            if(line == "easyup" || line == "easysmart"){
                console.log(line)
                if(document.querySelector(".glassfill").classList.contains("hidden") == true){
                    document.querySelector(".glassfill").classList.remove("hidden")
                } 
                if(document.querySelector(".color").classList.contains("hidden") == false){
                    document.querySelector(".color").classList.add("hidden")
                } 
            }else{
                if(document.querySelector(".color").classList.contains("hidden") == true){
                    document.querySelector(".color").classList.remove("hidden")
                } 
            }
        }

        if(intend == "gf"){
            if(document.querySelector(".railingtop").classList.contains("hidden") == true){
                document.querySelector(".railingtop").classList.remove("hidden")
            } 
        }


        if(intend == "rt"){
            if(document.querySelector(".underchoice").classList.contains("hidden") == true){
                document.querySelector(".underchoice").classList.remove("hidden")
            }
            
        }
        if(intend == "cl"){
            if(document.querySelector(".underchoice").classList.contains("hidden") == true){
                document.querySelector(".underchoice").classList.remove("hidden")
            }
            
        }
    }

    function showbigitem(pops){
        let zval = document.querySelector(".Config-measure-z")
        let yval = document.querySelector(".Config-measure-y")
        let xval = document.querySelector(".Config-measure-x")

        let zvalm = document.querySelector(".Config-measure-z-menu")
        let yvalm = document.querySelector(".Config-measure-y-menu")
        let xvalm = document.querySelector(".Config-measure-x-menu")

        if(document.querySelector(".railchoice").classList.contains("hidden") == false){
            document.querySelector(".railchoice").classList.add("hidden")
        }
        if(document.querySelector(".underchoice").classList.contains("hidden") == false){
            document.querySelector(".underchoice").classList.add("hidden")
        }
        if(document.querySelector(".glassfill").classList.contains("hidden") == false){
            document.querySelector(".glassfill").classList.add("hidden")
        }
        if(document.querySelector(".railchoice-head").classList.contains("hidden") == false){
            document.querySelector(".railchoice-head").classList.add("hidden")
        }
        if(document.querySelector(".color").classList.contains("hidden") == false){
            document.querySelector(".color").classList.add("hidden")
        }
        if(document.querySelector(".railingtop").classList.contains("hidden") == false){
            document.querySelector(".railingtop").classList.add("hidden")
        }

        document.querySelector(".Config-measure-ov").classList.remove("hidden")
        if(!zval.classList.contains("hidden")){
            zval.classList.add("hidden")
        }
        if(!yval.classList.contains("hidden")){
            yval.classList.add("hidden")
        }
        if(!xval.classList.contains("hidden")){
            xval.classList.add("hidden")
        }

        if(!zvalm.classList.contains("hidden")){
            zvalm.classList.add("hidden")
        }
        if(!yvalm.classList.contains("hidden")){
            yvalm.classList.add("hidden")
        }
        if(!xvalm.classList.contains("hidden")){
            xvalm.classList.add("hidden")
        }

        if(pops == "i"){
            console.log("i")
            setbgimg("https://www.q-railing.com/files/i-shape-v1-thumb.png?t=1671606824")
            if(zval.classList.contains("hidden")){
                zval.classList.remove("hidden")
            }
            if(zvalm.classList.contains("hidden")){
                zvalm.classList.remove("hidden")
            }

        }
        if(pops == "u"){
            console.log("u")
            setbgimg("https://www.q-railing.com/files/u-shape-v1-thumb.png?t=1671606824")
            if(zval.classList.contains("hidden")){
                zval.classList.remove("hidden")
            }
            if(yval.classList.contains("hidden")){
                yval.classList.remove("hidden")
            }
            if(xval.classList.contains("hidden")){
                xval.classList.remove("hidden")
            }
            if(zvalm.classList.contains("hidden")){
                zvalm.classList.remove("hidden")
            }
            if(yvalm.classList.contains("hidden")){
                yvalm.classList.remove("hidden")
            }
            if(xvalm.classList.contains("hidden")){
                xvalm.classList.remove("hidden")
            }
            
        }
        if(pops == "l"){
            console.log("l")
            setbgimg("https://www.q-railing.com/files/l-shape-v1-thumb.png?t=1671606824")
            if(zval.classList.contains("hidden")){
                zval.classList.remove("hidden")
            }
            if(xval.classList.contains("hidden")){
                xval.classList.remove("hidden")
            }
            if(zvalm.classList.contains("hidden")){
                zvalm.classList.remove("hidden")
            }
            if(xvalm.classList.contains("hidden")){
                xvalm.classList.remove("hidden")
            }
        }
    }
function Fetchee(){
    if(dataarr.data.length > 0){


        return(
            <>
            <div className='Shape' id="shape">
                <button onClick={()=>{showbigitem("i");setform("i")}}><img src="https://www.q-railing.com/files/i-shape-v1-thumb.png?t=1671606824"/></button>
                <button onClick={()=>{showbigitem("u");setform("u")}}><img src="https://www.q-railing.com/files/u-shape-v1-thumb.png?t=1671606824"/></button>
                <button onClick={()=>{showbigitem("l");setform("l")}}><img src="https://www.q-railing.com/files/l-shape-v1-thumb.png?t=1671606824"/></button>
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

    
  return (
  <>
    <Header lang={langset} language={props.language}></Header>
    <div className='page'>
    <div className='BannerWarp'>
    



    configurator:{params.title}

    <div className='Config-selects'>
       

        {Fetchee()}
        <div className='Config-measure'>
            <div className='Config-measure-wrap'>
            <div className='Config-measure-x hidden'><div className='Config-measure-input-div'><p>{val1}mm</p><h6>Ihre Eingabe:</h6><input type="text" onChange={(e)=>{setval1(e.target.value);console.log(val1)}}value={val1}/></div></div>
            <div><img id="bigimg" src={bgimg} width="300"/></div>
            <div className='Config-measure-y hidden'><div className='Config-measure-input-div'><p>{val2}mm</p><h6>Ihre Eingabe:</h6><input type="text" onChange={(e)=>{setval2(e.target.value);console.log(val1)}}value={val2}/></div></div>
            </div>
       
        </div>
        <div className='Config-measure-z hidden'><div className='Config-measure-input-div'><p>{val3}mm</p><h6>Ihre Eingabe:</h6>
        <input type="text" onChange={(e)=>{setval3(e.target.value);console.log(val3)}}value={val3}/>
        </div></div>
        <div className='Config-measure-ov hidden'>
            <table>
                <tr className='Config-measure-x-menu hidden'>
                    <td>Ihre länge 1: </td><td className='Config-measure-table-val'>{val1} mm</td>
                </tr>
                <tr className='Config-measure-y-menu hidden'>
                    <td>Ihre länge 2: </td><td className='Config-measure-table-val'> {val2} mm</td>
                </tr>
                <tr className='Config-measure-z-menu hidden'>
                    <td>Ihre länge 3: </td><td className='Config-measure-table-val'> {val3} mm</td>
                </tr>
            </table>
            <div className='morebtn'> <button onClick={()=>nexter(1)}>Weiter</button></div>
        </div>
     
    </div>
    <div className='railchoice-head hidden'>
        <h2>Choose your Series</h2>
    </div>
    <div className='railchoice hidden'>
        <button onClick={()=>{nexter("easyup");setline("easyup")}}><div className='railchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/prod-icon-easyup.png" width="110"/></div><p>Easy Glass UP</p><span>the Up choice</span></button>
        <button onClick={()=>{nexter("easysmart");setline("easysmart")}}><div className='railchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/easy-glass-icon-mob.svg" width="110"/><p>Easy Glass SMART</p><span>the top choice</span></div></button>
        <button onClick={()=>{nexter("easyalu");setline("easyalu")}}><div className='railchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/easy-alu-icon.svg" width="110"/></div><p>Easy Alu</p><span>the Alu choice</span></button>
    </div>

    <div className='underchoice hidden'>
        <button onClick={()=>{nexter("uc");setunderg("1")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/mounting-top-wood.svg"/></div><p>Top-Mount : Wood</p></button>
        <button onClick={()=>{nexter("uc");setunderg("2")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/mounting-top-wall.svg"/><p>Top-Mount : Beton</p></div></button>
        <button onClick={()=>{nexter("uc");setunderg("3")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/mounting-side-wood.svg"/></div><p>Side-Mount : Wood</p></button>
        <button onClick={()=>{nexter("uc");setunderg("4")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/mounting-side-wall.svg"/></div><p>Side-Mount : Beton</p></button>
    </div>

    <div className='glassfill hidden'>
        <button onClick={()=>{nexter("gf");setglassfill("1")}}><div className='glassfill-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/glass-klart.svg"/></div><p>Clear Glass</p></button>
        <button onClick={()=>{nexter("gf");setglassfill("2")}}><div className='glassfill-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/glass-sotet.svg"/><p>Sotet Glass</p></div></button>
        <button onClick={()=>{nexter("gf");setglassfill("3")}}><div className='glassfill-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/glass-frostet.svg"/></div><p>Milky Glass</p></button>
    </div>

    <div className='railingtop hidden'>
        <button onClick={()=>{nexter("rt");sethandlauf("1")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/top-railing-round.svg"/></div><p>Round</p></button>
        <button onClick={()=>{nexter("rt");sethandlauf("2")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/top-railing-square.svg"/><p>Square</p></div></button>
        <button onClick={()=>{nexter("rt");sethandlauf("3")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/plugins/railings-configurator/public/img/top-railing-squarte-slim.svg"/></div><p>bulky</p></button>
    </div>
    
    <div className='color hidden'>
        <button onClick={()=>{nexter("cl");setcolor("1")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/uploads/2020/10/pattern-ral7016-150x150.png"/></div><p>Anrazith</p></button>
        <button onClick={()=>{nexter("cl");setcolor("2")}}><div className='underchoice-btn'><img src="https://smartrekkverk.no/wp-content/uploads/2020/10/pattern-alu-150x150.jpg"/><p>Brushed Aluminium</p></div></button>
    </div>

  </div>  
  </div>
  <Footer></Footer>
  </>
    
  )
}

export default Konfigurator