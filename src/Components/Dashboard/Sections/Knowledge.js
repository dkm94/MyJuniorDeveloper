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
                        <div className="col-sm-4"><label>Environnement de travail</label></div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Windows
                                </label><br />
                                <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Linux/Ubuntu
                                </label><br />
                                <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                MAC OS
                                </label><br />
                                <div style={{display: "flex"}}>
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}}/>
                                    <input type="text" className="form-control" style={{ width: "200px"}} placeholder="Autre" id="input-h"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4">Technos et outils</label>
                        <div className="col-sm-8">
                        <textarea className="form-control" style={{height: "100px"}} placeholder="Séparez par une virgule"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4">Mots-clés</label>
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