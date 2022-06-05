import '../styles/register.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(){
    //const [info,  setInfo] = useState({})
    const navigate = useNavigate();

    return (
        <div className='register-container'>
            <div className='register-card shadow'>
                <form>
                    <h1>Register</h1>
                    <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
                    <div className='register-input-container'>
                        <label>Username</label>
                        <input type='text'/>
                    </div>
                    <div className='register-input-container'>
                        <label>Password</label>
                        <input type='password'/>
                    </div>
                    <div className='register-input-container'>
                        <label>Confirm Password</label>
                        <input type='password'/>
                    </div>
                    <div className='register-input-container'>
                        <label>Email</label>
                        <input type='email'/>
                    </div>
                    <button onClick={() => {navigate('/login')}}>Back</button>
                    <button onClick={() => {navigate('/register')}}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}