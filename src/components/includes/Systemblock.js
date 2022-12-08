import React, { useEffect, useState } from 'react'
import './Systemblock.css'

function Systemblock(props) {

    let [systemarr, setsystemarr] = useState({data:[]})
    let [systemarr2, setsystemarr2] = useState([])
    let [savesearch , setsavesearch] = useState()
    let [selectval, setselectval] = useState()
    let arr = []

    let [page, setpage] = useState(1)


    useEffect(()=>{
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())
        .then(res=>res.json())
        .then(json=>setsystemarr(json))

    },[])

    function rendernormal(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())
      .then(res=>res.json())
      .then(json=>setsystemarr(json))
      
    }


   function rerenderprods(attrib, idd){
    console.log(savesearch+ "+++" + attrib)
    if(document.getElementById(idd).checked){
     let syss = document.querySelectorAll(".container")

     syss.forEach(element => {
        if(element.children[0].checked && element.children[0].id != idd){
          element.children[0].checked = false
        }
     });
     setsavesearch(attrib)

     let url;

     if(selectval)
     {url = 'https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase()+'&filters[titel][$contains]='+attrib+'&filters[titel][$contains]='+selectval+'`'
     }
     else{
       url = 'https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase()+'&filters[titel][$contains]='+attrib
     }
    fetch(url)
    .then(res=>res.json())
    .then(json=>setsystemarr(json))
    .then(console.log(systemarr))}
    else{

     if(!selectval){
      setsavesearch("")
      rendernormal()
    }else{
      renderselect(selectval)
    }
    }
   }

   
   function rerenderprods2(attrib, idd){
    console.log(savesearch+ "+++" + attrib)
    if(document.getElementById(idd).checked){
     let syss = document.querySelectorAll(".container")

     syss.forEach(element => {
        if(element.children[0].checked && element.children[0].id != idd){
          element.children[0].checked = false
        }
     });
     setsavesearch(attrib)
    }
     console.log(systemarr)
     if(document.getElementById(idd).checked){
     let arr = systemarr.data.filter(function(item){
      console.log(item.attributes.filter.match(attrib)       )
      return  item.attributes.filter.includes(attrib)       
  })

    let val = {data:arr}
    console.log(val)
    setsystemarr(val)}else{
      rendernormal()
    }
   }





   function renderselect(e){
    let url
    if(savesearch)
    {url = 'https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase()+'&filters[titel][$contains]='+e+'&filters[titel][$contains]='+savesearch+'`'
    }
    else{
      url = 'https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase()+'&filters[titel][$contains]='+e
    }
    setselectval(e)
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(json=>setsystemarr(json))
    .then(console.log(systemarr))
   }
  return (
    <>
    <div>Systemblock</div>
    <h1>{props.lange}</h1>
    <div className='System-Wrapper'>
    <div className='System-Filter'>
      <h3>Filter:</h3>
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

      </div>


      <div className='System-Filter-Block'>
  


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