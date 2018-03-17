import React from 'react';
import Idea from './Idea';
import IdeaInput from './IdeaInput';

class IdeaTimeline extends React.Component {
    render() {
        return (<div style={{display: "inline-flex"}}>
            <div className="timeline">
                <IdeaInput/>
                <ul className="timeList">
                    <li>idea</li>
                    <Idea/>
                </ul>
            </div>
        </div>);
    }
};

export default IdeaTimeline;
