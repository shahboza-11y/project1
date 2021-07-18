import React from 'react'
import './IconsSection.css'
export default function IconsSections() {

    let IconsData = [
        {
            img: "img/IconsSectionImg/Screenshot_1.png",
        },  
            
        {
            
            img: "img/IconsSectionImg/Screenshot_2.png",
            
        },
        {
            
            img: "img/IconsSectionImg/Screenshot_3.png",
        },
        {
            img: "img/IconsSectionImg/Screenshot_1.png",
        },  
            
        {
            
            img: "img/IconsSectionImg/Screenshot_2.png",
            
        },
        {
            
            img: "img/IconsSectionImg/Screenshot_3.png",
        },
        {
            img: "img/IconsSectionImg/Screenshot_1.png",
        },  
            
        {
            
            img: "img/IconsSectionImg/Screenshot_2.png",
            
        },
        {
            
            img: "img/IconsSectionImg/Screenshot_3.png",
        },


    ]

    return (

        <div className="contaienrDivIconsSections container " >
            <ul className="d-flex justify-content-start" >
               {IconsData.map((value,index)=>{
                   return  <li className="me-5" id="ulIconsSections"><img src={value.img} alt="error" /></li>
               })}
            </ul>
        </div>
    )
}




{/* <div className="row">
{IconsData.map((value, index) => {
    return <div className=" col iconsCollapse">
        <img className="" src={value.img1} alt="error image" />
        <img className="ms-5" src={value.img2} alt="error image" />
        <img className="ms-5" src={value.img3} alt="error image" />
    </div>

})}
</div> */}











