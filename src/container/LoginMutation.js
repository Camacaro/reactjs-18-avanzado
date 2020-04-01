import React from 'react'
import { Mutation, useMutation } from "react-apollo";
import { gql } from "apollo-boost";

const LOGIN = gql `
    mutation login ($input: UserCredentials!) {
        login(input: $input)
    }
`

export const useLoginMutation = () => {

    const [login, {data, loading, error} ] = useMutation(LOGIN)

    return [login, data, loading, error];
} 