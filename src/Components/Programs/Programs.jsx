import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import right_arrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    
    <div className="Programs" id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape your</span>
        </div>
        <div className='program-categories'>
            {programsData.map((programs)=>(
                <div className='category'>
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span>{programs.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={right_arrow} alt="" />
                    </div>
                </div>

            ))

            }
        </div>
    </div>

    
  )
}

export default Programs