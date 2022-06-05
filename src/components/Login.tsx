import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { UserLogin } from '../domain/User';

export default function Login(){
    const navigate = useNavigate();

    const handleSubmit = async(e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & UserLogin;

        const email = target.email.value;
        const password = target.password.value;

        await signInWithEmailAndPassword(auth, email, password).then((res) => {
            console.log(res);
            navigate('/');
        }).catch((err) => {console.log(err)});
    }

    return (
        <div className='login-container'>
            <div className='login-card shadow'>
                <form onSubmit={(event: React.SyntheticEvent) => {handleSubmit(event)}}>
                    <h1>Login</h1>
                    <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
                    <div className='login-input-container'>
                        <label>Email</label>
                        <input type='email' name='email'/>
                    </div>
                    <div className='login-input-container'>
                        <label>Password</label>
                        <input type='password' name='password'/>
                    </div>
                    <div>
                        <button className='login-button' type='submit'>Login</button>
                        <button className='login-button' onClick={() => {navigate('/register')}}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
}