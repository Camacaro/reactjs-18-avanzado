import React from 'react'
import { FavsWithQuery, useGetFavorites } from '../container/GetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';

const Favs = () => {

    const { data, error, loading } = useGetFavorites()

    const { favs } = data || { favs: [] }

    return (
        <>
            <h1>Favs</h1>
            {/* <FavsWithQuery /> */}

            { loading && <p> Loading...</p> } 

            { error &&  <p> Error ! </p> }

            { favs && <ListOfFavs favs={favs} /> }        
        </>
    );
};

export default Favs;