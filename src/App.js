import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from '../src/styles/GlobalStyles'
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
    <div>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards categoryId={3} />
    </div>
)