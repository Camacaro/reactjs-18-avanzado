import React from 'react';
import { Query, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { ListOfFavs } from '../components/ListOfFavs';

const GET_FAVS = gql `
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`

const renderProp = ( {loading, error, data}) => { 

    if ( loading ) return <p> Loading...</p>

    if ( error ) return <p> Error ! </p>

    const { favs } = data

    return <ListOfFavs favs={favs} />
}

export const FavsWithQuery = () => (
    // fetchPolicy nos sirve para decirle que no revice la cache de el sino que siempre
    // busque en la red para mantenerlo siempre sincronizado 
    <Query query={GET_FAVS} fetchPolicy='network-only'>
        { renderProp }
    </Query>
)


export const useGetFavorites = () => {
    
    const { data, error, loading } = useQuery( GET_FAVS, {
        fetchPolicy: 'cache-and-network'
    } ) 

    return { data, error, loading }
}