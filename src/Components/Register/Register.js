import React, { Component } from 'react';
import laptop from "../../img/laptop-1819187_1920.jpg";
import "./Register.css";
import ordinateur from "../../img/business-2846221_1920.jpg";


export default class Register extends Component {
    render() {
        return (
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
                            <form className="col-sm-10">
                                <div className="form-group">
                                    <label htmlFor="inputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword1">Password</label>
                                    <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
                                    <small id="emailHelp" className="form-text text-muted">Votre mot de passe doit contenir au moins 6 caractères.</small>
                                </div>
                               
                                <button type="submit" className="btn btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
