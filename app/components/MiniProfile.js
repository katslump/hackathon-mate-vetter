import React from 'react';

class MiniProfile extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-12 login-title">
                        PROFILE
                    </div>
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            User info
                            <div className="profile-card">
                                <header>
                                    <h1>Kat Slump</h1>
                                    <h2>I do this cool stuff</h2>
                                </header>
                                <div className="profile-bio">
                                    <p>Skills: #javascript #react #redux #frontend #design</p>
                                    <p>Interests: fashion | utilities | ideation</p>
                                </div>


                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>);
    }
};

export default MiniProfile;
