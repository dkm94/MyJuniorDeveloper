import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../img/logo.png";
import LoginModal from "../Login-modal";
import "./Home_v3.css";

class NavLoggedin extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    hideModal = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        
        return (
            <div className="header-nav container-fluid">
                
                <nav className="navbar navbar-expand-lg navbar-light">
                <Link to={"/"} style={{"height" : "100%"}} ><img alt="logo" src={Logo} className="logo" style={{"height" : "inherit"}}/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={"/"} className="nav-link">Accueil <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">À propos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/search"} className="nav-link">Rechercher</Link>
                        </li>
                        <li className="nav-item" onClick={this.showModal}>
                            <Link className="nav-link" to={""}>Se connecter</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
                <LoginModal visible={this.state.visible} hideModal={this.hideModal} />
            </div>
        )
    }
}


export default NavLoggedin