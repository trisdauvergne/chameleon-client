import { host } from '../../config';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

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
            credentials: 'include',
            mode: 'cors'
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
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                </label>
                <label>
                    <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <button type="submit">Login</button>
            </form>
            {badUsername && <h3>Please enter a valid username</h3>}
        </>
    );
}

export default Login;