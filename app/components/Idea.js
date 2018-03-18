import React from 'react';

export default class Idea extends React.Component {
    componentWillMount() {
        console.log(this.props.idea);
    }

    render() {
        return (
                <li className="idea-box">
                    <div className="twitter-card">
             <img className="twitter-card-image" src="http://heykatslump.com/wp-content/uploads/2017/12/12243275_10207729298613386_8562939135850164950_n-1.jpg" />
             <div className="twitter-card-content">
               <a className="twitter-card-name" href="#" target="_blank">
                 Kat Slump
               </a>
               @katslumps
               <a className="twitter-card-info" href="#" target="_blank">
                 Jan 21
               </a>
               <div className="twitter-card-tweet">
                 <a className="twitter-card-hashtag" href="#" target="_blank">
                   #es6 #javascript #react #utility
                 </a>
               </div>
               <div className="twitter-card-icons">
                 <a href="#" className="twitter-card-icon">
                   <i className="fa fa-heart-o"></i>
                     3
                 </a>
               </div>
             </div>
           </div>
       </li>
        );
    }
};
