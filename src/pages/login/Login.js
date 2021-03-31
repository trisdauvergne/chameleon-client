import { host } from '../../config';
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/login`, 
        { 
            body: JSON.stringify({username}), 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' } 
        })
        setUsername('');
        setPassword('');
        console.log(response);
    };

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
        </>
    );
}

export default Login;