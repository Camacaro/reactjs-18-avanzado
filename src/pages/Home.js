import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layouts'

// este id viene del path /pet/:id
const HomePage = ({id}) => {
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

// memo recibe un segundo parametro que es una funcion la cual
// recibe las anteriores props y las props actuales
// si ambas props son iguales este recordara y aplica el memo
export const Home = React.memo(HomePage, (prevProps, props) => {
    return prevProps.id === props.id
} )