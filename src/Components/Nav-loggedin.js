import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import Icon from "../img/login-icon.png";

export default function Nav() {
    return (
        <div className="header-nav container-fluid">
            <section className="logo-login">
                <img alt="logo" src={Logo} className="logo"/>
                <button className="btn login-btn">
                    <img alt="connexion" src={Icon} id="login-icon"/>
                    <span>CONNEXION</span>
                    {/* <Link></Link> */}
                </button>
            </section>
        </div>
    )
}
