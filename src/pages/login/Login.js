import { host } from '../../config';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css'

const Login = ({setHasCookie}) => {

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
            setHasCookie(true);
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
            <div className="login-header-div">
                <h2 className="login-header__intro">Welcome to <strong>Chameleon</strong>!</h2>
                <p className="semibold login-header__p">The place where you can share your wardrobe with fashion-lovers in your area!</p>
                <br/>
                <p className="login-header__p">Start letting your clothes pay for themselves and help the environment at the same time!</p>
                <br/>
                <p className="login-header__p login-header__p--btm">Log in to Chameleon to start listing items to rent out or to start browsing for outfits in your area.</p>
                {/* <button>Click here to log in</button> */}
                <h3 className="subheader-login">Have an account? Log in below</h3>
                <form className="form-login" onSubmit={handleSubmit}>
                    <label className="semibold">
                        {/* Username <br/> */}
                        <input className="input-field" type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <br/>
                    </label>
                    <label className="semibold">
                    {/* Password <br/> */}
                        <input className="input-field" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        <br/>
                        <br/>
                    </label>
                    <button className="btn-login semibold" type="submit">Login</button>
                    <button className="btn-create-account semibold"> Create account </button>
                </form>
                {badUsername && <h3>Please enter a valid username</h3>}
            </div>
        </article>
    );
}

export default Login;