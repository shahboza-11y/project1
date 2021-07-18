import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state=props;
    }

    counterClick = () =>{
        this.setState.value((state)=>{
            console.log(state);
            return {value:this.state.value+1 }
        })
    }
    render() {
        return (
            <div>
                <button className={this.state.type} onClick={this.counterClick} >{this.state.value}</button>
            </div>
        )
    }
}
