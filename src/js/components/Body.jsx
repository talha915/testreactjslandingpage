import React, {Component} from 'react'
export default class Body extends Component{
    render(){
        return(
            <div className="body">
                <div className="title">
                    <a href="">
                        First Post
                    </a>
                </div><br/>
                <div className="image">
                    <img src="./images/test.jpg" width="450" height="250"/>
                </div>
                <div className="Description">
                    Here is some Description..
                </div>
                <div className="author">
                    Author Name
                </div>
                <div className="date">
                    3/22/2018
                </div>
            </div>
        );
    }
}