import React from 'react';
import NavLoggedin from "../Nav-loggedin";
import Profile from "./Sections/Profile";
import Knowledge from "./Sections/Knowledge";
import Projects from "./Sections/projects/Projects";
import axios from "axios";
import decode from "jwt-decode";
// import Link from "react";

class Dashboard extends React.Component {
    constructor(){ 
        super();
        this.state = {
            name: "",
            job: "",
            bio: "",
            time: "",
            mobility: [],
            keywords: [],
            projects: [],
            clickedSection: ""
        }
    }

    // initialState = {
    //     name: "", job: "", time: "", mobility: [], keywords: [], myprojects: []
    // }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const user = decode(token)
        const dashboardId = user.dashboardId;
        const config = {
            headers: { Authorization: 'Bearer '+ token }
        };
        axios.get('http://localhost:3050/dashboard/'+ dashboardId, config)
        .then(res => {
            console.log(res.data)
              this.setState({
                  name: res.data.name,
                  job: res.data.job,
                  bio: res.data.bio,
                    time: res.data.time,
                  mobility: res.data.mobility,
                  keywords: res.data.keywords,
                  myprojects: res.data.myprojects
              });
        })
        .catch(err => console.log(err))
    }

    // componentDidMount() {
    //     const token = localStorage.getItem("token")
    //     const user = decode(token);
    //     console.log(user)
    //     const userId = user.userId
    //     const dashboardId = user.dashboardId
    //     console.log("userId:", userId)
    //     console.log("dashboardId:", dashboardId)
    //     if(dashboardId) {
    //         this.showInfos(dashboardId);
    //     }
        
        
    // }

    // showInfos = (dashboardId) => {
    //     axios.get('http://localhost:3050/dashboard/'+ dashboardId)
    //     .then(res => {
    //       if(res.data != null) {
    //           this.setState({
    //               name: res.data.name,
    //               job: res.data.job,
    //                 time: res.data.time,
    //               mobility: res.data.mobility,
    //               keywords: res.data.keywords,
    //               myprojects: res.data.myprojects
    //           });
    //       } else 
    //         console.log("err")
    //     })
    //     .catch(err => console.log(err))
    // }

    
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    
    selectSection = (e) => {
        this.setState({ clickedSection : e.target.value })
    }

    // Submit à passer dans les components. + Ajouter la fonction splitKeywords avant
    handleSubmit = event => {
        event.preventDefault();
        console.log("TRIGGERED");

        const token = localStorage.getItem("token");
        const user = decode(token);
        const dashboardId = user.dashboardId
    
        const profile = {
            name: this.state.name,
            job: this.state.job,
            bio: this.state.bio,
            time: this.state.time,
            mobility: this.state.mobility,
            keywords: this.state.keywords
        }

        const config = {
            headers: { Authorization: 'Bearer '+ token }
          };

        axios.put("http://localhost:3050/dashboard/updateDashboard/" + dashboardId, profile , config)
        .then(res => {
            console.log("success:", res.status)
            console.log(res.data)
            this.setState(this.state)
            // window.location.reload(false);
         })
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
  
    }

    splitKeywords = () => {
        const keywordsArray = this.state.keywords.split(','); 
        this.setState({ 
            keywords: keywordsArray
        }); 
    }

    render(){

    const {name, job, bio, time, mobility, keywords} = this.state;

    console.log("clicked section:", this.state.clickedSection)
    
    let section
    if (this.state.clickedSection === 2 ){
        section = <Knowledge keywords={keywords} handleSplit={this.splitKeywords} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    } else if(this.state.clickedSection === 3)
        section = <Projects onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        else 
            section = <Profile name={name} job={job} bio={bio} time={time} mobility={mobility} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>

            // const token = localStorage.getItem("token");
            // const user = decode(token);
            // const dashboardId = user.dashboardId

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
                    {/* <Link to={`/profile/${dashboardId}`}>OK</Link> */}

                        {section}
                
                </section>
            </div>
            </div>
        )
    }
}

export default Dashboard