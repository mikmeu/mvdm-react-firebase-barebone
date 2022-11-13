import { updateProfile } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import { FormField } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';

function ChangeProfile() {
    async function onFinish(event) {
        event.preventDefault();
        await updateProfile(auth.currentUser,{displayName:event.target.displayName.value}).then(() => {
            toast.success("Profile updated");
        }).catch(error => {
            toast.error(error.message);
        })
    }
    return (
        <div>
            <form onSubmit={onFinish}>
                <FormField type="input" label="Display Name" values={auth.currentUser.displayName} name="displayName" />
                <FormField type="submit" values="Update" />
            </form>
        </div>
    );
}

export default ChangeProfile;