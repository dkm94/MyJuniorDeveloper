import React, { Component } from 'react';
import laptop from "../../img/laptop-1819187_1920.jpg";
import "./Register.css";
import ordinateur from "../../img/business-2846221_1920.jpg";
import NavLoggedin from '../Nav-loggedin';
import axios from "axios";


export default class Register extends Component {

    constructor(props) {
        super(props)
    
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

        const email = this.state.email,
        password = this.state.password;

        axios.post('http://localhost:3050/account/register', {email, password})
            .then(res => {
            console.log("Register submitted");
            this.props.history.replace("/dashboard");
            })
            .catch(err => {
            console.log(err);
            });
    }

    render() {
        return (
            <div className="section-register">
                <NavLoggedin />
                <div className="registerpage container" style={{ height:"35rem"}}>
                <div className="row" >
                    <div className="col-sm-4 register-pic-full" >
                        <img className="register-img" src={laptop} alt="ordinateur-portable-ordinateur-mac by Markus Spiske de Pixabay" />
                    </div>
                    <div className="register-pic-sm">
                        <img src={ordinateur} alt="ordinateur by David Schwarzenberg de Pixabay"/>
                    </div>
                    <div className="col-sm-8 align-x rgt-form" >
                        <h1>Inscrivez-vous</h1>
                        <div className="registerForm row">
                            <form className="col-sm-10" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="inputEmail1">Email address</label>
                                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword1">Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="inputPassword1" placeholder="Password" />
                                    <small id="emailHelp" className="form-text text-muted">Votre mot de passe doit contenir au moins 6 caractères.</small>
                                </div>
                               
                                <button type="submit" className="btn btn">Créer mon compte</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
