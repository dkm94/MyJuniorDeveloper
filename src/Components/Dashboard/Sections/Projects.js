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

    componentWillReceiveProps(newProps) {
        console.log("NewProps:", newProps)
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("NewProps:", newProps);
        console.log("NewState:", newState);
        return true
    }

    getInputValue = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.props.handleChange(fieldName, fieldValue);
    }

    showForm = () => {

        this.setState(prevState => ({
            visible: !prevState.visible
        })
        )

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
                        <form className="col-sm-8" onSubmit={this.props.handleSubmit}>
                            <input type="text" name="title" value={this.state.title} className="form-control mg-bt-5" placeholder="Titre du projet" id="input-h" onChange={this.getInputValue}/>
                            <textarea className="form-control mg-bt-5" name="description" value={this.state.description} style={{height: "100px"}} placeholder="Description du projet" onChange={this.getInputValue}/>
                            <input type="file" className="custom-file-input mg-bt-5" name="media" value={this.state.media} id="customFile" onChange={this.getInputValue} />
                            <div style={{ display: "flex", justifyContent: "flex-end"}}><button className="btn">Ajouter</button></div>

                            
                        </form>
                    </div>
                </div>

                <div className="render-projects">

                </div>
            </div>
        )
    }
}

export default Projects