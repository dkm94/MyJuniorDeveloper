import React from 'react';
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
               <Header />
                <HomeForm />
            </div>
        )
    }
}

export default Home