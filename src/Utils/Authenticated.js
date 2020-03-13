import React from 'react';
import { Redirect } from 'react-router-dom';



export default function(WrappedComponent){ //Funcion que reecibe como parametro un componente
    const token = localStorage.getItem('clone'); //Ontenemos el token

    return function (props){ //Este es un componente intermedio
        return token ? 
            <WrappedComponent {...props}/>
            : <Redirect to="/login"/>
    }

}