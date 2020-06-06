import React from 'react';
import img from './img/img.png';

class PrincipalImage extends React.Component {

    render() {
        return (

            <div className="row">
                <div className="col-12">
                    <img src={img} class="img-fluid  mx-auto d-block img-responsive" max-width= "100%" height="auto" />
                </div>
                <div className="mx-auto d-block">
                    <p className="pt-5 font-ubuntu">PHOTODIARY</p>
                    <h3 className="pt-3 pb-3">The perfect weekend getaway</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad <br />
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br />
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br />
                        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem <br />
                        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia <br />
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro <br />
                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quiaLorem ipsum dolor sit amet, incididunt ut labore <br />
                        et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p className="pt-5 pb-5 font-ubuntu">LEAVE A COMMENT</p>
                </div>
            </div>







        );
    }
}

export default PrincipalImage;