import React from 'react'
import './Footer.css'

function Footer() {


  return (
    <div className='Footer-wrap'>
      <div className='Footer-inner'>
    <div className='Footer-mid'>
        <h3>Q-RAILING</h3>
        <div><ul><li>Login</li><li>Mein Konto</li><li>Favoriten</li><li>Kontakt</li><li>Bestellen</li><li>Bezahlen</li><li>Versand</li><li>Mehr Q-railing</li></ul></div>
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