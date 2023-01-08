import React from "react";

class PinKey extends React.Component {
    constructor(props){
        super( props );
        this.state = { callback : this.props.callbackfunc };

        this.pinkeynum = this.props.keynum;
    }

    pushkey()
    {
        this.state.callback(this.pinkeynum);
    }

    render(){           
        return (
            <button className='app-pinkey' onClick={this.pushkey.bind(this)}>
                {this.pinkeynum}
            </button>
        );
    }
}

export default PinKey;
