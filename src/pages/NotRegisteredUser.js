import React from 'react';
import Context from '../Context';


export const NotRegisteredUser = () => {
    return (
        <Context.Consumer>
            {
                ({isAuth, activateAuth}) => 
                    <form onSubmit={activateAuth}>
                        <button> Iniciar Sesion </button>
                    </form>
                
            }
        </Context.Consumer>
    );
};
