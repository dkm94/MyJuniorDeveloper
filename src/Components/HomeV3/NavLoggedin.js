import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import decode from "jwt-decode";
import Logo from "../../img/logo.png";
import "./Home_v3.css";

export default function NavLoggedin() {

    localStorage.getItem("token");
    const token = localStorage.getItem('token')
    const user = decode(token)
    console.log("user:", user)
    const dashboardId = user.dashboardId
    console.log("dashboardId:", dashboardId)
    const profileUrl = "/profile/" + dashboardId;
    const dashboardUrl = "/dashboard/" + dashboardId;

    
    let history = useHistory()

    const LogOut = () => {
            console.log("token supprimé")
            localStorage.removeItem("token");
            history.push("/");
    };

    return (
            <div className="header-nav container-fluid">
                
                <nav class="navbar navbar-expand-lg navbar-light">
                <Link to={"/"} style={{"height" : "100%"}} ><img alt="logo" src={Logo} className="logo" style={{"height" : "inherit"}}/></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to={"/"} class="nav-link">Accueil <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/"} class="nav-link">À propos</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/search"} class="nav-link" >Rechercher</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to={""} class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mon Compte
                            </Link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to={dashboardUrl} className="dropdown-item" >Dashboard</Link>
                            <Link to={profileUrl} className="dropdown-item" >Voir mon profil</Link>
                            <button className="dropdown-item" type="button" onClick={LogOut} >Déconnexion</button>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}
