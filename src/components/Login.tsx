import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();


    return (
        <div className='login-container'>
            <div className='login-card shadow'>
                <form>
                    <h1>Login</h1>
                    <hr style={{borderBottomWidth:'1px', width:'100%'}}/>
                    <div className='login-input-container'>
                        <label>Email</label>
                        <input type='email'/>
                    </div>
                    <div className='login-input-container'>
                        <label>Password</label>
                        <input type='password'/>
                    </div>
                    <button onClick={() => {navigate('/login')}}>Back</button>
                    <button onClick={() => {navigate('/register')}}>Create Account</button>
                </form>
            </div>
        </div>
    );
}