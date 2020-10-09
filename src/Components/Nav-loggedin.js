import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import Icon from "../img/login-icon.png";
import LoginModal from "./Login-modal";
import Menubar from "./Menubar";

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
        const token = localStorage.getItem("token");
        let menubar;
        if(token === null) {
            menubar =  <button className="btn login-btn" style={{ backgroundColor: "inherit"}} onClick={this.showModal}>
            <img alt="connexion" src={Icon} id="login-icon"/>
            <span className="span-login">CONNEXION</span>
        </button>
        } else 
            menubar =  <button className="btn login-btn menu-btn" style={{ backgroundColor: "inherit"}}>
            <img alt="connexion" src={Icon} id="login-icon"/>
            <Menubar />
        </button>
        return (
            <div className="header-nav container-fluid">
                <section className="logo-login">
                <Link to={"/"} style={{ height: "inherit"}} ><img alt="logo" src={Logo} className="logo"/></Link>
               {menubar}
                </section>
                <LoginModal visible={this.state.visible} hideModal={this.hideModal} />
            </div>
        )
    }
}


export default NavLoggedin