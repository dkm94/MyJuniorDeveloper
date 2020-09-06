import React from 'react';
import NavLoggedin from "../Nav-loggedin";
import Profile from "./Sections/Profile";
import Knowledge from "./Sections/Knowledge";
import Projects from "./Sections/Projects";
// import axios from "axios";
// import decode from "jwt-decode";

class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            clickedSection: "",
            name: "",
            job: "",
            // contract: [],
            time: "",
            // availability: "",
            mobility: [],
            // operatingSystem: [],
            keywords: [],
            myprojects: []
        }
    }

    componentDidMount() {
        // const getToken = localStorage.getItem("token"),
        // decodedToken = decode(getToken)
    }
    
    selectSection = (e) => {
        this.setState({ clickedSection : e.target.value })
    }

    //Submit à passer dans les components. + Ajouter la fonction splitKeywords avant
    // handleSubmit = () => {
    //     axios.put
    // }

    splitKeywords = () => {
        const keywordsArray = this.state.keywords.split(','); 
        this.setState({ 
            keywords: keywordsArray
        }); 
        // déplacer la fonction dans le parent DAshboard
    }

    render(){

    console.log(this.state.clickedSection)
    
    let section
    if (this.state.clickedSection === 2 ){
        section = <Knowledge myprojects={this.state.myprojects} splitKeywords={this.splitKeywords} onSubmit={this.handleSubmit}/>
    } else if(this.state.clickedSection === 3)
        section = <Projects operatingSystem={this.state.operatingSystem} keywords={this.state.keywords} onSubmit={this.handleSubmit}/>
        else 
            section = <Profile name={this.state.name} job={this.state.job} contract={this.state.contract} time={this.state.time} availability={this.state.availability} onSubmit={this.handleSubmit}/>

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