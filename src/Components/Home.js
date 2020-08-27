import React from 'react';
import Header from "./Home-header";
import HomeForm from "./Home-forms";
import NavLoggedin from "./Nav-loggedin";
class Home extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){

        return(
            <div className="home">
                <NavLoggedin />
                <Header />
                <HomeForm />
            </div>
        )
    }
}

export default Home