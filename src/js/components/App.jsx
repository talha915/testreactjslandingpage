import React, {Component} from 'react';

const myobj={
    id: 1,
    name: 'ABC'
}
import Header from './Header.jsx'
import Body from './Body.jsx'
import Sidebar from './Sidebar.jsx'
import Footer from './Footer.jsx'
export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName: 'XYZ'
        }
    }
    render(){
        return(
            <div>
               <Header/>
               <Body/>
               <Sidebar/>
               <Footer/>
            </div>
        );
    }
}