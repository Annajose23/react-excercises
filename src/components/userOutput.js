import React from 'react';

const UserOutput = (props) => {
    return ( 
    <div>
        <h3>{props.username}</h3>
        <p>Most new books are forgotten within a year, especially by those who borrow them.</p>
    </div>
     );
}
 
export default UserOutput;