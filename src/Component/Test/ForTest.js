import React, { Component } from 'react'

const data = [
    {
        img: "img/PageOneImg/ImgComponents/asset 1.png",
        title: "Angry Birds",
        text: "jaxldor qushlar",
    },
    {
        img: "img/PageOneImg/ImgComponents/asset 2.png",
        title: "Cartoon",
        text: "Ajoyib ",
    }, {
        img: "img/PageOneImg/ImgComponents/asset 1.png",
        title: "Brazilia",
        text: "Qushlar jangi",
    },

]


export default class ForTest extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {data.map((cartoons, index) => {
                        return <div className="col-md-3 bg-success card text-center">
                            <div id="imgDiv">
                                <img src={cartoons.img} alt="error image" />
                            </div>
                            <div className="card-body">
                                <h1>{cartoons.title}</h1>
                                <p>{cartoons.text}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
