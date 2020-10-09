import React from 'react';
import { useHistory } from "react-router-dom";
// import decode from "jwt-decode";

export default function Menubar() {

    // const id = (props) => {
    //     localStorage.getItem("token");
    //     const token = localStorage.getItem('token')
    //     const user = decode(token)
    // }

    
    let history = useHistory()

    const LogOut = () => {
            console.log("token supprimé")
            localStorage.removeItem("token");
            history.push("/");
    };
    

    return (
        <div className="menubar dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "inherit"}}>
            MON COMPTE
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            {/* <Link to={`/dashboard/${id}`} class="dropdown-item" type="button">Dashboard</Link> */}
            {/* <Link to={`/profile/${id}`} class="dropdown-item" type="button">Voir mon profil</Link> */}
            <button class="dropdown-item" type="button" onClick={LogOut} >Déconnexion</button>
            </div>
        </div>
    )
}