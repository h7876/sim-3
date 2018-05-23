import React from 'react';
import Particles from '../../Particles';
import Auth from './Auth.css'

export default function Login(){
    return (
        
        <div className="App">
       
        <Particles/>

        <a href={process.env.REACT_APP_LOGIN}>

        <div className= 'auth_container'>
        <button className = 'loginButton'>Login</button>
        </div>
        

  
        </a>
        
        </div>
    )
}