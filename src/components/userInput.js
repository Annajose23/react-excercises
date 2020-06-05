import React, { Component } from 'react';

class UserInput extends Component {
    state = {  }

    render() { 
        console.log(this.props);
        return ( 
            <input type="text" onChange={this.props.change}/>
         );
    }
}
 
export default UserInput;