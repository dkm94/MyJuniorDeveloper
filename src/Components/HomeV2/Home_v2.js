import React from 'react';
import "./Home_v2.css";
import logo from "../../img/logo.png";
import Nav from "./Nav_v2";

export default function Home_v2() {
    return (
        <div className="homeV2 container-fluid">
            <div className="row">
                <div className="col-sm-5 title-side">
                    <div className="logo">
                        <img alt="mjd logo" src={logo} />
                    </div>
                    <div className="mjd-section">
                        {/* <h1 className="intro">Bienvenue sur </h1> */}
                        <h1 className="title">My Junior Developer</h1>
                        <p>CVthèque pour développeurs juniors</p>
                    </div>
                </div>
                <div className="col-sm-7 dev-side">
                    <div className="logo">
                        <Nav />
                    </div>
                    <div className="recruteur-dev-section">
                        <div className="recruiter-home">
                            <h1>Recruteur.</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <button type="button" className="btn btn-light dev-btn">C'est parti !</button>
                        </div>
                        <div className="dev-home">
                            <h1>Développeur.</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <button type="button" className="btn btn-light dev-btn">Inscrivez-vous !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
