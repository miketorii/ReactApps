import './App.css';

import React from "react";
import { Link } from 'react-router-dom';

class HomePage extends React.Component {   
    render(){
        return (
            <div className='app-body'>
                <Link to='/page1'>Page1</Link><br/>
                <Link to='/page2'>Page2</Link><br/>
                <Link to='/page3'>Page3</Link><br/>
                <h1>Login is succeed.</h1>
                <h1>This is HOME page!</h1>
            </div>
        );
    }
}

export default HomePage;
