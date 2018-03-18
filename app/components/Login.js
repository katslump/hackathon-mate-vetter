import React from 'react';
import axios from 'axios';
const dbUrl = "/db";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: "false",
            username: '',
            password: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let self = this;

        if (this.state.username.length > 0) {
            axios.get(dbUrl + '/login', {
                email: self.state.username,
                password: self.state.password
            }).then(function(response) {
                console.log("logged in!");
                self.setState = ({
                    loggedIn: "true"
                });
            }).catch(function(error) {
                self.setState = ({
                    loggedIn: "false"
                });
                console.log(error);
            });

        }
    }

    render() {

    let showHide = {
      'display': this.state.loggedIn === "false"? 'block' : 'none'
    };

    return (
        <div className="container">
        <div style={showHide}>
        <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
                <div className="col-lg-12 login-key">
                    <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="col-lg-12 login-title">
                    HACKMATE
                </div>

                <div className="col-lg-12 login-form">
                    <div className="col-lg-12 login-form">
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" className="form-control" id="username" onChange={e => this.setState({ description : e.target.username })} value={this.state.username} />
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control" id="password" onChange={e => this.setState({ password : e.target.value })} value={this.state.password} />
                            </div>

                            <div className="col-lg-12 loginbttm">
                                <div className="col-lg-6 login-btm login-text"></div>
                                <div className="col-lg-6 login-btm login-button">
                                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    </div>
</div>);}
};

export default Login;
