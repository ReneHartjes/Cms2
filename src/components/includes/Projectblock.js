import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Projectblock.css'

function Projectblock(props) {
    let param = useParams()
    let [systemarr, setsystemarr] = useState({data:[]})
    let [systemarr2, setsystemarr2] = useState({data:[]})
    let [filter1, setfilter1] = useState([])
    let [filter2, setfilter2] = useState([])

    let [count, setcount] = useState(11)
    let [page, setpage] = useState(0)
    let [page1, setpage1] = useState(0)
    let [page2, setpage2] = useState(0)
    let [page3, setpage3] = useState(0)
    let [page4, setpage4] = useState(0)
    let langarr
    let arry = [];
    let data = {data:[]}

    useEffect(()=>{

      langarr = param.count.split("-")

    },[param.count])

    useEffect(()=>{

      rendernormal()
    },[])

    useEffect(()=>{

      rerenderprods2()
    },[count])
    useEffect(()=>{

      rerenderprods2()
    },[systemarr])

    function rendernormal(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-projects?pagination[page]='+1+'&pagination[pageSize]=100')
      .then(res=>res.json())
      .then(json=>{setsystemarr(json);console.log(json)}).then(()=>rerenderprods2())
    }


    function loadpage2(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-projects?pagination[page]='+2+'&pagination[pageSize]=12')
      .then(res=>res.json())
      .then(json=>{setsystemarr(json);console.log(json)}).then(()=>rerenderprods2())
    }
    function loadpage3(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-projects?pagination[page]='+2+'&pagination[pageSize]=12')
      .then(res=>res.json())
      .then(json=>{setsystemarr(json);console.log(json)}).then(()=>rerenderprods2())
    }
    function loadpage4(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-projects?pagination[page]='+2+'&pagination[pageSize]=12')
      .then(res=>res.json())
      .then(json=>{setsystemarr(json);console.log(json)}).then(()=>rerenderprods2())
    }
    
   function rerenderprods2(attrib,idd){
    if(systemarr.data.length > 0){



    for (let i = 0; i <= count; i++) {

      try{    
        if(systemarr.data[i]){arry.push(systemarr.data[i])}
        }
      catch{}
  
    }
    
    let imv = {data:[page,arry]}
    console.log(imv)
    setsystemarr2(imv)
    }else{console.log("not yet")}

   }
   function loadsystem(prop){
    console.log(prop)
    let systemurl = "/"+param.count+"/projects/"+prop
    window.location.replace(systemurl)
   }

   function styleadd(index){
    let ele = document.querySelector(".statss"+index)
    console.log(ele)
    //document.querySelector(".statss"+index).style = "grid-area:1/1/2/2;"
   }

   function rerendering(){
    if(systemarr2.data.length > 0){
      return(
        <>
        {
        systemarr2.data[1].map((statss, index) => (
          <>
          
            <a  id="proj-links" className={"statss"+index} href={"/"+param.count+"/projects/"+statss.attributes.titel1}><img className='project-img' src ={statss.attributes.image1}/><div className='proj-links-inner'><p>{statss.attributes.titel3}</p></div></a>
            {styleadd(index)}

          </>
           ))
          }
          </>
      )
    }else{
      return(
        <>
        </>
      )

    }
   }


   function countmax(){
    setcount(count = count + 12)
    if(count > systemarr.data.length){
      setcount(systemarr.data.length)
    }
   }
  return (
    <>
    <div>Systemblock</div>

    <h1>{props.lange}</h1>
    <div className='Projects-Wrapper'>
   <div><h2 className='Projects-head'>Referenzen & Inspirationen</h2></div>
   <div className='Projects-text'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
    <div className='Projects-Filter'>
      <h3>Filter:</h3>

      <p>Result(s):{"systemarr.data.length"}</p>
      <div className='System-Filter-Block'>
        <h3>Geländertyp: </h3>
        <br />
       

        <label class="container">
          <input id="ganzglass" type="checkbox" onChange={()=>rerenderprods2("ganzglass", "ganzglass")}  />
          <span class="checkmark"></span> Ganzglasgeländer
        </label>

        <label class="container">
          <input id="pfosten" type="checkbox" onChange={()=>rerenderprods2("pfosten", "pfosten")}  />
          <span class="checkmark"></span> Pfostengeländer
        </label>

        <label class="container">
          <input id="handlauf" type="checkbox" onChange={()=>rerenderprods2("handlauf", "handlauf")}  />
          <span class="checkmark"></span> Wandhandläufe
        </label>

      </div>


      
    </div>
    <div className='Projects-image-cards'>
    {
        rerendering()
      }
    </div>

    <div className='morebtn1'><div></div><div className='morebtn-btn'><button onClick={()=>{countmax(); rerenderprods2()}}>More Projects</button>
      </div></div>
     </div>
     
 
    </>
  )
}

export default Projectblock