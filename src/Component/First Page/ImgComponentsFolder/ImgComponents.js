import React from 'react'
import './ImgComponents.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons'
export default function ImgComponents(props) {
    const state = props;
    
    return (
        <>
            
                <img src={state.src} alt="error image"/>
            
        </>
    )
}
