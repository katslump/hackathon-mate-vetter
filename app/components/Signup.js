import React from 'react';
import axios from 'axios';
const dbUrl = "/db";

let Signup = ({}) => {
    let input = {
        email: '',
        password: '',
        fname: '',
        lname: '',
        bio: '',
        interests: [],
        skills: [],
        social: []
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            axios.post(dbUrl + '/signup', {
                email: input.email.value,
                password: input.password.value,
                fname: input.fname.value,
                lname: input.lname.value,
                bio: input.bio.value,
                // skills: input.skills.value,
                // interests: input.skills.value,
                hasTeam: false
            }).then(function(response) {
                console.log("logged in!");
            }).catch(function(error) {
                console.log(error);
            });

            input = {
                username: '',
                password: '',
                fname: '',
                lname: '',
                bio: '',
                interests: [],
                skills: [],
                social: []
            };
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
                                <label className="form-control-label">EMAIL</label>
                                <input type="text" className="form-control" id="signup-username" ref={text => input.email = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">FIRST NAME</label>
                                <input type="text" className="form-control" id="signup-firstname" ref={text => input.fname = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">LAST NAME</label>
                                <input type="text" className="form-control" id="signup-lastname" ref={text => input.lname = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">PASSWORD</label>
                                <input type="password" className="form-control" id="signup-password" ref={text => input.password = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">SHORT BIO</label>
                                <input type="text" className="form-control" id="signup-bio" ref={text => input.bio = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">INTERESTS</label>
                                <input type="text" className="form-control" id="signup-interests" ref={text => input.interests = text}/>
                            </div>
                            <div className="form-group">
                                <label className="form-control-label">SKILLS</label>
                                <input type="text" className="form-control" id="signup-skills" ref={text => input.skills = text}/>
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

export default Signup;
