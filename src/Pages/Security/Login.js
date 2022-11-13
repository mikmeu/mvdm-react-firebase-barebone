import React from 'react';
import { FormField, Heading, Paragraph } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from '../../Components/Link';

function Login() {
    let navigate = useNavigate();

    async function onFinish(event) {
        event.preventDefault();
        await signInWithEmailAndPassword(auth,event.target.username.value,event.target.password.value).then(() => {
            navigate("/");
        }).catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div>
            <Heading type="h1">Login</Heading>
                <form className="login-form" onSubmit={onFinish}>
                    <FormField type="input" label="Username" name="username" />
                    <FormField type="password" label="Password" name="password" />
                    <FormField type="submit" values="Login" />
                </form>
                <Paragraph>No account? You can <Link type="navLink" href="/register" text="Register"/> here. <br/> Forgot your password? <Link type="navLink" href="/reset-password" text="Reset it"/>.</Paragraph>
        </div>
    );
}

export default Login;