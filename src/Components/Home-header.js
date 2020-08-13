import React from 'react';
import HeaderImg from "./../img/woman.jpg";

export default function Header() {
    return (
        <div className="header">
            <img alt="header-desc" src={HeaderImg} />
            <div className="header-text">
            <p>La 1ère CVthèque dédiée aux développeurs juniors.</p>

            <p>Vous êtes à la recherche d’un développeur Junior pour votre projet, trouvez dès maintenant le profil qui répondra à vos attentes.</p>
            </div>
        </div>
    )
}
