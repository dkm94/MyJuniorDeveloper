import React, { Component } from 'react';
import groupeimg from "../../img/people-2557396_1920.jpg";
import "./Search.css"

export default class Search extends Component {
    render() {
        return (
            <div className="searchpage container" style={{ background:"lightgreen"}}>
                <div className="row">
                    <div className="col-sm-3" style={{ height: "5rem", background:"lightpink"}}>
                        <div><h2>Affinez votre recherche</h2></div>
                        
                    </div>
                    <div className="col-sm-9" style={{ background:"lightblue"}}>
                        <div style={{ height: "17rem" }} className="groupeimg">
                            <img src={groupeimg} alt="groupe" />
                        </div>
                        <div className="search-results" style={{ minHeight: "200px", background:"lightgreen"}}>
                            <div className="results">
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
