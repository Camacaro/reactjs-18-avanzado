import React from 'react';
import { useInputValue } from '../hooks/useInputValue'
import { Form, Input, Button, Title, Error } from './styles';

export const UserForm = ({onSubmit, title, error, disabled}) => {
    
    // const [email, setEmail] = useState('')
    const email = useInputValue('')
    // const [password, setPassword ] = useState('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit( {email: email.value, password: password.value}  )
    }
     
    return (
        <>
            <Form onSubmit={handleSubmit} disabled={disabled}>

                <Title> {title} </Title>

                {/* <input placeholder="Email" value= {email} onChange={ e => setEmail(e.target.value) } />
                <input placeholder="Password" type="password" value= {password} onChange={ e => setPassword(e.target.value)} /> */}

                {/* simplificar 
                <input placeholder="Email" value= {email.value} onChange={ email.onChange } /> */}
                <Input disabled={disabled} placeholder="Email" {...email} />
                <Input disabled={disabled} placeholder="Password" type="password" {...password} />

                <Button disabled={disabled} > {title} </Button>
            </Form>

            { error && <Error> {error} </Error> }
        </>
    );
};

