import React from 'react';
import Login from './Login';
import Signup from './Signup';
import IdeaTimeline from './IdeaTimeline';
import IdeaInput from './IdeaInput';
import axios from 'axios';
const dbUrl = "/db";
import MiniProfile from './MiniProfile';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {}
    render() {
        return (<div className="container">

            <IdeaInput/>
            <IdeaTimeline/>
            <Login/>
            <Signup/>
            <MiniProfile/>
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-12 login-form">
                <div className="col-lg-12 ">
                    <div className="col-lg-6 login-text"></div>
                    <div className="col-lg-6 login-button">
                        <button type="submit" className="btn btn-outline-primary">LOGOUT</button>
                    </div>
                </div>
            </div>
            </div>
        </div>);
    }
};

export default App;
