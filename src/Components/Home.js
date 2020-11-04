import React, { useEffect } from 'react';
import Header from "./Home-header";
import HomeForm from "./Home-forms";

export default function Home() {

    useEffect(() => {
        document.title = "Page d'accueil"
    }

    )

    return (
        <div>
            <div className="home">
                <Header />
                <HomeForm />
            </div>
        </div>
    )
}
