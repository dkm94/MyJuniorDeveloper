import React, { Component } from 'react';
import axios from "axios";
import decode from "jwt-decode";
import "./Projects.css";

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            visible: false,
            title: "",
            description: "",
            media: "",
            projects: []
        }
    }


    shouldComponentUpdate(newProps, newState) {
        console.log("NewProps:", newProps);
        console.log("NewState:", newState);
        return true
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        const user = decode(token)
        const dashboardId = user.dashboardId;
        const config = {
            headers: { Authorization: 'Bearer '+ token }
        };
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

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showForm = () => {

        this.setState(prevState => ({
            visible: !prevState.visible
        })
        )

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const projet = {
            title: this.state.title,
            description: this.state.description,
            media: this.state.media
        }

        const token = localStorage.getItem("token");
        const user = decode(token);
        const dashboardId = user.dashboardId

        const config = {
            headers: { Authorization: 'Bearer '+ token }
          };

        axios.post('http://localhost:3050/dashboard/newProject/'+ dashboardId, {projet}, config)
            .then(res => {
                return res.data
            })
            .catch(err => {
            console.log(err);
            });
    }


    render() {
        return (
            <div className="render-infos">
                <div className="mg-bt-5" style={{ display: "flex", justifyContent: "flex-end"}}>
                    <button className="btn" onClick={this.showForm}>Nouveau projet</button>
                </div>

                <div className="form-group row new-project" visible={this.state.visible} style={{display: this.state.visible ? 'flex' : 'none'}}>
                    <div className="custom-file align-x" style={{ width: "100%"}}>
                        <form className="col-sm-8" onSubmit={this.handleSubmit}>
                            <input type="text" name="title" value={this.state.title} className="form-control mg-bt-5" placeholder="Titre du projet" id="input-h" onChange={this.handleChange}/>
                            <textarea className="form-control mg-bt-5" name="description" value={this.state.description} style={{height: "100px"}} placeholder="Description du projet" onChange={this.handleChange}/>
                            <input type="file" className="custom-file-input mg-bt-5" name="media" value={this.state.media} id="customFile" onChange={this.handleChange} />
                            <div style={{ display: "flex", justifyContent: "flex-end"}}><button className="btn">Ajouter</button></div>
                        </form>
                    </div>
                </div>

                <div className="render-projects">
                    {this.state.projects.map((project, i) => {
                        return <div className="projectUser" key={i} data-id={project._id}>
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <img alt="projet"/>
                        </div>
                    }

                    )}
                </div>
            </div>
        )
    }
}

export default Projects