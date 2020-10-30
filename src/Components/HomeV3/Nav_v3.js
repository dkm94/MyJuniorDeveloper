import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../img/logo.png";
import LoginModal from "../Login-modal";
import Menubar from "./Menubar_v3";

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
            menubar =  <div className="btn login-btn" style={{ backgroundColor: "inherit"}} onClick={this.showModal}>
            <span className="span-login">CONNEXION</span>
        </div>
        } else 
            menubar =  <div className="btn login-btn menu-btn" style={{ backgroundColor: "inherit"}}>
            <Menubar />
        </div>
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