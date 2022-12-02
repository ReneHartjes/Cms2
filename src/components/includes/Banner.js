import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='Banner-wrap'>
    <div className='Banner-big'>
        <img src="https://www.q-railing.com/files/thumbnails/2100375-de-website-header-995x637-1-9.995x637x1.png"/>
    </div>
    <div>
    <div className='Banner-small1'>
        <img src="https://www.q-railing.com/files/thumbnails/website-banner-490x351.490x311x1.jpg"/>
    </div>
    <div className='Banner-small2'>
        <img src="https://www.q-railing.com/files/thumbnails/gelander-online-shop.490x311x1.webp"/>
    </div>
    </div>
</div>
  )
}

export default Banner