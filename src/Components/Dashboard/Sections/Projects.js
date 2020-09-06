import React, { Component } from 'react';
// import Button from "../../SectionButton";

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            title: "",
            description: "",
            media: ""
        }
    }

    showForm = () => {

        this.setState(prevState => ({
            visible: !prevState.visible
        })
        )

    }

    handleChange = (e) => {
        this.setState({
            [ e.target.name]: e.target.value
        })
    }


    // handleSubmit axios.put() /my projects

    render() {
        return (
            <div className="render-infos">
                <div className="mg-bt-5" style={{ display: "flex", justifyContent: "flex-end"}}>
                    <button className="btn" onClick={this.showForm}>Nouveau projet</button>
                </div>

                <div className="form-group row new-project" visible={this.state.visible} style={{display: this.state.visible ? 'flex' : 'none'}}>
                    <div className="custom-file align-x" style={{ width: "100%"}}>
                        <div className="col-sm-8">
                            <input type="text" name="title" value={this.state.title} className="form-control mg-bt-5" placeholder="Titre du projet" id="input-h"/>
                            <textarea className="form-control mg-bt-5" name="description" value={this.state.description} style={{height: "100px"}} placeholder="Description du projet"/>
                            <input type="file" className="custom-file-input mg-bt-5" name="media" value={this.state.media} id="customFile" />
                            <div style={{ display: "flex", justifyContent: "flex-end"}}><button className="btn" onSubmit={this.props.handleSubmit}>Ajouter</button></div>
                            {/* <Button submit={this.handleSubmit} /> */}

                            
                        </div>
                    </div>
                </div>

                <div className="render-projects">

                </div>
            </div>
        )
    }
}

export default Projects