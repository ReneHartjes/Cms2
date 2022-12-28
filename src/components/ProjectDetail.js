import { useContext, useState, useEffect } from 'react'

import {useParams} from 'react-router-dom'
import './Landingpage.css'
import './ProjectDetail.css'
import Header from './includes/Header';
import Footer from './includes/Footer';
import BannerNew from './includes/BannerNew';



function ProductDetail(props) {

    let [globallang, setgloballang] = useState("eng")
 
    const params =  useParams()
    let [lang, setlang] = useState("eng")
    let [systemarr, setsystemarr] = useState({"data":[]})
    let para = useParams()
    let Paraaa = useParams()
    let la
    let arrla
    if(para.count){  la= para.count
    arrla = la.split("-") 
    }else{la="en"}
    const langset = (message) => {
        let arr = message.split("§§")
        setlang(arr[0])
        props.lang(message)
      };
      useEffect(()=>{    
        setgloballang(props.language)

        
      },[])
      useEffect(()=>{   


        fetch('https://squid-app-9h43v.ondigitalocean.app/api/'+arrla[0]+'-projects?filters[titel1][$eq]='+Paraaa.projectname)
        .then(res=>res.json())
        .then(json=>{setsystemarr(json); console.log(json)}).then(()=>toggledetails())
      },[])


      function toggleinfos(){
        let infos = document.getElementById("Landigpageinnertextside")
        let details = document.getElementById("Landigpageattributes")
   
        document.getElementById("Landigpageattributes").style = "display:none;"
        document.getElementById("Landigpageinnertextside").style = "display:block;"

      }
      function toggledetails(){

        document.getElementById("Landigpageattributes").style = "display:block;"
        document.getElementById("Landigpageinnertextside").style = "display:none;"


      }
  
    function renderpage(){
      if(systemarr.data.length > 0){
        return(
            <div className='Landingpage-wrapper'>
                <div className='Landingpage-banner'>
                  <img src={systemarr.data[0].attributes.image2}></img>
                </div>
                <div className='Landingpage-inner-wrap'>
                <div className='Landingpage-inner'>
                  <div className='projects-inner-textside' id="Landigpageinnertextside">
                  <div className='togglebtns'>
                  <button id="infobtn" onClick={()=>toggleinfos()}>INFOS</button><button  id="detailbtn" onClick={()=>toggledetails()}>DETAILS</button>
                  </div>
                  <div className='Landigpage-inner-textside-wrap'>
                  <br />
                  
                  <br />
                  
                  <br/>

                  </div>
                  </div>


                  <div className='projects-attributes' id="Landigpageattributes">
                  
                  <div className='togglebtns'>
                 <button id="detailbtn-project"  onClick={()=>toggledetails()}>DETAILS</button>
                  </div>

                  <div className='Landigpage-inner-textside-wrap'>
                  <br />
                  <h1>{systemarr.data[0].attributes.titel}</h1>
                  <br/>
                 
                  <br />
                  <h3>{systemarr.data[0].attributes.titel2}</h3>
                  <p>{systemarr.data[0].attributes.text1}</p>
                  <br/>
                  <h3>{systemarr.data[0].attributes.titel3}</h3>
                  <br />
                  <p>{systemarr.data[0].attributes.text2}</p>
                  <br />
                  <p>{systemarr.data[0].attributes.text3}</p>
                  {
                  
                    systemarr.data[0].attributes.details1.data.map((statss, index) => {
                      
                      if(statss != systemarr.data[0].attributes.details1.data[systemarr.data[0].attributes.details1.data.length-1]){
                      return(
                      <>
                        <tr><td><b>{statss[0]}</b></td><td className='spacer'></td><td className='Landingpage-stats-text'>{statss[1]}</td></tr>
                      </>)}
                      else{
                        return(
                          <ul className='Landingpage-specials'>
                      
                          <li id="Landingpage-specials-li">
                           {statss[0]}:
                          </li><li className='spacer'></li>
                          <li>
                          <ul className='Landingpage-specials-level2'>
                            {
                              statss.map((vary,index) =>{
                                if(index == 0){
                                  return(<></>)
                                }else{
                                  return(<li className='Landingpage-specials-level2-li' ><p className='Landingpage-specials-level2-text'>{vary}</p></li>)
                                }
                                
                              })
                            }
                          </ul>
                          </li>
                          </ul>
                        )
                      }
                    })
                  }
                  </div>
                  </div>

                </div>
                </div>
            </div>
        )
      }else{
        return(
          <>
          </>
        )
      }
    }
 
  return (
  <>
    <Header language={props.language} lang={langset}></Header>

    <div className='Landingpage-page'>
      <div className='Landingpage-page-wrap'>

          {renderpage()}



      </div>
    </div>

  <Footer language={props.language}></Footer>
  </>
    
  )
}

export default ProductDetail