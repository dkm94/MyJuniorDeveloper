import React, { Component } from 'react';
// import Button from "../../SectionButton";

class Knowledge extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
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

    splitWords = (e) => {
        const keywords = e.target.value
        this.props.handleSplit(keywords)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("triggered");
        this.props.onSubmit(e);
    }
    
    render() {
        // rendu keywords
        // const tools = this.state.keywordsArray.map(el => <li>{el}</li>)

        return (
            <div className="render-infos">
               <form onSubmit={this.handleSubmit}>
                    {/* <div className="form-group row">
                        <div className="col-sm-4"><label>Environnement de travail</label></div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="system" id="gridCheck1" value="windows" style={{ marginRight: "5px"}} onClick={this.checkedSystem} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Windows
                                </label><br />
                                <input className="form-check-input" type="checkbox" name="system" id="gridCheck2" value="linux" style={{ marginRight: "5px"}} onClick={this.checkedSystem}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Linux/Ubuntu
                                </label><br />
                                <input className="form-check-input" type="checkbox" name="system" id="gridCheck3" value="mac" style={{ marginRight: "5px"}}onClick={this.checkedSystem}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                MAC OS
                                </label><br />
                               
                            </div>
                        </div>
                    </div> */}

                    <div className="form-group row">
                        <label className="col-sm-4">Langages/Outils/Compétences</label>
                        <div className="col-sm-8">
                        <textarea name="keywords" value={this.props.keywords} onChange={this.getInputValue} className="form-control" style={{height: "100px"}} placeholder="Exemple: Javascript, Intégration, Responsive design...(Séparez par une virgule)"/>
                        </div>
                    </div>

                    {/* <Button submit={this.handleSubmit} /> */}
                    <div className="form-group row flex-end">
                        <div className="col-sm-8 flex-end">
                        <button type="submit" className="btn" onClick={this.splitWords}>Valider</button>
                        </div>
                    </div>
               </form>
            </div>
        )
    }
}

export default Knowledge