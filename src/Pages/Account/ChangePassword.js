import { updatePassword  } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import { FormField } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';

function ChangePassword(props) {
    async function onFinish(event) {
        event.preventDefault();
        if (event.target.newPassword.value === event.target.newPasswordRepeat.value) {
            await updatePassword(auth.currentUser,event.target.newPassword.value).then(() => {
                toast.success("Password changed");
            }).catch(error => {
                toast.error(error.message);
            })
        } else {
            toast.error("Passwords do not match");
        }
        
    }
    return (
        <div>
            <form onSubmit={onFinish}>
                <FormField type="password" label="New password" name="newPassword" />
                <FormField type="password" label="Repeat new password" name="newPasswordRepeat" />
                <FormField type="submit" values="Update" />
            </form>
        </div>
    );
}

export default ChangePassword;