import React from 'react';
import Nav from "./Nav-logo";
import Header from "./Home-header";

class Home extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        return(
            <div classname="home">
               <Nav />
               <Header />

            </div>
        )
    }
}

export default Home