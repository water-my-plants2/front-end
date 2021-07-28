import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({component:Component, ...rest}, id) => {
    console.log("in PrivateRoute", localStorage.getItem("token"));
    return <Route {...rest} render={(props)=> {
        if (localStorage.getItem('token')) {
            return <Component {...props} id={id}/>
        } else {
            return <Redirect to="/"/>
        }
    }}/>
}

export default PrivateRoute;