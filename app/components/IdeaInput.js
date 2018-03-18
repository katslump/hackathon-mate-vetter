import React from 'react';
import axios from 'axios';
const dbUrl = "/db";

export default class IdeaInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ideas: [],
            name: '',
            description: '',
            hashtags: '',
            skills: ''
        };
    }

    handleInputChange(event)  {
        const state = this.state;
        state[event.target.name] = event.target.value;
        console.log(this.state);
        this.setState(state);
    }


    handleSubmit(e) {
        e.preventDefault();

        let self = this;
        const state = this.state;

        let hashtags = state.hashtags.split(",");
        let skills = state.skills.split(",");

        axios.post(dbUrl + '/idea', {
            name: state.name,
            description: state.description,
            hashtags: hashtags,
            skills: skills
            // owner: self.state.owner,
            // team: self.state.team
        }).then(function(response) {
            self.setState = ({
                name: response.data.name,
                description: response.data.description,
                hashtags: state.hashtags,
                skills: state.skills
            });
            console.log("Idea added!");
        }).catch(function(error) {
            console.log(error);
        });


    }

    render() {
        const {name, description, hashtags, skills} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="col-lg-12 login-title">
                            SUBMIT IDEA
                        </div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className="form-group">
                                        <label className="form-control-label">NAME</label>
                                        <input type="text" name="name" className="form-control" value={name} onChange={this.handleInputChange.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">DESCRIPTION</label>
                                        <input type="text" name="description" className="form-control" value={description} onChange={this.handleInputChange.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">KEYWORD(S)</label>
                                        <input type="text" name="hashtags" className="form-control" value={hashtags} onChange={this.handleInputChange.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-control-label">SKILLS</label>
                                        <input type="text" name="skills" className="form-control" value={skills} onChange={this.handleInputChange.bind(this)}/>
                                    </div>
                                    <div className="col-lg-12 loginbttm">
                                        <div className="col-lg-6 login-btm login-text"></div>
                                        <div className="col-lg-6 login-btm login-button">
                                            <button type="submit" className="btn btn-outline-primary">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2"></div>
                    </div>
                </div>
            </div>)
    }
};
