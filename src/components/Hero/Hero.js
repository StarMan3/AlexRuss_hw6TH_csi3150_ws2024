import React from 'react'
import './Hero.css'
import HeroImage from '../../Assets/HeroSection-bg-image.jpg'

function Hero() {
    return (
        <section className='hero-section'>
            <img className='hero-image' src={HeroImage} alt='Paper Airplane in the Sunset' />
            <h1 className='hero-header'>Welcome to the Travel Blog</h1>
            <h2 className='hero-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </h2>
        </section>
    )
}

export default Hero