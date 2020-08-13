import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class HomeForm extends React.Component {
    constructor(){
        super();
        this.state = {
            searchValue: ""
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }); 
    }
    
    render() {

        const search = <FontAwesomeIcon icon={faSearch} />

        return (
            <div className="home-forms container-fluid">
                <div className="row">
                    <div className="col-sm-6 rg-form">
                        <div className="col-4 register">
                            <h2 id="title-form">Développeur</h2>
                            <p>Crééz votre profil en ligne dès maintenant et augmentez vos chances de trouver un job.</p>
                            <div className="div-register-btn">
                                <button className="btn">Inscrivez-vous</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 search-box">
                        <div className="col-4 search">
                            <h2 id="title-form">Recruteur</h2>
                            <p>Lancez une recherche rapide et trouvez votre développeur.</p>
                            <div className="div-searchbar">
                                <input name="searchValue" value={this.state.searchValue} type="text" className="searchTerm" placeholder="Rechercher..." onChange={this.handleChange} >
                                </input>
                                <button type="submit" className="searchButton">
                                    {search}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeForm
