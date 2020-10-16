import React, { useEffect } from 'react';
import Header from "./Home-header";
import HomeForm from "./Home-forms";
import NavLoggedin from "./Nav-loggedin";

export default function Home() {

    useEffect(() => {
        document.title = "Page d'accueil"
    }

    )

    return (
        <div>
            <div className="home">
                <NavLoggedin />
                <Header />
                <HomeForm />
            </div>
        </div>
    )
}
