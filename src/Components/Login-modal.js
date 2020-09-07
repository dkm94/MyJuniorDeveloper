import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import decode from "jwt-decode";

class LoginModal extends Component {
    constructor(props){
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
        console.log("Register Submitted");

        const email = this.state.email,
        password = this.state.password;

        axios.post('http://localhost:3050/account/login', {email, password})
            .then(res => {
                if (res.status === 200) {
                    console.log("Registering OK", res.data);
                    localStorage.setItem("token", res.data.token);
                    this.props.history.replace('/dashboard');
                } else
                    return res.status(400).json("Identifiants invalides.")
            .catch(err => {
            console.log(err);
            });
    })
}

    render() {

        return (
            <div className="login-modal"
            style={{ display: this.props.visible ? "block" : "none" }}
            >
                <button onClick={this.props.hideModal}>X</button>
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

export default withRouter (LoginModal)