import React from 'react'
import './Footer.css'
export default function Footer() {

    const TextData = [
        {
            title: "Framer",
            text1: "Pricing",
            text2: "Education",
            text3: "Updates",
            text4: "Beta",
        },
        {
            title: "Features",
            text1: "Overview",
            text2: "Design",
            text3: "Code",
            text4: "Colleborate",
        },
        {
            title: "Get Started",
            text1: "Tutorials",
            text2: "Resources",
            text3: "Guides",
            text4: "Examples",
            text5: "Docs",
        },
        {
            title: "About",
            text1: "Blog",
            text2: "Jobs",
            text3: "Brand Assets",
            text4: "Community",
            text5: "Help Center",
        },
        {
            title: "Platforms",
            text1: "Design for IOS",
            text2: "Design for Android",
        },
        {
            title: "UI Kits",
            text1: "Voayges",
            text2: "Fiber",
        },
    ]

    return (
        <div>
            <div className="line w-100  "></div>

            <div className="container-fluid FooterContainer ">
                <ul className="bigUl d-flex">
                    {TextData.map((value, index) => {
                        return <li className="bigLi text-light mt-5 ms-5">
                            <ul className="smallUl">
                                <li><h5>{value.title}</h5></li>
                                <li>{value.text1}</li>
                                <li>{value.text2}</li>
                                <li>{value.text3}</li>
                                <li>{value.text4}</li>
                                <li>{value.text5}</li>
                            </ul>
                        </li>
                    })}
                </ul>

                <div className="d-flex justify-content-center">
                    <img src="img/Footer/FooterContact.png" className="FooterContact mt-5"
                        alt="error image" />
                </div>
            </div>
        </div >
    )
}
