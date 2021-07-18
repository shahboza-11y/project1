import React from 'react'
import './PageOne.css'
export default function PageOne() {
    return (
        <div>
            <div className="text-center" id="pageOneBody">
                <h1 className="mt-5" id="titlePageOne">Get ahead of the pack</h1>
                <p className="mt-3 " id="textParagraph">Framer is the best way to create interactive <br />
                    designs from start to finish.
                </p>
                <input type="text" placeholder="Email" id="inputPageOne" className=" mt-3" />
                <button className="btn btn-primary mb-1" id="">Start your free trial</button> <br />
                <img src="img/PageOneImg/videoImg.png" alt="error image" className="mt-5" />
            </div>

        </div>
    )
}
