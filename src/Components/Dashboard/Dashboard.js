import React from 'react';
// import * as Sections from "./Sections";
// import Home from "../Home";
import NavLoggedin from "../Nav-loggedin";
import Profile from "./Sections/Profile";
import Knowledge from "./Sections/Knowledge";
import Projects from "./Sections/Projects";

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            clickedSection: ""
        }
    }
    
    selectSection = (e) => {
        this.setState({ clickedSection : e.target.value })
    }

    render(){

    console.log(this.state.clickedSection)
    
    let section
    if (this.state.clickedSection === 2 ){
        section = <Knowledge />
    } else if(this.state.clickedSection === 3)
        section = <Projects />
        else 
            section = <Profile />

        return(
            <div className="section-dashboard">
                <NavLoggedin />
                <div className="dashboard">
                <div className="container-fluid db-title align-x">
                    <h1>Votre Dashboard</h1>
                </div>

                <section className="container db-infos">
                    <div className="db-menu">
                        <ul className="ul-menu" onClick={this.selectSection}>
                            <li className="width-3 align-x" value="1">Mon Profil</li>
                            <li className="width-3 align-x" value="2">Mes Connaissances</li>
                            <li className="width-3 align-x" value="3">Mes Projets</li>
                        </ul>
                    </div>

                        {section}
                
                </section>
            </div>
            </div>
        )
    }
}

export default Dashboard