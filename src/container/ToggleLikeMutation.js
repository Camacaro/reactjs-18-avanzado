import React from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

gql
Mutation

// like anonymus
// const LIKE_PHOTO = gql `
//     mutation likeAnonymousPhoto($input: LikePhoto!){
//         likeAnonymousPhoto(input: $input) {
//             id,
//             likes,
//             liked
//         }
//     }
// `

const LIKE_PHOTO = gql `
    mutation likePhoto($input: LikePhoto!){
        likePhoto(input: $input) {
            id,
            likes,
            liked
        }
    }
`

export const ToggleLikeMutation = ({children}) => {
    
    return <Mutation mutation={LIKE_PHOTO} >
        {children}
    </Mutation>
}