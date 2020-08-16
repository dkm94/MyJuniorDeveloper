import React, { Component } from 'react'

class Knowledge extends Component {
    constructor(){
        super()
        this.state = {
            bla: "bou"
        }
    }
    
    render() {
        return (
            <div className="render-infos">
               <form>
                    <div className="form-group row">
                        <div className="col-sm-4">Environnement de travail</div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Windows
                                </label><br />
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Linux/Ubuntu
                                </label><br />
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                MAC OS
                                </label><br />
                                <div style={{display: "flex"}}>
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <input type="text" className="form-control" style={{ width: "200px"}} placeholder="Autre"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Technos et outils</label>
                        <div className="col-sm-8">
                        <textarea className="form-control" style={{height: "100px"}} placeholder="Séparez par une virgule"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Mots-clés</label>
                        <div className="col-sm-8">
                        <textarea className="form-control" style={{height: "100px"}} placeholder="Séparez par une virgule"/>
                        </div>
                    </div>
               </form>
            </div>
        )
    }
}

export default Knowledge