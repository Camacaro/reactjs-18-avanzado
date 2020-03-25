import React, { Fragment } from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from '../src/styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

export const App = () => {
    
    const urlParams = new window.URLSearchParams( window.location.search )

    const detailId = urlParams.get('detail') 

    // console.log(detailId);

    return (
        <div>
            <GlobalStyle />
            <Logo />
            {
                detailId 
                ? <PhotoCardWithQuery id={detailId} />
                : <Fragment>
                    <ListOfCategories />
                    <ListOfPhotoCards  />
                </Fragment>
            }
        </div>
    )
} 