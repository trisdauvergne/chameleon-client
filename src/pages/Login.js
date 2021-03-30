const Login = () => {
    return (
        <>
            <form method="POST" action="http://localhost:3001/login" >
                <label>
                    <input type="text" name="username" placeholder="username" required/>
                </label>
                <label>
                    <input type="password" name="password" placeholder="password" required/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;