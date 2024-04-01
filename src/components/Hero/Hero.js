import React from 'react'
import './Hero.css'
import HeroImage from '../../Assets/HeroSection-bg-image.jpg'

function Hero() {
    return (
        <section className='hero-section'>
            <img className='hero-image' src={HeroImage} alt='Paper Airplane in the Sunset' />

        </section>
    )
}

export default Hero