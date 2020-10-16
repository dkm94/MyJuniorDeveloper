import React from 'react';
import NavLoggedin from "../Nav-loggedin";
import axios from "axios";
import decode from "jwt-decode";

class Profile extends React.Component {
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
            title: "",
            description: "",
            media: ""
        }
    }

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
                  projects: res.data.myprojectsID
              });
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:3050/dashboard/projects/'+ dashboardId, config)
        .then(res => {
            return res.data
            })
        .then(projects => {
            this.setState({ projects });
            console.log(projects)
        })
        .catch(err => console.log(err))
    }

    
    handleChange = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render() {

        let {name, job, bio, time, mobility, keywords, projects} = this.state;

        return (
            <div className="section-profile">
                <NavLoggedin />
                <div className="profile">

                <section className="profile-header container-fluid" onChange={this.handleChange}>
                    <div className="name col-sm-4 align-x">
                        <p>{name = null ? "Nom Prénom" : name}</p>
                    </div>
                    <div className="div-photo col-sm-4 align-x">
                        <div className="profile-picture">
                            <img alt="pp"></img>
                        </div>
                    </div>
                    <div className="job col-sm-4 align-x">
                        <p>{job = null ? "Titre du/des poste(s) visé(s)" : job}</p>
                    </div>
                </section>    

                <section className="presentation container">
                    <div id="profile-btns">
                        <button className="btn">Contacter</button>
                        <button className="btn">Télécharger CV</button>
                    </div>
                    <div className="availability">
                        <ul className="avb-list ul-mg">
                            <li>Recherche </li>
                            <li>À partir du</li>
                            <li>Pour une durée de</li><p>{time = null ? "inconnue" : time + " mois"}</p>
                            <li>Mobilité: </li><p>{mobility = null | undefined ? "inconnue" : mobility}</p>
                        </ul>
                    </div>
                    <div className="introduction">
                        <p>{bio = null ? "Présentez-vous" : bio}</p>
                    </div>
                </section>

                <section className="resume container">
                    <div className="resume-1 col-sm-4">
                        <div className="work-env">
                            <div className="workenv-p red-udl">
                                <p>Environnement de travail</p>
                            </div>
                            {/* <EnvironnementDeTravail /> */}
                        </div>
                        <div className="key-words">
                            <div className="keywords-p red-udl">
                                <p>Technos et Outils</p>
                            </div>
                            <ul>
                                {keywords.map(
                                    (keywords, i) => {
                                        return <div key={i}>
                                            <li>{keywords}</li>
                                        </div>
                                    }
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="resume-2 col-sm-8">
                        <div className="skills">
                            <div className="skills-p red-udl">
                                <p>Compétences</p>
                                {/* <Skills /> */}
                            </div>
                        </div>
                        <div className="projects">
                            <div className="projects-p red-udl">
                                <p>Projets</p>
                            </div>
                            <ul>
                                {projects.map((project, i) => {
                                    console.log(projects)
                                    return <li className="projectUser" key={i} data-id={project._id}>
                                        <h1>{project.title}</h1>
                                        <p>{project.description}</p>
                                        <img src={project.media} alt="projet"></img>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

export default Profile
