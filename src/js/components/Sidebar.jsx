import React, {Component} from 'react'

export default class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <form >
                    <div>
                        <label>
                            Form 
                        </label>
                        <label>
                            Name:
                            <input type="text" name="text"/>
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}