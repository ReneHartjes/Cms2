import React from 'react'
import {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './NewsBlog.css'

function NewsBlog() {

    let para = useParams()
    let langarr
    let [sysdata, setsysdata] = useState({data:[]})

    useEffect(()=>{

        langarr = para.count.split("-")
        console.log(langarr)
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-news')
        .then(res=>res.json())
        .then(json=>{setsysdata(json); console.log(json)}).then(()=>renderdata())

      },[para.count])

    function rerenderprods2(id, attrib){
        console.log("ya")
    }

    function renderdata(){
        if(sysdata.data.length > 0){
            return(
                <>
                    <div className='News-Cards'>
                    {sysdata.data.map((item)=>{
                        return(
                            <>
                                <div className='News-Card'>
                                    <div className='News-Card-img'>
                                        <img src={item.attributes.image1}/>
                                    </div>

                                    <div className='News-Card-text'>
                                        <h3>{item.attributes.titel2}</h3>
                                        <br />
                                        <p>
                                            {item.attributes.text1}
                                        </p>
                                        <a className='News-Btn' href="/news/"> {item.attributes.titel3}</a>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                    </div>
                </>
            )
        }else{
            return(
                <>
                    fetching
                </>
            )
        }
    }

  return (
    <div>


        <div className='NewsBlogHeader'><h1>Überschrift</h1></div>
        <div className='NewsBlog-Menus'>
        <div>
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
            <div>
        {renderdata()}
            </div>
        </div>
    </div>


  )
}

export default NewsBlog