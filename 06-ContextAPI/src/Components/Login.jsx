import React from 'react';
import { useState,useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {

    const [UserName,SetUserName]=useState('')
    const [password,SetPassword] = useState('')

    const {setUser} = useContext(UserContext)
    
    const handelSubmits = (e) => {
        e.preventDefault()

        setUser({UserName,password})  
    }
    return ( 
        <div>
            <h2>Login</h2>
            <input type="text"  placeholder='User Name' value={UserName} onChange={(e)=>SetUserName(e.target.value)}/>
            {"   "}
            <input type="password"  placeholder='Password' value={password} onChange={(e)=>SetPassword(e.target.value)}/>
            <button onClick={handelSubmits}>Submit</button>

        </div>
     );
}

export default Login;