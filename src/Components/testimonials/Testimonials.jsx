import React , {useState} from 'react'
import './Testimonials.css'
import {testimonialsData}  from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {
    const [selectedtestmon,setselectedtestmon]= useState(0);
    const tLEngth = testimonialsData.length;

    

  return (
    <div className='Testimonials'>
        <div className='left-t'>
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say About US</span>
            <span>{testimonialsData[selectedtestmon].review}</span>
             <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selectedtestmon].name}
                    </span>
                    {" "}-  {testimonialsData[selectedtestmon].status}
            </span>
        </div>
        <div className='right-t'>
            <div></div>
            <div></div>
            <img src={testimonialsData[selectedtestmon].image} alt="" />

            <div className='arrows'>
                <img src={leftArrow} alt="" onClick={()=>{
                    selectedtestmon === 0 ? setselectedtestmon(tLEngth-1) : 
                    setselectedtestmon((pre)=>pre-1);
                }}/>
                <img src={rightArrow}  alt="" onClick={()=>{
                    selectedtestmon === tLEngth -1  ? setselectedtestmon(0):
                    setselectedtestmon((pre)=>pre+1);
                }} />


            </div> 

        </div>
    </div>
  )
}
export default Testimonials