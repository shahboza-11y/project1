import React from 'react'
import './BlackPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlackPage(props) {
    const state = props;
    return (
        <div>
            <div className="text-center text-light ">
                <h1 id="titleBlackPage" className={state.titleClassName}>{state.title}</h1>
                <p className={state.textClassName} id={state.textId}>{state.text}
                </p>
                <button className={state.secondBtnClsName} id={state.id}>{state.textBtn1}</button>
                <button className={state.clsName} id="btn2BlackPage">{state.textBtn2}</button>
            </div>
        </div>
    )
}
