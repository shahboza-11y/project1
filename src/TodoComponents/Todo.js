import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default class Todo extends Component {

    constructor(props) {
        super(props);


        this.state = { arrayList: props.arrayList, typing: "" }

    }


    typing = (event) => {
        console.log(event.target.value);


console.log(this.state);

        this.setState((state) => {
            return {
                typing: event.target.value
            }



        })
    }


    add = () => {
        this.setState((state) => {
              let newArrayList = [...state.arrayList];
              newArrayList.push({
                  text:state.typing,
                  complated:false,
              },)
            //   state.arrayList.push()
              return {arrayList: newArrayList, typing:""}
              
        })
    }
    render() {
        return (
            <div className="container">
                <div className="TodoContainer mt-5">
                    <div className="d-flex justify-content-between align-items-center ">
                        <h1 className="text-light">TODO</h1>
                        <FontAwesomeIcon className="me-2 SunIcon text-light jsutify-content-end align-items-center" icon={faSun } />
                    </div>

                    {/* _____________________________________________________ */}

                    <div className="row mt-2 " >
                        <button onClick={this.add} className="btn btn-light addBtn  ms-3 col-1"> <FontAwesomeIcon icon={faPlus} /> </button>
                        <input type="text" onChange={this.typing} className="input bg-white  col-10 ms-3" value={this.state.typing}
                            placeholder=" Add new Task" />
                    </div>
                    <div className="listGroup mt-3">
                        <ListGroup className="TodoList">
                            {
                                this.state.arrayList.map((value, index) => {
                                    return <ListGroupItem className={`mt-1 d-flex align-items-center ${value.complated && "complated" || ""}`} tag="a" href="#" >
                                        <button className="btn circleBtn">
                                            <FontAwesomeIcon className="checked d-none" icon={faCheck} />
                                        </button>
                                        <p className="text mb-0 ms-3">
                                            {value.text}
                                        </p>
                                    </ListGroupItem>
                                })
                            }
                        </ListGroup>
                    </div>
                </div>
                {/* ___________________________________________________________________________ */}
            </div>
        )
    }
}

