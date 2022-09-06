import { useState, useEffect } from 'react';
// import './login.css'

function Login(props) {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isValid, setValid] = useState(false);
    
        const login = (e) => {
            e.preventDefault();
            localStorage.setItem('login', true)
            props.isLoggedin(true);
        }

        useEffect(() => {
            console.log('updated')
    
            if ((email.includes('@') && password.length > 4)) {
                setValid(true);
            }
    
        }, [email, password]);
    
        useEffect(() => {
            return () => console.log('unmounted');
        }, []);
    
    
        const emailHandler = (e) => {
            setEmail(e.target.value)
        }
        const passwordHandler = (e) => {
            setPassword(e.target.value)
        }
    
    
        return (
    
            <form onSubmit={login} className="fo">
                <input type="email" placeholder="Enter email" onChange={emailHandler} value={email} /><br></br>
                <input type="password" placeholder="Enter password" onChange={passwordHandler} value={password} /><br></br>
                {isValid ? <button type="submit" >Submit</button> : <button type="submit" disabled>Submit</button>}
    
            </form>
    
        );
    }

    export default Login;