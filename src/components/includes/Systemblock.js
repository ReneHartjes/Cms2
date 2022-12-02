import React, { useEffect, useState } from 'react'
import './Systemblock.css'

function Systemblock(props) {

    let [systemarr, setsystemarr] = useState([])
    let [systemarr2, setsystemarr2] = useState([])
    let [page, setpage] = useState(1)

    useEffect(()=>{
        fetch('http://localhost:8080/systems/page'+page)
        .then(res=>res.json())
        .then(json=>{setsystemarr(json);loadcontent()})
    },[page])


    async function loadmore(){
        console.log(page)
        setpage(page+1)
        fetch('http://localhost:8080/systems/page'+page)
        .then(res=>res.json())
        .then(json=>{setsystemarr2(json);loadcontent()})
    }

    function loadcontent(){
   console.log(systemarr2)
    }
  return (
    <>
    <div>Systemblock</div>
    <h1>{props.lange}</h1>
    <div className='Systems-Wrapper'>
    {
    systemarr.map((statss, index) => (
      <div className="Systems-card" id={"System-card"+index}> 
       <a href={statss.link}>
        <img src={statss.image} ></img>
        <h3>{statss.title}</h3>
       </a>
      </div>
  
     ))}

{
    systemarr2.map((statss, index) => (
      <div className="Systems-card" id={"System-card"+index} > 
       <a href={statss.link}>
        <img src={statss.image} ></img>
        <h3>{statss.title}</h3>
       </a>
      </div>
  
     ))}

     <button onClick={()=>loadmore()}>Load more</button>
     </div>
    </>
  )
}

export default Systemblock