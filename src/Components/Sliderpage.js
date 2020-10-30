import React, { useEffect } from 'react';
import Nav from "../Components/Nav-loggedin";
import Slideshow from "../Components/Sliderpage";

export default function DashboardPage() {

    useEffect(() => {
        document.title = "Slidertest"
    })

    return (
        <div>
            <Nav />
            <Slideshow />
        </div>
    )
}
