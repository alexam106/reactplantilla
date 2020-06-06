import React from 'react';

const Footer = () => {

    return (

        <footer>

            <div className="d-flex justify-content-between bg-light p-4">

                <div className="col-md-6 mt-md-0 mt-3 d-inline-flex">
                    <a className="text-dark pl-5 pr-5" href="">Terms and conditions</a>
                    <a className="text-dark pr-5" href="">Privacy</a>
                </div>
                <div className="justify-end">
                    <a className="text-dark pr-5" href="">Follow</a>
                </div>
            </div>
        </footer>

    );
};

export default Footer;