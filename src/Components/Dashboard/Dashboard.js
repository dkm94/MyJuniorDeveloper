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
        this.state = this.initialState;
        this.state.clickedSection = ""
    }

    initialState = {
        id: "", name: "", job: "", time: "", mobility: [], keywords: [], myprojects: []
    }

    componentDidMount() {
        const token = localStorage.getItem("token")
        const user = decode(token);
        console.log(user)
        const userId = user.userId
        const dashboardId = user.dashboardId
        console.log("userId:", userId)
        console.log("dashboardId:", dashboardId)
        if(dashboardId) {
            this.showInfos(dashboardId);
        }
        
        
    }

    showInfos = (dashboardId) => {
        axios.get('http://localhost:3050/dashboard', {
            params: {
              id: dashboardId
            }
          })
        .then(res => {
          if(res.data != null) {
              this.setState({
                  name: res.data.name,
                  job: res.data.job,
                    time: res.data.time,
                  mobility: res.data.mobility,
                  keywords: res.data.keywords,
                  myprojects: res.data.myprojects
              });
          }
        })
        .catch((err)=>console.log(err))
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
        console.log("TRIGGERED");

        const token = localStorage.getItem("token");
        const user = decode(token);
        const dashboardId = user.dashboardId
        console.log(dashboardId);

        // const state = this.state;
        // const name = state.name,
        // job = state.job,
        // mobility = state.mobility,
        // keywords = state.keywords,
        // myprojects = state.myprojects

        const data = this.state;
        console.log(data)
        const config = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
          };

        axios.put("http://localhost:3050/dashboard/updateDashbord/" + dashboardId, {data}, {config})
        // .then(() => {
        //     this.setState({ name : data })
        //     console.log("data:", dashboard)
        // })
        .then(res => {
            console.log("success:", res.data.json)
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
        // .then(res => {
        //     console.log(res.data)
        //     console.log(res.status)
        //     console.log(res.headers)
        // })
    }

    // splitKeywords = () => {
    //     const keywordsArray = this.state.keywords.split(','); 
    //     this.setState({ 
    //         keywords: keywordsArray
    //     }); 
    // }

    render(){

    const {name, job, time, mobility, keywords, myprojects} = this.state;

    console.log("clicked section:", this.state.clickedSection)
    
    let section
    if (this.state.clickedSection === 2 ){
        section = <Knowledge myprojects={myprojects} splitKeywords={this.splitKeywords} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    } else if(this.state.clickedSection === 3)
        section = <Projects keywords={keywords} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        else 
            section = <Profile name={name} job={job} time={time} mobility={mobility} onSubmit={this.handleSubmit} handleChange={this.handleChange}/>

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