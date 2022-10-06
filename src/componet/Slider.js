import React, { useEffect, useState } from "react";
import "./Slider.css";
import Slidermap from "./Slidermap";
import{FaAngleRight} from "react-icons/fa";
import{FaAngleLeft} from "react-icons/fa";
import data from "./Data";
function Slider(){

     const[slideIndex,setSlideIndex]=useState(0)
     
      useEffect(()=>{
        const intervel=setInterval(()=>{
            setSlideIndex(slideIndex===data.length-1 ? 0 : slideIndex+1)
        },3000)
      },[slideIndex]) 
     
     var prevSlide=()=>{
        setSlideIndex(slideIndex === 0 ? data.length-1 : slideIndex-1)
     }

     var nextSlide=()=>{
              setSlideIndex(slideIndex === data.length-1 ? 0 : slideIndex+1)
     }

    return(
        <>
        <div className="slider-container">
        <Slidermap slideData={slideIndex}/>
        <FaAngleLeft onClick={prevSlide} className="prev"/>
        <FaAngleRight onClick={nextSlide}  className="next"/>
        </div>
        </>
    )
}
 
export default Slider;