import React from 'react';
import Context from '../Context';
import { UserForm } from '../useForm';


export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({isAuth, activateAuth}) => {
                    return <>
                        <UserForm title="Registrarse" onSubmit={activateAuth} />
                        <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
                    </>
                }
                    
                
            }
        </Context.Consumer>
    );
};
