import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginModal extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Register Submitted");

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:3050/account/login', {user})
            .then(res => res.json())
            .then(res => {
            console.log("Login OK");
            console.log(res.data)
            localStorage.setItem("token", res.token);
            if (res.token) {
                this.props.history.replace("/dashboard");
            }
            })
            .catch(err => {
            console.log("Indentifiant invalide");
            });
    }
    

    render() {

        return (
            <div className="login-modal"
            style={{ display: this.props.visible ? "block" : "none" }}
            >
                <button onClick={this.props.hideModal}  >X</button>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.handleChange}/>
                        {/* <small>Pour la demo, cliquez sur le bouton Connexion pour accéder à votre profil.</small> */}
                    </div>
                    <button type="submit" className="btn">Connexion</button>
                    
                </form>
            </div>
        )
    }
}

export default LoginModal