import React from 'react';
import imgDance from './img/dancing.png';
import imgCafe from './img/cafe.png';
import imgBridge from './img/bridge.png';
import imgLooking from './img/looking.png';
import imgWalking from './img/walking.png';
import imgRoad from './img/road.png';

class Images extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <img src={imgDance} alt="" className="img-fluid mx-auto d-block" />
                        <p className="pt-5 ubuntu pl-5">LIFESTYLE</p>
                        <h3 className="pt-3 playfair_displayregular  pl-5">More than just a music festival</h3>
                        <p className="pt-3 playfair_displayregular pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <img src={imgCafe} alt="" className="img-fluid mx-auto d-block"/>
                        <p className="pt-5 ubuntu pl-5">LIFESTYLE</p>
                        <h3 className="pt-3 playfair_displayregular pl-5">Life tastes better with coffee</h3>
                        <p className="pt-3 playfair_displayregular pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>
        
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-5">
                        <img className="img-fluid mx-auto d-block pt-5" src={imgBridge} alt="" />
                        <p className="pt-5 ubuntu pl-5">PHOTODIARY</p>
                        <h3 className="pt-3 pl-5">American Dream</h3>
                        <p className="pt-3 pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-5 pb-5">
                        <img className="img-fluid mx-auto d-block pt-5" src={imgLooking} alt="" />
                        <p className="pt-5 ubuntu pl-5">PHOTODIARY</p>
                        <h3 className="pt-3 pl-5">A day exploring the Alps</h3>
                        <p className="pt-3 pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>

                    <div className="col-12 pt-5 pb-5 bg-light">
                        <form className="">
                            <div className="form-group">
                                <h3 className="pt-3 pb-5 ">Sign up for our newsletter!</h3>
                                <input className="form-control" type="text" width=""placeholder="Enter a valid email address" />
                            </div>
                        </form>
                    </div>


                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-5">
                        <img className="img-fluid mx-auto d-block pt-5" src={imgWalking} alt="" />
                        <p className="pt-5 ubuntu pl-5">LIFESTYLE</p>
                        <h3 className="pt-3 pl-5">Top 10 song for running</h3>
                        <p className="pt-3 pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-5">
                        <img className="img-fluid mx-auto d-block pt-5" src={imgRoad} alt="" />
                        <p className="pt-5 ubuntu pl-5">LIFESTYLE</p>
                        <h3 className="pt-3 pl-5">Cold winter days</h3>
                        <p className="pt-3 pl-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br />
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        </p>
                    </div>
                    <div className="pt-5 ubuntu pb-5 mx-auto d-block">
                        <button className=" btn btn-outline-dark" type="button ">Load more</button>
                    </div>
                    
                </div>


            </div>
        );
    }
}

export default Images;