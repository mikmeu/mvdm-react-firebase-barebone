import { onAuthStateChanged } from 'firebase/auth';
import React, { Component } from 'react';
import { Loader, Message } from '../../Components';
import { auth } from '../../services/FirebaseFunctions';
import Login from './Login';
import VerifyAccount from './VerifyAccount';

class ProtectedRoute extends Component {
    state = {
        user: null,
        isLoading: true
    }
    componentDidMount() {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                this.setState({user:user,isLoading:false});
            } else {
                this.setState({user:null,isLoading:false});
            }}
            )
    }
    
    render() {
        const { user, isLoading } = this.state;
        const { children } = this.props;
        return (<div>
            {isLoading && <Loader />}
            {!isLoading && !user && <div>
                <Message type="error">For this item you need to be logged in.</Message>
                <Login />
            </div>}
            {!isLoading && user && <div>
                {user.emailVerified && <div>{children}</div>}
                {!user.emailVerified && <VerifyAccount />}
            </div>}
        </div>);
    }
}

export default ProtectedRoute;