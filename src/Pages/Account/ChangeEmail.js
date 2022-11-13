import { updateEmail } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import { FormField } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';

function ChangeEmail() {
    async function onFinish(event) {
        event.preventDefault();
        await updateEmail(auth.currentUser,event.target.username.value).then(() => {
            toast.success("E-mail updated");
        }).catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div>
            <form onSubmit={onFinish}>
                <FormField type="input" label="E-mail" values={auth.currentUser.email} name="username" />
                <FormField type="submit" values="Update" />
            </form>
        </div>
    );
}

export default ChangeEmail;