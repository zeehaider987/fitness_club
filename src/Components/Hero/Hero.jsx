import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import hero_image_back from '../../assets/hero_image_back.png';
const Hero = () => {
  return (
    <div className="hero">
        <div className="left_h">
          <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div >
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
          </div>
        
        <div>
          <span>Ideal body</span>
        </div>
        <div>
          <span>
            In here we will help you to shape and build you
            ideal body and live up your life to fullsest
          </span>
        </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
          <span>+978</span>
            <span>Member Joined</span>
          </div>
          <div>
          <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div >
          <div className='hero-buttons'>
          <buttons className="btn">GetStarted</buttons>
        <buttons className="btn">Learn More</buttons>
          </div>
      
       
        </div>
        <div className="right_h">
          <button className='btn'>Join now</button>
          <div className='heart-rate'>
            <img src={Heart} alt=''  />
            <span>Heart Rate</span>
            <span>116 bpm</span>

          </div>
          <img src={hero_image} alt='' className='hero-image' />
          <img src={hero_image_back} alt='' className='hero-image-back' />
          <div className='calories'>
            <img src={Calories} alt='' className='calories-image' />
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>


        </div>

    </div>
  )
}

export default Hero