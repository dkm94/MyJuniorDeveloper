import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import Icon from "../img/login-icon.png";
import LoginModal from "./Login-modal";

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
                <section className="logo-login">
                <Link to={"/"} style={{ height: "inherit"}} ><img alt="logo" src={Logo} className="logo"/></Link>
                <button className="btn login-btn" style={{ backgroundColor: "inherit"}} onClick={this.showModal}>
                    <img alt="connexion" src={Icon} id="login-icon"/>
                    <span className="span-login">CONNEXION</span>
                    {/* <Link></Link> */}
                </button>
                </section>
                <LoginModal visible={this.state.visible} hideModal={this.hideModal} />
            </div>
        )
    }
}


export default NavLoggedin