import React from 'react';
import { Link, useHistory } from "react-router-dom";
import decode from "jwt-decode";

export default function Menubar() {


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
        <div className="menubar dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "inherit"}}>
            MON COMPTE
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <Link to={dashboardUrl} className="dropdown-item" >Dashboard</Link>
            <Link to={profileUrl} className="dropdown-item" >Voir mon profil</Link>
            <Link to="/search">Rechercher</Link>
            <button className="dropdown-item" type="button" onClick={LogOut} >Déconnexion</button>
            </div>
        </div>
    )
}