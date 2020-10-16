import React, { useEffect } from 'react';
import Nav from "../Components/Nav-loggedin";
import Profile from "../Components/Profile/Profile";

export default function ProfilePage() {

    useEffect(() => {
        document.title = "Mon Profil"
    })

    //if token "Mon Profil" sinon Profil de user.name

    return (
        <div>
            <Nav />
            <Profile />
        </div>
    )
}
