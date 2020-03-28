import React from 'react';
import { useInputValue } from '../hooks/useInputValue'

export const UserForm = ({onSubmit}) => {
    
    // const [email, setEmail] = useState('')
    const email = useInputValue('')
    // const [password, setPassword ] = useState('')
    const password = useInputValue('')
     
    return (
        <form onSubmit={onSubmit}>
            {/* <input placeholder="Email" value= {email} onChange={ e => setEmail(e.target.value) } />
            <input placeholder="Password" type="password" value= {password} onChange={ e => setPassword(e.target.value)} /> */}

            {/* simplificar 
            <input placeholder="Email" value= {email.value} onChange={ email.onChange } /> */}
            <input placeholder="Email" {...email} />
            <input placeholder="Password" type="password" {...password} />

            <button> Iniciar Sesion </button>
        </form>
    );
};

