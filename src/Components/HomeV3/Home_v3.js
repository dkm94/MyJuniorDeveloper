import React from 'react';
import "./Home_v3.css";
import Nav from "./Nav_v3";

export default function Home_v3() {
    return (
        <div className="homeV3 container-fluid">
            <div className="container" style={{ position: "relative", height: "100%" }}>
                <Nav />
                <div className="home container">
                    <div className="introduction">
                        <div className="title">
                            <h1>My Junior Developer.</h1>
                            <span>CVthèque pour développeurs juniors</span>
                        </div>
                        
                        <div className="intro">
                            <h1>Recruteurs.</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <h1>Développeurs.</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
