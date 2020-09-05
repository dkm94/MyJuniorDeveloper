import React, { Component } from 'react';
import Multiselect from "./Multiselect";
// import Button from "../../SectionButton";

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Bernard",
            age: "40"
        }
    }

    handleSubmit = () => {
        // const toolsContent = this.state.toolsInput.split(','); 
        // this.setState({ 
        //     toolsArray: toolsContent 
        // }); 
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div className="render-infos">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-4">Nom</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" id="input-h"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4">Poste souhaité</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" id="input-h"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4">Type de contrat</div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" style={{ marginRight: "5px"}} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Contrat de professionnalisation
                                </label><br />
                                <input className="form-check-input" type="checkbox" style={{ marginRight: "5px"}}/>
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Contrat d'apprentissage
                                </label><br />
                                <input className="form-check-input" type="checkbox" style={{ marginRight: "5px"}} />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Stage
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4">Pour une durée de</div>
                        <div className="col-sm-8 dp-flex">
                            <input type="text" className="form-control nb-input" id="input-h" style={{ marginRight: "5px"}} />
                            <p> mois</p>
                        </div>
                    </div>

                    <fieldset className="form-group">
                        <div className="row">
                        <label className="col-sm-4">Disponibilité</label>
                        <div className="col-sm-8">
                            <div className="form-check">
                            <input className="form-check-input" onChange={this.handleChange} type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Imméadiate
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2" style={{ margin: "0 5px"}} >
                                À partir du
                            </label>
                            <input type="date" name="date" className="form-check-input"/>
                            </div>
            
                        </div>
                        </div>
                    </fieldset>

                    <div className="form-group row">
                        <label className="col-sm-4">Mobilité</label>
                        <div className="col-sm-8">
                            <Multiselect />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4" htmlFor="customFile">Photo de profil</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4" htmlFor="customFile">Bannière</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4" htmlFor="customFile">CV</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>
                    
                    {/* <Button submit={this.handleSubmit} /> */}
                    <div className="form-group row flex-end">
                        <div className="col-sm-8 flex-end">
                        <button type="submit" className="btn" onSubmit={this.handleSubmit}>Valider</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

