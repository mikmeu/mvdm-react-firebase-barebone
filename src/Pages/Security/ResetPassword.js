import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import { FormField, Heading } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';

function ResetPassword() {
    async function onFinish(event) {
        event.preventDefault();
            await sendPasswordResetEmail(auth,event.target.username.value).then(() => {
                toast.success("Reset password e-mail sent");
            }).catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <div>
            <Heading type="h1">Reset Password</Heading>
            <form onSubmit={onFinish}>
                <FormField type="input" label="E-mail" name="username" />
                <FormField type="submit" values="Send!" />
            </form>
        </div>
    );
}

export default ResetPassword;