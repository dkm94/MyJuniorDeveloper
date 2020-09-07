import React from 'react';
import NavLoggedin from "../Nav-loggedin";
import Profile from "./Sections/Profile";
import Knowledge from "./Sections/Knowledge";
import Projects from "./Sections/Projects";
import axios from "axios";
import decode from "jwt-decode";

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
        const token = localStorage.getItem("token")
        const user = decode(token);
        console.log(user.userID, user.dashboardID)
        axios.get('http://localhost:3050/dashboard', {
            params: {
              id: user.userID
            }
          })
        .then(dashboard => {
          this.setState({ dashboard });
          console.log(dashboard)
        })
        .catch((err)=>console.log(err))
        .then(function () {
            console.log(user.dashboardID, "dashbord")
        });
    }

    
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    
    selectSection = (e) => {
        this.setState({ clickedSection : e.target.value })
    }

    // Submit à passer dans les components. + Ajouter la fonction splitKeywords avant
    handleSubmit = (e) => {
        // const keywordsArray = this.state.keywords.split(','); 
        // this.setState({ 
        //     keywords: keywordsArray
        // });
        e.preventDefault();
        console.log("Form Submitted");

        const token = localStorage.getItem("token");
        const user = decode(token);
        console.log(user.userID, user.dashboardID);

        const state = this.state;
        const name = state.name,
        job = state.job,
        mobility = state.mobility,
        keywords = state.keywords,
        myprojects = state.myprojects

        axios({
            method: "put",
            url: "http://localhost:3050/dashboard/updateDashbord",
            params: {id: user.userID},
            data: {name, job, mobility, keywords, myprojects}
        })
        .then(data =>
            this.setState({ dashboard: data })
            )
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
              console.log(error.config);
        })
        .then(res => {
            console.log(res.data)
            console.log(res.status)
            console.log(res.headers)
        })
    }

    // splitKeywords = () => {
    //     const keywordsArray = this.state.keywords.split(','); 
    //     this.setState({ 
    //         keywords: keywordsArray
    //     }); 
    // }

    render(){

    console.log(this.state.clickedSection)
    
    let section
    if (this.state.clickedSection === 2 ){
        section = <Knowledge myprojects={this.state.myprojects} splitKeywords={this.splitKeywords} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    } else if(this.state.clickedSection === 3)
        section = <Projects operatingSystem={this.state.operatingSystem} keywords={this.state.keywords} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        else 
            section = <Profile name={this.state.name} job={this.state.job} contract={this.state.contract} time={this.state.time} availability={this.state.availability} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>

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