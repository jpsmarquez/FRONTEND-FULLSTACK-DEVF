import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import CreateEvent from './views/CreateEvent';
import DetailEvent from './views/DetailEvent';


function Routes(){

    const Logout = () => {
        localStorage.removeItem('clone')
        return <Redirect to="/"/>
    }

    return(
        <>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/event/new" component={CreateEvent} />
            <Route exact path="/event/:id" component={DetailEvent} />
        </>
    )

}

export default Routes;