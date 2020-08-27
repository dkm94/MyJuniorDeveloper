import React from 'react';
import NavLoggedin from "../Nav-loggedin";

class Profile extends React.Component {
    render() {
        return (
            <div className="section-profile">
                <NavLoggedin />
                <div className="profile">

                <section className="profile-header container-fluid">
                    <div className="name col-sm-4 align-x">
                        <p>Nom Prénom</p>
                    </div>
                    <div className="div-photo col-sm-4 align-x">
                        <div className="profile-picture">
                            <img alt="pp"></img>
                        </div>
                    </div>
                    <div className="job col-sm-4 align-x">
                        <p>Titre du/des poste(s) visé(s)</p>
                    </div>
                </section>    

                <section className="presentation container">
                    <div id="profile-btns">
                        <button className="btn">Contacter</button>
                        <button className="btn">Télécharger CV</button>
                    </div>
                    <div className="availability">
                        <ul className="avb-list ul-mg">
                            <li>Recherche </li>
                            <li>À partir du</li>
                            <li>Pour une durée de</li>
                            <li>Mobilité: </li>
                        </ul>
                    </div>
                    <div className="introduction">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        {/* <Description /> */}
                    </div>
                </section>

                <section className="resume container">
                    <div className="resume-1 col-sm-4">
                        <div className="work-env">
                            <div className="workenv-p red-udl">
                                <p>Environnement de travail</p>
                            </div>
                            {/* <EnvironnementDeTravail /> */}
                        </div>
                        <div className="tools">
                            <div className="tools-p red-udl">
                                <p>Technos et Outils</p>
                            </div>
                            {/* {tools} */}
                        </div>
                        <div className="key-words">
                            <div className="keywords-p red-udl">
                                <p>Mots-clés</p>
                            </div>
                            {/* <Keywords /> */}
                        </div>
                    </div>

                    <div className="resume-2 col-sm-8">
                        <div className="skills">
                            <div className="skills-p red-udl">
                                <p>Compétences</p>
                                {/* <Skills /> */}
                            </div>
                        </div>
                        <div className="projects">
                            <div className="projects-p red-udl">
                                <p>Projets</p>
                                {/* <Projects /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            </div>
        )
    }
}

export default Profile
