import React, { useContext, useEffect } from 'react';
import Context from '../Context';
import { UserForm } from '../useForm';
import { useRegisterMutation } from '../container/RegisterMutation';
import { useLoginMutation } from '../container/LoginMutation';

// export const NotRegisteredUser = () => {
//     return (
//         <Context.Consumer>
//             {
//                 ({isAuth, activateAuth}) => {
//                     return <>
//                         {/* cuando se haga Submit queremos usar la mutacion, para ello la envolveremos en 
//                         RegisterMutation y recibe un children que hay que pasarle una funcion,
//                         en el parametro recibiremos la mutacion a ser ejecutada */}
//                         <RegisterMutation>
//                             {
//                                 (register) => {
//                                     const onSubmit = ( {email, password} ) => {
                                        
//                                         const input = {email, password}
                                        
//                                         const variables = { input }

//                                         register( {variables} ).then(
//                                             activateAuth
//                                         )
//                                     }
//                                     return <UserForm title="Registrarse" onSubmit={onSubmit} />
//                                 }
//                             }
//                         </RegisterMutation>

                        
//                         <UserForm title="Iniciar Sesion" onSubmit={activateAuth} />
//                     </>
//                 }
                    
                
//             }
//         </Context.Consumer>
//     );
// };

export const NotRegisteredUser = () => {

    const {isAuth, activateAuth} = useContext(Context.Created)

    const [register, dataRegister, loadingRegister, errorRegister] = useRegisterMutation()

    const [login, dataLogin, loadingLogin, errorLogin] = useLoginMutation();

    const errorMsgRegister = errorRegister && 'El usuario ya existe o hay algún'

    const errorMsgLogin = errorLogin && 'La contraseña no es correcta o el usuario no existe'

    const onSubmitRegister = ( {email, password} ) => {

        const input = {email, password}
        // console.log(input);

        const variables = { input }

        // console.log(isAuth);
        // register( {variables} ).then( activateAuth )
        register( {variables} ).then( 
            ({data}) => {
                const {signup} = data;
                activateAuth(signup)
            }
        )
    }

    const onSubmitLogin = ( {email, password} ) => {

        const input = {email, password}
        // console.log(input);

        const variables = { input }

        // console.log(isAuth);
        // login( {variables} ).then( activateAuth )
        login( {variables} ).then( 
            ({data}) => {
                // console.log(response);
                // response.data.login
                const {login} = data;
                activateAuth(login)
            }
        )
    }

    return (
        <>
            <UserForm title="Registrarse" onSubmit={onSubmitRegister} error={errorMsgRegister} disabled={loadingRegister} />
            <UserForm title="Iniciar Sesion" onSubmit={onSubmitLogin} error={errorMsgLogin} disabled={loadingLogin}  />
        </>
    );
};

