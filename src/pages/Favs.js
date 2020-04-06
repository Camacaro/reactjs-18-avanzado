import React from 'react'
import { FavsWithQuery, useGetFavorites } from '../container/GetFavorites';
import { ListOfFavs } from '../components/ListOfFavs';
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layouts';

const Favs = () => {

    const { data, error, loading } = useGetFavorites()

    const { favs } = data || { favs: [] }

    return (
        <Layout title='Tus favoritos' subtitle='aqui puedes enconrar tus favorios'>

            {/* <Helmet>
                <title> Petgram - Tus favoritos </title>
                <meta name='description' content='aqui puedes enconrar tus favorios' />
            </Helmet> */}
            {/* <h1>Favs</h1> */}
            {/* <FavsWithQuery /> */}

            { loading && <p> Loading...</p> } 

            { error &&  <p> Error ! </p> }

            { favs && <ListOfFavs favs={favs} /> }        
        </Layout>
    );
};

export default Favs;