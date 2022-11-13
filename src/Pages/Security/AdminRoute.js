import { onAuthStateChanged } from 'firebase/auth';
import React, { Component } from 'react';
import { Loader, Message } from '../../Components';
import { adminUid, auth } from '../../services/FirebaseFunctions';
import ProtectedRoute from './ProtectedRoute';
class AdminRoute extends Component {
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
            {!isLoading && user && <div>
                {user.uid === adminUid && <ProtectedRoute>{children}</ProtectedRoute>}
                {user.uid !== adminUid && <Message type="error">Resource only for administators</Message>}
            </div>}
        </div>);
    }
}

export default AdminRoute;