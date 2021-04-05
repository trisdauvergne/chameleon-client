import { host } from '../../config';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [badUsername, setBadUsername] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/login`, 
        { 
            body: JSON.stringify({username}), 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });

        setUsername('');
        setPassword('');

        if (response.status === 204) {
            setLoggedIn(true);
            return;
        }

        if (response.status === 401) {
            setBadUsername(true);
            return;
        }
    };

    if(loggedIn) {
        return <Redirect to="/"/>
    }

    return (
        <article className="form-container-login">
            <h2 class="header-login">Welcome to Chameleon</h2>
            <h3 class="subheader-login">Please log in</h3>
            <form className="form-login" onSubmit={handleSubmit}>
                <label className="semibold">
                    Username <br/>
                    <input className="input-field" type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                <br/>
                </label>
                <label className="semibold">
                Password <br/>
                    <input className="input-field" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <br/>
                    <br/>
                </label>
                <button className="btn-submit semibold" type="submit">Login</button>
                <button className="btn-create-account semibold"> Create account </button>
            </form>
            {badUsername && <h3>Please enter a valid username</h3>}
        </article>
    );
}

export default Login;