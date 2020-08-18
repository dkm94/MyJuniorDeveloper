import React, { Component } from 'react';
import groupeimg from "../../img/people-2557396_1920.jpg";
import "./Search.css"

export default class Search extends Component {
    render() {
        return (
            <div className="searchpage container">
                <div className="row">
                    <div className="col-sm-3" style={{ minHeight: "15rem", background:"lightgrey"}}>
                        <div><h2>Affinez votre recherche</h2></div>
                        <div className="search-criteria">
                            <form>
                                <div>
                                    <label>Type de contrat</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}} />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                        Contrat de professionnalisation
                                        </label><br />
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}}/>
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                        Contrat d'apprentissage
                                        </label><br />
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}} />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                        Stage
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label>Durée (en mois)</label>
                                    <div className="form-group row criterias-pdg">
                                        <select className="custom-select" size="3" multiple>
                                            <option defaultValue="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="3">4</option>
                                            <option value="3">5</option>
                                            <option value="3">6</option>
                                            <option value="3">7</option>
                                            <option value="3">8</option>
                                            <option value="3">9</option>
                                            <option value="3">10</option>
                                            <option value="3">11</option>
                                            <option value="3">12</option>
                                            <option value="3">13</option>
                                            <option value="3">14</option>
                                            <option value="3">15</option>
                                            <option value="3">16</option>
                                            <option value="3">17</option>
                                            <option value="3">18</option>
                                            <option value="3">19</option>
                                            <option value="3">20</option>
                                            <option value="3">21</option>
                                            <option value="3">22</option>
                                            <option value="3">23</option>
                                            <option value="3">24</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label>Disponibilité</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck1" style={{ marginRight: "5px"}} />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                        Immédiate
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label>Mobilité</label>
                                </div>
                                
                                <div>
                                    <label>Environnement de travail</label>
                                    <div className="form-group row">
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
                                </div>

                                <div style={{ display:"flex", flexDirection:"column" }}>
                                    <label>Mots-clés</label>
                                    <div className="col-sm-8">
                                        <textarea name="keywordsInput" className="form-control" style={{height: "100px"}} placeholder="Séparez par une virgule"/>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    <div className="col-sm-9" >
                        <div style={{ height: "17rem" }} className="groupeimg">
                            <img src={groupeimg} alt="groupe" />
                        </div>
                        <div className="search-results container-fluid" style={{ minHeight: "200px", marginTop: "2rem" }}>
                            <div className="results">
                                <div className="results-title"><h2>Profils correspondant à votre recherche</h2></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
