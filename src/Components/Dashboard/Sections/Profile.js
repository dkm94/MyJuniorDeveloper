import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(){
        super()
        this.state = {
            name: "Bernard",
            age: "40"
        }
    }
    render() {
        return (
            <div className="render-infos">
                <form>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Nom</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Poste souhaité</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4">Type de contrat</div>
                        <div className="col-sm-8">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Contrat de professionnalisation
                                </label>
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Contrat d'apprentissage
                                </label>
                                <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                Stage
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-4">Pour une durée de</div>
                        <div className="col-sm-8 dp-flex">
                            <input type="text" className="form-control nb-input" />
                            <p> mois</p>
                        </div>
                    </div>

                    <fieldset className="form-group">
                        <div className="row">
                        <legend className="col-form-label col-sm-4 pt-0">Disponibilité</legend>
                        <div className="col-sm-8">
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Imméadiate
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="gridRadios2">
                                À partir du
                            </label>
                            <input type="date" className="form-check-input"/>
                            </div>
            
                        </div>
                        </div>
                    </fieldset>

                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Mobilité</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4 col-form-label" htmlFor="customFile">Photo de profil</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4 col-form-label" htmlFor="customFile">Bannière</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="custom-file">
                            <label className="col-sm-4 col-form-label" htmlFor="customFile">CV</label>
                            <div className="col-sm-8"><input type="file" className="custom-file-input" id="customFile" /></div>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-8">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

