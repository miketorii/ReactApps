import React from "react";
import PinKey from './pinkey';

class Body extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            passcodeval: '',
            finalpasscode: ''
        };

        this.updatePassCode = this.updatePassCode.bind(this);
    }

    execlogin()
    {
        this.setState({finalpasscode: this.state.passcodeval});
    }

    delcode()
    {
        this.setState({passcodeval: ''});
    }

    updatePassCode(keynum){
        if(this.state.passcodeval.length < 4){
            this.setState( {passcodeval: this.state.passcodeval + keynum } );
        }
    }

    render(){
        return (
            <div className='app-body'>
                <h1>Input PIN Code (4 digits)</h1>
                <div className='app-pinpad'>
                    <div class='app-passcode'>{this.state.passcodeval}</div>
                    <PinKey keynum='1' callbackfunc={this.updatePassCode} />
                    <PinKey keynum='2' callbackfunc={this.updatePassCode} />
                    <PinKey keynum='3' callbackfunc={this.updatePassCode} /><br/>
                    <PinKey keynum='4' callbackfunc={this.updatePassCode} />
                    <PinKey keynum='5' callbackfunc={this.updatePassCode} />
                    <PinKey keynum='6' callbackfunc={this.updatePassCode} /><br/>
                    <PinKey keynum='7' callbackfunc={this.updatePassCode} />
                    <PinKey keynum='8' callbackfunc={this.updatePassCode} />
                    <PinKey keynum='9' callbackfunc={this.updatePassCode} /><br/>
                    <button className='app-pinkey' onClick={this.delcode.bind(this)}>DEL</button>
                    <PinKey keynum='0' callbackfunc={this.updatePassCode} />
                    <button className='app-pinkey' onClick={this.execlogin.bind(this)}>OK</button>
                </div>
                <h4>Pin Code : {this.state.finalpasscode}</h4>
            </div>
        );
    }
}

export default Body;
