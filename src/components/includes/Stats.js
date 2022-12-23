import React from 'react'
import './Stats.css'

function Stats() {
  return (
    <div className='Stats-wrapper'>
        <div className='Stats-inner'>
            <div className='Stats-head'>
            <h2>Über Q-railing</h2>
            <p>Wir sind Partner der Metaller, Glaser, Architekten, Planer und Holzverarbeiter</p>
            </div>
            <div className='Stats-3col'>
                    <div className='Stats-1col'>
                        <h2>+20</h2>
                        <p>Jahre Erfahrung</p>
                    </div>
                    <div className='Stats-1col'>
                        <h2>+250</h2>
                        <p>Mitarbeiter an 12 Niederlassungen weltweit</p>
                    </div>
                    <div className='Stats-1col'>
                        <h2>EN 1090-1</h2>
                        <p>Zertifizierung</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Stats