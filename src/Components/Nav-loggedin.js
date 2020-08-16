import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/logo.png";
import Icon from "../img/login-icon.png";
// import Home from "./Home"

export default function Nav() {
    return (
        <div className="header-nav container-fluid">
            <section className="logo-login">
                <Link to={"/"} style={{ height: "inherit"}} ><img alt="logo" src={Logo} className="logo"/></Link>
                <button className="btn login-btn" style={{ backgroundColor: "inherit"}} >
                    <img alt="connexion" src={Icon} id="login-icon"/>
                    <span className="span-login">CONNEXION</span>
                    {/* <Link></Link> */}
                </button>
            </section>
        </div>
    )
}
