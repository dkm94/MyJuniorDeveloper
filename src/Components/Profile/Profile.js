import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">

                <section className="profile-header container-fluid">
                    <img alt="bg-profile"></img>
                </section>

           
                    <div className="profile-picture">
                            <img alt="pp"></img>
                            {/* <p>coucou</p> */}
                    </div>
               

                <section className="presentation container">
                    <div className="name-job">
                        <div className="name">
                            <p>Nom Prénom</p>
                        </div>
                        <div className="job">
                            <p>Titre du/des poste(s) visé(s)</p>
                        </div>
                    </div>
                    
                    <div className="availability">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="introduction">
                        <p></p>
                    </div>
                </section>

                <section className="resume container">

                    {/* <Button />
                    <Button /> */}

                    <div className="resume-1">
                        <div className="work-env">
                            <div className="workenv-p">
                                <p></p>
                            </div>
                            {/* <EnvironnementDeTravail /> */}
                        </div>
                        <div className="tools">
                            <div className="tools-p">
                                <p></p>
                            </div>
                            {/* <TechnosEtOutils /> */}
                        </div>
                        <div className="key-words">
                            <div className="keywords-p">
                                <p></p>
                            </div>
                            {/* <Keywords /> */}
                        </div>
                    </div>

                    <div className="resume-2">
                        <div className="skills">
                            <div className="skills-p">
                                <p></p>
                                {/* <Skills /> */}
                            </div>
                        </div>
                        <div className="projects">
                            <div className="projects-p">
                                <p></p>
                                {/* <Projects /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profile
