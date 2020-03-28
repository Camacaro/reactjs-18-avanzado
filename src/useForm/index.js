import React from 'react';
import { useInputValue } from '../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles';

export const UserForm = ({onSubmit, title}) => {
    
    // const [email, setEmail] = useState('')
    const email = useInputValue('')
    // const [password, setPassword ] = useState('')
    const password = useInputValue('')
     
    return (
        <>
            <Title> {title} </Title>
            <Form onSubmit={onSubmit}>
                {/* <input placeholder="Email" value= {email} onChange={ e => setEmail(e.target.value) } />
                <input placeholder="Password" type="password" value= {password} onChange={ e => setPassword(e.target.value)} /> */}

                {/* simplificar 
                <input placeholder="Email" value= {email.value} onChange={ email.onChange } /> */}
                <Input placeholder="Email" {...email} />
                <Input placeholder="Password" type="password" {...password} />

                <Button> {title} </Button>
            </Form>
        </>
    );
};

