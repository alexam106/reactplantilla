import React from 'react';
import img from './img/header.png';

const Header = props => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            
             <a className="navbar-brand pl-5 font-weight-bold " href="#">
                {props.tittle}
             </a>
          
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                    <li className="nav-item m-5">
                        <a className="nav-link" href="#">LIFESTYLE<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item m-5">
                        <a className="nav-link" href="#">PHOTODIARY</a>
                    </li>
                    <li className="nav-item m-5">
                        <a className="nav-link" href="#">MUSIC</a>
                    </li>
                    <li className="nav-item m-5 ml-5">
                        <a className="nav-link" href="#">TRAVEL</a>
                    </li>

                </ul>

            </div>
        </nav>
        
   
    );

};

export default Header;
