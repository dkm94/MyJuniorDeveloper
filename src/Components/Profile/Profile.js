import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile">

                <section className="profile-header">
                    <img alt="bg-profile"></img>
                </section>

                <div className="profile-picture">
                    <img alt="pp"></img>
                </div>

                <section className="presentation">
                    <div className="name">
                        <p></p>
                    </div>
                    <div className="job">
                        <p></p>
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

                <section className="resume">

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
