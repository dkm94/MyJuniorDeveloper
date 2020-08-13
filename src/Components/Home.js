import React from 'react';
import Nav from "./Nav-logo";
import Header from "./Home-header";
import HomeForm from "./Home-forms";
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
                <HomeForm />
            </div>
        )
    }
}

export default Home