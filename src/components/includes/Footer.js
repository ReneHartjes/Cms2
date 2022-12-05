import React, { useEffect, useState } from 'react'
import './Footer.css'

function Footer(props) {
 
  let gerwords = [["Über uns","/projects"],["Karriere","/projects"],["Kontakt","/projects"],["Bestellung und Lieferung","/projects"],["Downloads","/projects"],["Neuigkeiten","/projects"]
  ["Events","/projects"],["Videos","/projects"],["Balkongeländer","/projects"],["Französicher Balkon","/projects"],["Geländer","/projects"],["Glasgeländer","/projects"],["Handlaufhalter","/projects"],["Treppenhandlauf","/projects"],
  ["Treppengeländer","/projects"],["Q-railing","Marie-Curie-Strasse 8-14","46446 Emmerich am Rhein","Deutschland"],["T. 02822 915 69 0","F. 02822 915 69 70","WhatsApp 0152 08651286","sales.de@q-railing.com"]
  ,["Q-railing","Hanns-Schwindt-Strasse 8","81829 München","Deutschland"] ,["T. 089 24 887 460","F. 089 24 887 469 9","WhatsApp 0152 08651286","sales.de@q-railing.com"]
];
let engwords = [["About us","/project"],["Career","/projects"],["Contact","/projects"],["Ordering and delivery","/projects"],["BIM objects","/projects"],["News","/projects"]
["Downloads","/projects"],["Videos","/projects"],["Railing","/projects"],["Glass railing","/projects"],["Stair handrail and stair railing","/projects"],["Handrail brackets","/projects"],["Handlaufhalter","/projects"],["Treppenhandlauf","/projects"],
["Treppengeländer","/projects"],["Q-RAILING CALIFORNIA","14321 Franklin Ave.","Tustin, CA 92780","USA"],["T. +1 714 259 1372","F. +1 714 259 1720","","sales.us@q-railing.com"]
,["Q-RAILING NEW YORK","2555 Stillwell Avenue","Brooklyn, NY 11223","USA"] ,["T. 089 24 887 460","F. 089 24 887 469 9","WhatsApp 0152 08651286","sales.de@q-railing.com"]
];
let [langstate, setlangstate] = useState(engwords);
  useEffect(()=>{
    if(props.language == "GER"){
      setlangstate(gerwords)
    }else{
      setlangstate(engwords)
    }
  },[props.language])

  return (
    <div className='Footer-wrap'>
      <div className='Footer-inner'>
    <div className='Footer-mid'>
        <h3>Q-RAILING</h3>
        <div><ul><li>Login</li><li>Mein Konto</li><li>Favoriten</li><li>Kontakt</li><li>Bestellen</li><li>Bezahlen</li><li>Versand</li><li>Mehr Q-railing</li></ul></div>
        {langstate[1][0]}
    </div>
    <br />
    <br />

    <div className='Footer-bot'>
        <div><p>Copyright 2022 Q-railing Central Europe GmbH. Alle Rechte Vorbehalten.</p></div>
        <div><ul><li>Datenschutz</li><li>Impressum</li><li>AGB</li></ul></div>
    </div>
    </div>
    </div>
  )
}

export default Footer