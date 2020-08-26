import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginModal extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="login-modal"
            style={{ display: this.props.visible ? "block" : "none" }}
            >
                <button onClick={this.props.hideModal}  >X</button>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                        <small>Pour la demo, cliquez sur le bouton Connexion pour accéder à votre profil.</small>
                    </div>
                    <Link to="/dashboard">
                        <button onClick={this.props.hideModal} type="submit" className="btn">Connexion</button>
                    </Link>
                    
                </form>
            </div>
        )
    }
}

export default LoginModal