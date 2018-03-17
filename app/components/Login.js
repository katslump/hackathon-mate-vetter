import React from 'react';
import axios from 'axios';

let Login = ({}) => {
    let username;
    let password;

    let handleSubmit = (e) => {
        e.preventDefault();
        if (username.value.length > 0 && password.value.length > 0) {
            console.log("Username: " + username.value);
            console.log("Password: " + password.value);
            //   axios.post(dbUrl + '/login', {
            //     email: input.username,
            //     password: input.password
            //   }).then(function(response) {
            //       console.log("logged in!");
            //   }).catch(function(error) {
            //     console.log(error);
            //   });
            //
            username.value = '';
            password.value = '';
        }
    }

    return (<div className="container">
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-control-label">USERNAME</label>
                                <input type="text" className="form-control" id="username" ref={text => username = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control" id="password" ref={text => password = text}/>
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
    </div>);
};

export default Login;
