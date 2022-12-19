import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Systemblock.css'
import Newletterinvite from './Newletterinvite';
import { render } from '@testing-library/react';
function Systemblock(props) {
    let param = useParams()
    let [systemarr, setsystemarr] = useState({data:[]})
    let [systemarr2, setsystemarr2] = useState({data:[]})
    let [savesearch , setsavesearch] = useState([])
    let [finalsearch , setfinalsearch] = useState([])
    let [selectval, setselectval] = useState([])
    let [filter1, setfilter1] = useState([])
    let [filter2, setfilter2] = useState([])
    let [filter3, setfilter3] = useState("")
    let [filter4, setfilter4] = useState("")
    let [filter5, setfilter5] = useState("")
    let filterpush = []
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
      .then(json=>setsystemarr(json)).then(()=>rerenderprods2())
    }
    useEffect(()=>{
      console.log(filter1)
      filterattrs()
    },[filter1])
    useEffect(()=>{
      console.log(filter2)
      gofilter()
    },[filter2])
    function filterattrs(){
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      if(filter1){
      var unique = filter1.filter(onlyUnique);
      setfilter2(unique)}else{
        rendernormal()
      }
    }
    function gofilter(){
      let arr
      if(filter2){
        if(filter2.length == 1){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0])       
           })
           let val = {data:arr}
           setsystemarr(val)
        }
        if(filter2.length == 2){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1])      
           })
           let val = {data:arr}
           setsystemarr(val)

        }
        if(filter2.length == 3){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1])  
            || item.attributes.filter.includes(filter2[2])         
           })
          let val = {data:arr}
           setsystemarr(val)
        }
        if(filter2.length == 4){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1])  
            || item.attributes.filter.includes(filter2[2])|| item.attributes.filter.includes(filter2[3])             
           })
          let val = {data:arr}
           setsystemarr(val)
        }
        if(filter2.length == 5){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1])  
            || item.attributes.filter.includes(filter2[2]) || item.attributes.filter.includes(filter2[3])  
            || item.attributes.filter.includes(filter2[4])            
           })
          let val = {data:arr}
           setsystemarr(val)
        }
        if(filter2.length == 6){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1]) 
             || item.attributes.filter.includes(filter2[2]) || item.attributes.filter.includes(filter2[3]) 
              || item.attributes.filter.includes(filter2[4]) || item.attributes.filter.includes(filter2[5])              
           })
          let val = {data:arr}
           setsystemarr(val)
        }
        if(filter2.length == 7){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1])  
            || item.attributes.filter.includes(filter2[2]) || item.attributes.filter.includes(filter2[3])  
            || item.attributes.filter.includes(filter2[4]) || item.attributes.filter.includes(filter2[5])    
            || item.attributes.filter.includes(filter2[6])               
           })
          let val = {data:arr}
           setsystemarr(val)
        }
        if(filter2.length == 8){
          arr = systemarr2.data.filter(function(item){
            return  item.attributes.filter.includes(filter2[0]) || item.attributes.filter.includes(filter2[1])  
            || item.attributes.filter.includes(filter2[2]) || item.attributes.filter.includes(filter2[3])  
            || item.attributes.filter.includes(filter2[4]) || item.attributes.filter.includes(filter2[5])    
            || item.attributes.filter.includes(filter2[6]) || item.attributes.filter.includes(filter2[7])                
           })
          let val = {data:arr}
           setsystemarr(val)
        }
      }
    }

   function rerenderprods2(attrib,idd){
      if(document.getElementById(idd).checked){
         setfilter1(filter1 =>[...filter1,attrib])
      }else{
        filter1.forEach((element, index) => {
          if(element == idd){
            let arr = filter1.filter(
              function(item){
                if(!item.match(idd)){
                  return item
                }
              }
            )
            setfilter1(arr)
            console.log(arr)
            if(arr.length == 0){
              rendernormal()
            }
          }
        });
      }
   }
   function loadsystem(prop){
    console.log(prop)
    let systemurl = "/"+param.count+"/systems/"+prop
    window.location.replace(systemurl)
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

      <label class="container">
          <input id="bodenglasklemmen" type="checkbox" onChange={()=>rerenderprods2("bodenglasklemmen", "bodenglasklemmen")}  />
          <span class="checkmark"></span> Bodenglasklemmen
        </label>

        <label class="container">
          <input id="bodenprofile" type="checkbox" onChange={()=>rerenderprods2("bodenprofile", "bodenprofile")}  />
          <span class="checkmark"></span> Bodenprofile
        </label>

        <label class="container">
          <input id="franzoesischebalkone" type="checkbox" onChange={()=>rerenderprods2("franzoesischebalkone", "franzoesischebalkone")}  />
          <span class="checkmark"></span> Französische Balkone
        </label>

        <label class="container">
          <input id="gelaenderpf" type="checkbox" onChange={()=>rerenderprods2("gelaenderpf", "gelaenderpf")}  />
          <span class="checkmark"></span> Geländerpfosten
        </label>

        <label class="container">
          <input id="glassadapter" type="checkbox" onChange={()=>rerenderprods2("glassadapter", "glassadapter")}  />
          <span class="checkmark"></span> Glassadapter
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
                 <p className='Systems-attr1'>{statss.attributes.details.data[0][1]}</p>
                 <p className='Systems-attr2'>{statss.attributes.details.data[3][1]}</p>
                <button onClick={()=>loadsystem(statss.attributes.titel)}>READ MORE</button>
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