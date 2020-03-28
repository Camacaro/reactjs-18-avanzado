import React from 'react';
import Context from '../Context';
import { UserForm } from '../useForm';
import { RegisterMutation } from '../container/RegisterMutation';

export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({isAuth, activateAuth}) => {
                    return <>
                        {/* cuando se haga Submit queremos usar la mutacion, para ello la envolveremos en 
                        RegisterMutation y recibe un children que hay que pasarle una funcion,
                        en el parametro recibiremos la mutacion a ser ejecutada */}
                        <RegisterMutation>
                            {
                                (register) => {
                                    const onSubmit = ( {email, password} ) => {
                                        
                                        const input = {email, password}
                                        
                                        const variables = { input }

                                        register( {variables} ).then(
                                            activateAuth
                                        )
                                    }
                                    return <UserForm title="Registrarse" onSubmit={onSubmit} />
                                }
                            }
                        </RegisterMutation>

                        
                        <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
                    </>
                }
                    
                
            }
        </Context.Consumer>
    );
};
