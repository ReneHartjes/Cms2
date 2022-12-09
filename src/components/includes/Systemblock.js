import React, { useEffect, useState } from 'react'
import './Systemblock.css'

function Systemblock(props) {

    let [systemarr, setsystemarr] = useState({data:[]})
    let [systemarr2, setsystemarr2] = useState({data:[]})
    let [savesearch , setsavesearch] = useState()
    let [selectval, setselectval] = useState([])
    let [filter1, setfilter1] = useState("")
    let [filter2, setfilter2] = useState("")
    let [filter3, setfilter3] = useState("")
    let [filter4, setfilter4] = useState("")
    let [filter5, setfilter5] = useState("")
    
    let arr = []
    let attrs= []


    useEffect(()=>{
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())
        .then(res=>res.json())
        .then(json=>{setsystemarr(json); setsystemarr2(json)})

    },[])

    function rendernormal(){
      fetch('https://squid-app-9h43v.ondigitalocean.app/api/systems?filters[language][$eq]='+props.language.toLowerCase())
      .then(res=>res.json())
      .then(json=>setsystemarr(json))
      
    }

   function rerenderprods2(attrib, idd){

    if(document.getElementById(idd).checked){
      let matches = 0;
 
   

      setfilter1([...filter1,attrib])
      arr = systemarr.data.filter(function(item){
        return  item.attributes.filter.includes(attrib)       
       })


     let val = {data:arr}

     setsystemarr(val)
    }
     else{
      uncheck(attrib, idd)
     

     }
   }

   function uncheck(attrib, id){

    let items = document.querySelectorAll(".container")
    let arr;
    items.forEach(element => {
      if(element.children[0].checked){
        arr = systemarr2.data.filter(function(item){
          return  item.attributes.filter.includes(element.children[0].id)       
         })
         console.log(arr)
      }
    });
    let val = {data:arr}
    if(arr){
    setsystemarr(val)}
    else{
      setsystemarr(systemarr2)
    }

   }


  return (
    <>
    <div>Systemblock</div>

    <h1>{props.lange}</h1>
    <div className='System-Wrapper'>
    <div className='System-Filter'>
      <h3>Filter:</h3>

      <p>Result(s):{systemarr.data.length}</p>
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