import React from 'react';
import axios from 'axios';
const dbUrl = "/db";
import Idea from './Idea';

export default class IdeaTimeline extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ideas: [
                {
                    name: "This is an idea",
                    description: "It does this",
                    hashtags: "dog, cat, animals"
                }
            ]
        };
    }

    componentDidMount () {
        axios.get(dbUrl + '/ideas')
        .then((response) => {
            const id = response.data.ideas;
            this.setState({
                ideas: id
            });
        }).then(()=> {
            setTimeout(function () {
                console.log(this.state.ideas);
           }, 5000);
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        let data = this.state.ideas;
        let listOfIdeas = data.map((idea) => <Idea key={idea.name} idea={idea}/>);

            return (<div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2"></div>
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div><div className="col-lg-12 login-title">
                            IDEAS
                        </div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                <ul>
                                    {listOfIdeas}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>);
        }

};
