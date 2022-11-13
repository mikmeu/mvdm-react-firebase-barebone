import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { FormField, Heading, Paragraph } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from '../../Components/Link';

class Register extends Component {
    state = {
        registered: false
    }
    onFinish = (event) => {
        event.preventDefault();
        var self = this;
        if (event.target.password.value === event.target.passwordRepeat.value) {
            createUserWithEmailAndPassword(auth,event.target.username.value,event.target.password.value)
            .then(() => {
                self.setState({registered:'true'})
            })
            .catch((error) => {
                toast.error(error.message);
            });
        } else {
            toast.error("Passwords do not match")
        }
        
    }
    render() {
        const { registered } = this.state;
        return (
            <div>
                <Heading type="h1">Register</Heading>
                {!registered && <form className="login-form" onSubmit={this.onFinish}>
                    <FormField type="input" label="Username" name="username" />
                    <FormField type="password" label="Password" name="password" />
                    <FormField type="password" label="Repeat password" name="passwordRepeat" />
                    <FormField type="submit" values="Register" />
                </form>}
                {registered && <Paragraph>You're account has been created. You can now <Link type="navLink" href="/login" text="log in" />.</Paragraph>}
            </div>
        );
    }
}

export default Register;