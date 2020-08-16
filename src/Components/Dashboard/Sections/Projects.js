import React, { Component } from 'react'

class Projects extends Component {
    constructor(){
        super()
        this.state = {
            visible: false
        }
    }

    showForm = () => {

        this.setState(prevState => ({
            visible: !prevState.visible
        })
        )

    }

    render() {
        return (
            <div className="render-infos">
                <div className="mg-bt-5" style={{ display: "flex", justifyContent: "flex-end"}}>
                    <button className="btn" onClick={this.showForm}>Nouveau projet</button>
                </div>

                <div className="form-group row new-project" visible={this.state.visible} style={{display: this.state.visible ? 'flex' : 'none'}}>
                    <div className="custom-file align-x" style={{ width: "100%"}}>
                        <div className="col-sm-8">
                            <input type="text" className="form-control mg-bt-5" placeholder="Titre du projet" id="input-h"/>
                            <textarea className="form-control mg-bt-5" style={{height: "100px"}} placeholder="Description du projet"/>
                            <input type="file" className="custom-file-input mg-bt-5" id="customFile" />
                            <div style={{ display: "flex", justifyContent: "flex-end"}}><button className="btn">Ajouter</button></div>
                            
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