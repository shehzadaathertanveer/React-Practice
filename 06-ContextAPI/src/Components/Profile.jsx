import React from 'react';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

function Profile() {

    const {user} = useContext(UserContext)
    
    if(!user)return<div>please Login</div>
    
    return ( 
        <>
            <h2>Welcome {user.UserName}</h2>
        </>
     );
    
}

export default Profile
