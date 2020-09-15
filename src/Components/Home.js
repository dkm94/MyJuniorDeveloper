import React from 'react';
import Header from "./Home-header";
import HomeForm from "./Home-forms";
import NavLoggedin from "./Nav-loggedin";

export default function Home() {
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
