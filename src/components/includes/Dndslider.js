import React from 'react'
import {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './Dndslider.css'

function Dndslider() {

    let initialX = null;
let initialY = null;

let [sliderarr, setsliderarr] = useState(["https://www.q-railing.com/files/thumbnails/prime-system-slider-001.1500x637x1.jpg"
,"https://www.q-railing.com/files/thumbnails/prime-system-slider-002.1500x637x1.jpg",
"https://www.q-railing.com/files/thumbnails/prime-system-slider-004.1500x637x1.jpg",
"https://www.q-railing.com/files/thumbnails/prime-system-slider-005.1500x637x1.jpg",
"https://www.q-railing.com/files/thumbnails/prime-system-slider-006.1500x637x1.jpg"
])
let [slidecount, setslidecount] = useState(0)
let [slidecount2, setslidecount2] = useState(1)

let [slide1count, setslide1count] = useState(0)
let [slide2count, setslide2count] = useState(1)
let [slide1, setslide1] = useState(sliderarr[0])
let [slide2, setslide2] = useState(sliderarr[1])
let [slide3, setslide3] = useState(0)

function nextslide(){
    console.log("next")
}
function prefslide(){
    console.log("pref")
    if(slidecount2 == 0){

    }
    if(slidecount2 == 1){

    }
    setTimeout(changeimgs, 1100)


}

function reset1(){
    setslide2count(slide2count = slide2count +1)
    if(slide2count > 4){
        setslide2count(0)
    }
    setslide2(sliderarr[slide2count])
    document.getElementById("imgright").classList.add("reset1")
    
}



function reset2(){
    setslide1count(slide1count = slide1count +1)
    if(slide1count > 4){
        setslide1count(0)
    }
    setslide2(sliderarr[slide1count])
    document.getElementById("imgmiddle").classList.add("reset1")
   
}

function reset3(){
    setslide1count(slide1count = slide1count +1)
    if(slide1count > 4){
        setslide1count(0)
    }
    setslide2(sliderarr[slide1count])
    document.getElementById("imgmiddle").classList.add("reset1")
   
}


function changeimgs(){
    setslidecount(slidecount = slidecount +1)
    if(slidecount > 3){
        setslidecount(0)
    }

    if(document.getElementById("imgmiddle").classList.contains("moveleftminus")){
        document.getElementById("imgmiddle").classList.remove("moveleftminus")
    }
    if(document.getElementById("imgmiddle").classList.contains("moveleftnormal")){
        document.getElementById("imgmiddle").classList.remove("moveleftnormal")
    }

    if(document.getElementById("imgright").classList.contains("moveleftminus")){
        document.getElementById("imgright").classList.remove("moveleftminus")
    }
    if(document.getElementById("imgright").classList.contains("moveleftnormal")){
        document.getElementById("imgright").classList.remove("moveleftnormal")
    }


    if(slidecount2 == 0){
        console.log(slidecount2)

        document.getElementById("imgmiddle").classList.add("moveleftminus")
        document.getElementById("imgright").classList.add("moveleftnormal")
        if(document.getElementById("imgright").classList.contains("reset1")){
            document.getElementById("imgright").classList.remove("reset1")
        }
        setslidecount2(1)
        setTimeout(reset2,1200)
        
    }
    if(slidecount2 == 1){ 
        document.getElementById("imgmiddle").classList.remove("reset1")
        document.getElementById("imgmiddle").classList.add("moveleftnormal")
       
        document.getElementById("imgright").classList.add("moveleftminus")
        if(document.getElementById("imgmiddle").classList.contains("reset1")){
            document.getElementById("imgmiddle").classList.remove("reset1")
        }

        console.log(slidecount2)
        setslidecount2(2)
        setTimeout(reset1,1200)
    }

    if(slidecount2 == 2){ 
        document.getElementById("imgmiddle").classList.remove("reset1")
        document.getElementById("imgmiddle").classList.add("moveleftnormal")
       
        document.getElementById("imgright").classList.add("moveleftminus")
        if(document.getElementById("imgmiddle").classList.contains("reset1")){
            document.getElementById("imgmiddle").classList.remove("reset1")
        }

        console.log(slidecount2)
        setslidecount2(0)
        setTimeout(reset3,1200)
    }






}

  
  return (
    <>
     <div className='Contentslider'>
            
            <div className='Contentslider-inner' id="contentslider-inner-id">

                    <div id="imgmiddle">
                        <img src={slide1} />
                    </div>
                    <div id="imgright">
                        <img src={slide2} />
                    </div>

            </div>
            <button onClick={()=>prefslide()}>Pref</button><button onClick={()=>nextslide()}>next</button>
     </div>
  </>
  )
}

export default Dndslider