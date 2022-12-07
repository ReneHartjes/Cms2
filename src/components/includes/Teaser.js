import React from 'react'
import './Teaser.css'

function Teaser() {
  return (
    <div className='Teaser-wrap'>

        <div className='Teaser-card'>
        <div className='Teaser-img'>
                <img src="https://www.q-railing.com/files/thumbnails/2100375-de-website-banner-490x311-1-1.490x338x1.png"/>
            </div>
            <div className='Teaser-text'>
              <div>

                <h3>Q-railing Titel</h3>
                <p>Lorem ipsum dolo est</p>
                <p>noch mehr <br/> beispieltext</p>
                <button>read more</button>
              </div>
                
            </div>
        </div>




        <div className='Teaser-card'>
            <div className='Teaser-img'>
                <img src="https://www.q-railing.com/files/thumbnails/news-item-banner-490x311-1.490x338x1.jpg"/>
            </div>
            <div className='Teaser-text'>
              <div>

                <h3>Q-railing Titel</h3>
                <p>Lorem ipsum dolo est</p>
                <p>noch mehr <br/> beispieltext</p>
                <button>read more</button>
              </div>
                
            </div>
        </div>

    </div>
  )
}

export default Teaser