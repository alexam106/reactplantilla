import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Images from './Images';
import PrincipalImage from './PrincipalImage';




import '../scss/app.scss';

class App extends React.Component {


    render() {

        return <div>
            <Header tittle="MINIMO">
            </Header>

            <main className="container bg-white">
                
                <PrincipalImage></PrincipalImage>
                
                <Images></Images>
            </main>

            <Footer>
            </Footer>

        </div>;

    }
}


export default App;
