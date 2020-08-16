import React, { Component } from 'react';

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
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginModal