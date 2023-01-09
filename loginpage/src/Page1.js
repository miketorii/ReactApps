import React from "react";
import { Link } from 'react-router-dom';

class Page1 extends React.Component {
    render(){
        return (
            <div className='app-body'>
                <h1>This is Page1.</h1><br/>
                <Link to='/home'>Back</Link>
            </div>
        );
    }
}

export default Page1;
