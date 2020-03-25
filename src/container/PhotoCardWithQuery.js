import React from 'react'
import { PhotoCard } from "../components/PhotoCard";
import { gql } from 'apollo-boost';
// Query nos permitira usar la tecnica de Render Props
import { Query } from 'react-apollo';


// Lo uso de este modo porque quiero usar el render Props
// el otro ejemplo de withPhoto uso es un hoc hight order component
const query = gql `
    query getSinglePhoto($id:ID!) {
        photo (id: $id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const PhotoCardWithQuery = ({id}) => (
    
    <Query query={query} variables={ {id} }> 
        {
            ({loading, error, data}) => { 
                console.log(data);
                const { photo } = data ? data : {}
                return <PhotoCard {...photo} />
            } 
        }
    </Query>
)