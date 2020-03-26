import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'

// este id viene del path /pet/:id
export const Home = ({id}) => {
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Fragment>
    )
}