import React from "react";
import { Link } from 'react-router-dom';

class Page2 extends React.Component {
    render(){
        return (
            <div className='app-body'>
                <h1>This is Page2.</h1>
                <Link to='/home'>Back</Link>
            </div>
        );
    }
}

export default Page2;
