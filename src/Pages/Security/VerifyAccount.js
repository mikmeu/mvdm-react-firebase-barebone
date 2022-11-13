import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { Button, Message } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';

function VerifyAccount() {
    return (
        <div>
            <Message type="error">Your account needs to be verified to access this content. <Button type="button" onClick={()=> sendEmailVerification(auth.currentUser)}>Send verification e-mail</Button></Message>
        </div>
    );
}

export default VerifyAccount;