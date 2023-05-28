import React from 'react'
import './plan.css'
import {plansData} from '../../data/plansData'
import whiteTick  from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        <div className='plans'>
            {
                plansData.map((plan,i)=>(
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>{plan.price}</span>
                        <div className='features'>
                            {plan.features.map((features,index)=>(
                                 <div className='feature' key={index}>
                                    <img src={whiteTick} alt="" />
                                    <span >{features}</span>
                                 </div>
                            ))}
                        
                        </div>
                        <div className=''>
                            <span>See more benefits </span>
                        </div>
                        <button className='btn'>Join now </button>
                    </div>
                ))
            }

        </div>

    </div>


  )
}

export default Plans