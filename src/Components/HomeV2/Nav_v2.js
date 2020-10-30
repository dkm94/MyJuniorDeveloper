import React, { Component } from 'react';
import Icon from "../../img/login-icon.png";
import LoginModal from "../Login-modal";
import Menubar from "../Menubar";

class Nav extends Component {
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
            <img alt="connexion" src={Icon} id="login-icon"/>
            <span className="span-login">CONNEXION</span>
        </div>
        } else 
            menubar =  <div className="btn login-btn menu-btn" style={{ backgroundColor: "inherit"}}>
            <img alt="connexion" src={Icon} id="login-icon"/>
            <Menubar />
        </div>
        return (
            <div className="container-fluid">
                <section className="logo-login logo-section">
               {menubar}
                </section>
                <LoginModal visible={this.state.visible} hideModal={this.hideModal} />
            </div>
        )
    }
}


export default Nav