import React from 'react'
import {useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import './AboutBlock.css'

function AboutBlock() {

    let para = useParams()
    let langarr
    let [sysdata, setsysdata] = useState({data:[]})
    let [Unternehmendata, setUnternehmendata] = useState({data:[]})
    let [Geschichtedata, setGeschichtedata] = useState({data:[]})
    let [Standortdata, setStandortdata] = useState({data:[]})
    let [Visiondata, setVisiondata] = useState({data:[]})
    let [Abteilungdata, setAbteilungdata] = useState({data:[]})


    useEffect(()=>{

        langarr = para.count.split("-")
        console.log(langarr)
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-texts?filters[filter][$eq]=Unternehmen')
        .then(res=>res.json())
        .then(json=>{setUnternehmendata(json); console.log(json)}).then(()=>renderdata())

      },[para.count])



    function rerenderdata(prop){
        langarr = para.count.split("-")
        console.log(langarr)

        if(prop == "unternehmen"){
        fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-texts?filters[filter][$eq]=Unternehmen')
        .then(res=>res.json())
        .then(json=>{setUnternehmendata(json);setStandortdata({data:[]});setGeschichtedata({data:[]});setVisiondata({data:[]});setAbteilungdata({data:[]});console.log(json)}).then(()=>renderdata())}
        
        if(prop == "abteilung"){
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-texts?filters[filter][$eq]=Abteilungen')
            .then(res=>res.json())
            .then(json=>{setUnternehmendata({data:[]});setStandortdata({data:[]});setGeschichtedata({data:[]});setVisiondata({data:[]});setAbteilungdata(json);console.log(json)}).then(()=>renderdata())}
            
        if(prop == "geschichte"){
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-texts?filters[filter][$eq]=Unternehmensgeschichte')
            .then(res=>res.json())
            .then(json=>{setUnternehmendata({data:[]});setStandortdata({data:[]});setGeschichtedata(json);setVisiondata({data:[]});setAbteilungdata({data:[]});console.log(json)}).then(()=>renderdata())}
            
        if(prop == "vision"){
            fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+langarr[0]+'-texts?filters[filter][$eq]=Vision')
            .then(res=>res.json())
            .then(json=>{setUnternehmendata({data:[]});setStandortdata({data:[]});setGeschichtedata({data:[]});setVisiondata(json);setAbteilungdata({data:[]});console.log(json)}).then(()=>renderdata())}
    }

    function fetchdata(id, attrib){
        console.log("ya")
    }

    function renderdata(){
        if(Unternehmendata.data.length > 0){
            return(
                <>
                    <div className='about-unternehmen'>
                        <h2 className='about-header'>{Unternehmendata.data[0].attributes.titel1}</h2>
                        <br />
                        <p>{Unternehmendata.data[0].attributes.text1}</p>
                        <br />
                        <img src ={Unternehmendata.data[0].attributes.image1}/>
                    </div>
                </>
            )
        }
        

        if(Geschichtedata.data.length > 0){
            return(
                <>
                    <div className='about-geschichte'>
                        <h2 className='about-header'>{Geschichtedata.data[0].attributes.titel1}</h2>
                        <br />
                        {Geschichtedata.data[0].attributes.text1}
                        <br />
                        {
                                Geschichtedata.data[0].attributes.details.data.map((item)=>{

                                    return(
                                        <>
                                        <br />
                                        <h3>{item[0]}</h3>
                                        <p>{item[1]}</p>
                                        </>
                                    )
                                })

                        }
                    </div>
                </>
            )
        }
        
        if(Abteilungdata.data.length > 0){
            return(
                <>
                    <div className='about-abteilung'>
                        <h2 className='about-header'>{Abteilungdata.data[0].attributes.titel1}</h2>
                        <br />
                        <p>{Abteilungdata.data[0].attributes.text1}</p>
                        <div className='about-abteilung-cards'>
                        {
                                Abteilungdata.data[0].attributes.details.data.map((item)=>{

                                    return(
                                        
                                        <div className='About-Abteilung-Card'>

                                        <a href={"/about/"+item[2]}>
                                        <img src={item[3]} width="150" height="150"/>
                                        <h3>{item[0]}</h3>
                                        <p>{item[1]}</p>
                                        
                                        </a>
                                        </div>
                                     
                                    )
                                })

                        }
                        </div>
                    </div>
                </>
            )
        }


        if(Visiondata.data.length > 0){
            return(
                <>
                    <div className='about-vision'>
                        <p>{Visiondata.data[0].attributes.text1}</p>
                        <br />
                        <img src={Visiondata.data[0].attributes.image1}/>
                        <br />
                        <h3>{Visiondata.data[0].attributes.titel1}</h3>
                        <br />
                        <h4>{Visiondata.data[0].attributes.titel2}</h4>
                        <p>{Visiondata.data[0].attributes.text2}</p>
                        <br />
                        <h4>{Visiondata.data[0].attributes.titel3}</h4>
                        <br />
                        <p><b>{Visiondata.data[0].attributes.text3}</b></p>
                        <br />
                        <p>{Visiondata.data[0].attributes.text4}</p>

                        <div>
                            {

                            Visiondata.data[0].attributes.details.data.map((item, index)=>{

                                if(index == 0){
                                    return(
                                        <>
                                        <br />
                                        <h2>{item[0]}</h2>
                                        <br />
                                        <p>{item[1]}</p>
                                        <br />
                                        <br />
                                        </>
                                    )
                                }

                                return(
                                    <>
                                    <h3 className='about-render-head'>{item[0]}</h3>
                                    <p>{item[1]}</p>
                                    <br />
                                    </>
                                )
                            })

                            }
                        </div>
                    </div>
                </>
            )
        }
        
        
        else{
            return(
                <>
                    fetching
                </>
            )
        }
    }

  return (
    <div className='About-Wrap'>


        
        <div className='NewsBlog-Menus'>
            <div className='About-Filter-Block'>
        <h3>Über uns: </h3>
        <br />
             
        <button onClick={()=>rerenderdata("unternehmen")}>Das Unternehmen</button>
        <button onClick={()=>rerenderdata("geschichte")}>Unternehmensgeschichte</button>
        <button onClick={()=>rerenderdata("standort")}>Standorte</button>
        <button onClick={()=>rerenderdata("abteilung")}>Abteilung</button>
        <button onClick={()=>rerenderdata("vision")}>Werte</button>
       

        </div>
        </div>


          
            <div className='About-Content'>
        {renderdata()}
            </div>
        </div>



  )
}

export default AboutBlock