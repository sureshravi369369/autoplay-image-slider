import React from "react";
import data  from "./Data";
import "./Slidermap.css"
function Slidermap(props){

    const slide=data.map((data,index)=>{
       return(
            <div key={index} className={index=== props.slideData ? "myslides":"myslidesnone"}>
                <img className="ads" src={data.src}/>
            </div>
       )
    })
     
    return ( 
            slide
        )
} 

export default Slidermap;