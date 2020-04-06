import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layouts'

// este id viene del path /pet/:id
export const Home = ({id}) => {
    return (
        // <Fragment></Fragment>
        <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrar fotos de animales
        domesticos muy bonitos'>

            {/* <Helmet>
                <title> Petgram - Tu app de fotos de mascotas </title>
                <meta name='description' content='Con petgram puedes encontrar fotos de animales
                domesticos muy bonitos' />
            </Helmet> */}

            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}