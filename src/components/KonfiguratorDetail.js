import { useContext, useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './KonfiguratorDetail.css'
import Header from './includes/Header';
import Footer from './includes/Footer';
import {motion, AnimatePresence} from "framer-motion"


function Konfigurator(props) {
  let [lang, setlang] = useState()
  let [count, setcount] = useState()
  let [globallang, setgloballang] = useState()
  const params =  useParams()
  let [language, setlanguage] = useState()

  let [val1, setval1] = useState(1000)
  let [val2, setval2] = useState(1000)
  let [val3, setval3] = useState(2500)
  let[xpos, setxpos]= useState()
  let[ypos, setypos] = useState()

  let[last, setlast] = useState("")
    
    let [linecount , setlinecount] = useState(0)
    let[linearr, setlinearr] = useState([])
  let[lastx,setlastx] = useState()
  let[lasty, setlasty] = useState()
  let [canvasrender,setcanvasrender] = useState(false)
  let [dataarr, setdataarr] = useState({data:[]})
  let [ Trigger, setTrigger] = useState("")
    let lines = [];
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
       
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/de-texts?filters[title][$eq]=EasyGlassSmartConfig')
            .then(res=>res.json())
            .then(json=>{setdataarr(json);console.log(json)}).then(console.log(dataarr))
        
    },[])

    useEffect(()=>{    
        setcanvasrender(true)
        rendercanvas()
    },[])

    useEffect(()=>{    
        rectify(xpos,ypos)
    },[xpos, ypos])

    useEffect(()=>{
        setlabels()
    },[linearr])









    function setlabels(){
        for (let i = 0; i < linearr.length; i++) {
            
            if(i > 2){
                i = 2
            }
            document.getElementById("SetMeasure"+[i+1]).style.left = linearr[i][0] + "px"
            document.getElementById("SetMeasure"+[i+1]).style.top = linearr[i][1] + "px"
        }
    }

    useEffect(()=>{    
        setcanvasrender(true)
        canvasdraw()
    },[document.getElementById("measurementscanvas")])



    function rectify(x, y){

        let xs = x
        let ys = y

        if(x>0 && x < 50){
            setxpos(25)
        }
        
        if(x>50 && x < 100){
            setxpos(75)
        }
        if(x>100 && x < 150){
            setxpos(125)
        }
        if(x>150 && x< 200){
            setxpos(175)
        }
        if(x>200 && x< 250){
            setxpos(225)
        }
        if(x>250 && x < 300){
            setxpos(275)
        }
        if(x>300 && x < 350){
            setxpos(325)
        }
        if(x>350 && x < 400){
            setxpos(375)
        }
        if(x>400 && x < 450){
            setxpos(425)
        }
        if(x>450 && x < 500){
            setxpos(475)
        }
        if(x>500 && x < 550){
            setxpos(525)
        }
        if(x>550 && x < 600){
            setxpos(575)
        }

        if(y>0 && y < 50){
            setypos(25)
        }
        
        if(y>50 && y < 100){
            setypos(75)
        }
        if(y>100 && y < 150){
            setypos(125)
        }
        if(y>150 && y< 200){
            setypos(175)
        }
        if(y>200 && y< 250){
            setypos(225)
        }
        if(y>250 && y < 300){
            setypos(275)
        }
        if(y>300 && y < 350){
            setypos(325)
        }
        if(y>350 && y < 400){
            setypos(375)
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



function Fetchee(){
    console.log("Hi")
    if(dataarr.data.length > 0){
        console.log(dataarr)
        console.log("hi")

        if(dataarr.data[0].attributes.details.data[linecount][0] == "3Button"){

        return(
            <> 
            <section id="btn3" className={'choicediv slidee'}>
                <button onClick={()=>{setline("easyup");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][1][0]} width="110"/></div><p>Easy Glass UP</p><span>the Up choice</span></button>
                <button onClick={()=>{setline("easysmart");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][2][0]} width="110"/><p>Easy Glass SMART</p><span>the top choice</span></div></button>
                <button onClick={()=>{setline("easyalu");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][3][0]} width="110"/></div><p>Easy Alu</p><span>the Alu choice</span></button>                                                              
            </section>
            </>
        )
    
    
        }
        
        if(dataarr.data[0].attributes.details.data[linecount][0] == "4Button"){
            return(
                <>
        
            <div id="btn4"  className={'choicediv slidee'} >
                <button onClick={()=>{setline("easyup");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][1][0]} width="110"/></div><p>Easy Glass UP</p><span>the Up choice</span></button>
                <button onClick={()=>{setline("easysmart");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][2][0]} width="110"/><p>Easy Glass SMART</p><span>the top choice</span></div></button>
                <button onClick={()=>{setline("easyalu");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][3][0]} width="110"/></div><p>Easy Alu</p><span>the Alu choice</span></button>
                <button onClick={()=>{setline("easyalu");setlinecount(linecount = linecount + 1)}}><div className='railchoice-btn'><img src={dataarr.data[0].attributes.details.data[linecount][3][0]} width="110"/></div><p>Easy Alu</p><span>the Alu choice</span></button>
               
            </div>
          
                </>
        )}
        
       
        
    }else{
        return(
            <>

            </>
        )
    }

}


function canvasdraw(){
    console.log("log")
    if(canvasrender == true){
    let canvass = document.getElementById("measurementscanvas")
    if (!canvass.getContext) {
        return;
    }else{
    let cancontext = canvass.getContext("2d")
    var rect = canvass.getBoundingClientRect();
    cancontext.beginPath();
    cancontext.stroke();
    cancontext.lineWidth = 5;
    cancontext.closePath();}
    if(linearr.length > 2){
        return(
            <></>
        )
    }
    
    canvass.addEventListener("click", function (evt) {
        var mousePos = getMousePos(canvass, evt);
        setxpos(mousePos.x)
        setypos(mousePos.y)
 
        console.log(mousePos.x + ',' + mousePos.y + "CLICKER");
        rectify(mousePos.x, mousePos.y)
    }, false);

    if(xpos > 0){
        let canvass = document.getElementById("measurementscanvas")
        let cancontext = canvass.getContext("2d")
        cancontext.beginPath();
        
        cancontext.arc(xpos, ypos, 20, 0, 2 * Math.PI);

        if(lastx){
            cancontext.moveTo(xpos, ypos);
            cancontext.lineTo(lastx, lasty);
          

      
            let changemaxx = xpos - lastx
            let changemaxy = ypos - lasty
            
            let diffx = Math.abs(changemaxx)
            let diffy = Math.abs(changemaxy)

           console.log(diffy, diffx)

            let labelposx = Math.abs(lastx - (diffx/2))
            let labelposy = Math.abs(lasty + (diffy/2))

            

            console.log(lastx,xpos )
            console.log(lastx,xpos )
            console.log(lastx,xpos )
            console.log(lasty,ypos )
            console.log(lasty,ypos )
            console.log(lasty,ypos )
            
            let finallabelx= Math.abs(changemaxx)/2
            let finallabely= Math.abs(changemaxx)/2


            setlinearr(linearr =>[...linearr,[labelposx,labelposy]])

            setlabels()
            console.log(linearr)
            console.log(linearr)
            console.log(linearr)
            console.log(linearr)
            console.log(linearr)

            console.log(diffx)
            console.log(diffy)

            console.log(changemaxx + " +++++++++" + changemaxy)
        }



        setlastx(xpos)
        setlasty(ypos)
        cancontext.stroke()
    }
}
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function verifylines(){


    if( document.querySelector(".Config-measure-ov").classList.contains("hidden")){
        document.querySelector(".Config-measure-ov").classList.remove("hidden")
       }
    for (let i = 0; i < linearr.length; i++) {
        
       if( document.getElementById("tablemeasure"+i).classList.contains("hidden")){
        document.getElementById("tablemeasure"+i).classList.remove("hidden")
       }
    }
}

function rendercanvas(){
    if(canvasrender == true){
    return(
        <>        <div className='canvasdiv'>
                 <canvas onClick={()=>canvasdraw()}id="measurementscanvas" width="800" height="600"></canvas>

                 <div id='SetMeasure1'>
                    <input type="text" placeholder='in mm' onChange={(e)=>{setval1(e.target.value);}} onBlur={()=>{if(document.querySelector(".Config-measure-x-menu").classList.contains("hidden"))
                 {document.querySelector(".Config-measure-x-menu").classList.remove("hidden")}}}/>
                    </div>    
                <div id='SetMeasure2'>
                    <input type="text" placeholder='in mm'onChange={(e)=>{setval2(e.target.value);}}/>
                    </div>    
                <div id='SetMeasure3'>
                    <input type="text" placeholder='in mm'onChange={(e)=>{setval3(e.target.value);}}/>
                    </div>     
                    
                 </div>  
                 

                 <button onClick={()=>{verifylines()}}>Schritt 2</button>   
        </>
    )}else{
        return(
            <></>
        )
    }
}

function slidefk(){
    if(document.getElementById("btn3")){document.getElementById("btn3").classList.remove("choicediv1")}
    if(document.getElementById("btn4")){document.getElementById("btn4").classList.remove("choicediv2")}



}



  return (
  <>
    <Header lang={langset} language={props.language}></Header>
    <div className='page'>
    <div className='BannerWarp-config'>
    



    configurator:{params.title}

    <div className='Config-selects'>
       

        {Fetchee()}


        <div>
        
        <button id="count1"onClick={()=>{ slidefk();setlinecount(0);}}> 1</button>
        <button id="count2"onClick={()=>{ slidefk();setlinecount(1);}}> 2</button>
        <button id="count3" onClick={()=>{ slidefk();setlinecount(2);}}> 3</button>
        <button id="count4" onClick={()=>{ slidefk();setlinecount(3);}}> 4</button>
        
        </div>
        {rendercanvas()}

   
        <div className='Config-measure-z hidden'><div className='Config-measure-input-div'><p>{val3}mm</p><h6>Ihre Eingabe:</h6>
        <input type="text" onChange={(e)=>{setval3(e.target.value);console.log(val3)}}value={val3}/>
        </div></div>
        <div className='Config-measure-ov hidden'>
            <table>
                <tr id="tablemeasure0" className='Config-measure-x-menu hidden'>
                    <td>Ihre länge 1: </td><td className='Config-measure-table-val'>{val1} mm</td>
                </tr>
                <tr id="tablemeasure1" className='Config-measure-y-menu hidden'>
                    <td>Ihre länge 2: </td><td className='Config-measure-table-val'> {val2} mm</td>
                </tr>
                <tr id="tablemeasure2" className='Config-measure-z-menu hidden'>
                    <td>Ihre länge 3: </td><td className='Config-measure-table-val'> {val3} mm</td>
                </tr>
            </table>
            <div className='morebtn'> <button onClick={()=>nexter(1)}>Weiter</button></div>
        </div>
     
    </div>
    <div className='railchoice-head hidden'>
        <h2>Choose your Series</h2>
    </div>


  </div>  
  </div>

  <Footer></Footer>
  </>
    
  )
}

export default Konfigurator