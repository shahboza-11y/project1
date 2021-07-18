import React, { Component } from 'react'
import './App.css';
import ImgComponents from './Component/First Page/ImgComponentsFolder/ImgComponents'
import PageOne from './Component/First Page/PageOne'
import Header from './Component/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackPage from './Component/SecondPage/BlackPage'
import IconsSections from './Component/SecondPage/IconsSection/IconsSections';
import Footer from './Component/Footer/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageOne />
        {/* ImgComponents start */}
        <div className="container  mt-5 d-flex justify-content-center">
          <div className="row">
            <div>
              <ImgComponents src="img/PageOneIMg/ImgComponents/asset 1.png" />
              <ImgComponents src="img/PageOneIMg/ImgComponents/asset 2.png" />
              <ImgComponents src="img/PageOneIMg/ImgComponents/asset 3.png" />
              <ImgComponents src="img/PageOneIMg/ImgComponents/asset 4.png" />
              <ImgComponents src="img/PageOneIMg/ImgComponents/asset 5.png" />
              <ImgComponents src="img/PageOneIMg/ImgComponents/asset 6.png" />
            </div>
          </div>
        </div>
        {/* ImgComponents end */}


        {/* Second Page Section Start  */}
        <div className="row">
          <div className="col-md-6 bg-primary" id="LeftSection-2nd-Page">
            <BlackPage title="Subscribe Today"
              text="Easily bring designs to life with code, 
               then share them with teammates." secondBtnClsName="btn-light btn  me-3" textBtn1="See Features"
              id="btnBlackPage" textId="textBlackPage" textBtn2="Get Started" clsName="btn" />
          </div>
          <div className="col-md-6 forBackgroundColorBlackPage">
            <BlackPage className="text-light" title="Why Framer" text="Get 20% off when you choose our yearly subscription plan.
                "textBtn1="View pricing" secondBtnClsName="btn-secondary btn  me-3" textBtn2="Get Started"
              clsName="d-none " id="btnBlackPage" textId="textBlackPage" textClassName="text-center" />
          </div>
        </div>
        <div className="betweenOfTwoTitles">

        </div>
        <div className="container-fluid  " id="ThirdpageSection">
          <BlackPage
            divClassName="text-center text-light"
            title="Framer is for teams, too."
            text="Join a growing list of companies who use Framer to make all the products you know and love."
            textBtn1="Learn about Enterprise"
            secondBtnClsName="btn-light btn  me-3 "
            id="btnBlackPageThree"
            clsName="d-none"
          />
        </div>


        <div className="" id="iconsSectionForCss">
          <IconsSections />
        </div>

        {/* Second Page Section End  */}


        {/* Footer Sections Start */}

          <Footer/>






      </div>
    )
  }
}
