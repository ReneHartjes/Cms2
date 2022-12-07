import React, { useEffect, useState } from 'react'
import './Systemblock.css'

function Systemblock(props) {

    let [systemarr, setsystemarr] = useState({data:[]})
    let [systemarr2, setsystemarr2] = useState([])
    let [savesearch , setsavesearch] = useState()
    let arr = []

    let [page, setpage] = useState(1)
    console.log('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())

    useEffect(()=>{
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())
        .then(res=>res.json())
        .then(json=>setsystemarr(json))
        .then(console.log(systemarr))
    },[])

    function rendernormal(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())
      .then(res=>res.json())
      .then(json=>setsystemarr(json))
      .then(console.log(systemarr))
    }


   function rerenderprods(attrib, idd){
    console.log(savesearch+ "+++" + attrib)
    if(document.getElementById(idd).checked){
      console.log("ckeche")
    
    fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase()+'&filters[titel][$contains]='+attrib)
    .then(res=>res.json())
    .then(json=>setsystemarr(json))
    .then(console.log(systemarr))}
    else{
     
      rendernormal()
      setsavesearch("")
    }
   }

  return (
    <>
    <div>Systemblock</div>
    <h1>{props.lange}</h1>
    <div className='System-Wrapper'>
    <div className='System-Filter'>
      <h3>Filter:</h3>
      <div className='System-Filter-Block'>
        <h3>Material</h3>

        <label class="container">
  <input id="glass" type="checkbox" onChange={()=>rerenderprods("Glass", "glass")}  />
  <span class="checkmark"></span> Glass
</label>

<label class="container">
  <input id="alu" type="checkbox" onChange={()=>rerenderprods("Alu", "alu")}  />
  <span class="checkmark"></span> Aluminium
</label>

      </div>
      
    </div>
    <div className='System-cards'>
    {
          systemarr.data.map((statss, index) => (
            <>
              <div className='System-card'>
                <div className='System-card-img'> 
                <img src={statss.attributes.img2} />
                </div>
                <div className='Systems-description'>
                 <h2>{statss.attributes.titel}</h2>
                <button>read more</button>
                 </div>
              </div>

            </>
             ))
      }
    </div>
     </div>
    </>
  )
}

export default Systemblock