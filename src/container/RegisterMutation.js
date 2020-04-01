import React from 'react'
import { Mutation, useMutation } from "react-apollo";
import { gql } from "apollo-boost";

const REGISTER = gql `
    mutation signup ($input: UserCredentials!) {
        signup(input: $input)
    }
`

// export const RegisterMutation = ({children}) => {
//     return <Mutation mutation={REGISTER}  >
//         {children}
//     </Mutation>
// }

export const useRegisterMutation = ( ) => {

    const [register, {data, loading, error} ] = useMutation(REGISTER)

    return [register, data, loading, error];
} 