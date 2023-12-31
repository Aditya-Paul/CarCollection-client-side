import { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const{user}=useContext(AuthContext)
    if(user){
        return children
    }
    // return <Navigate state={location.pathname} to='/login'> </Navigate>
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;