import React from 'react'
import { GlobalStyle } from '../src/styles/GlobalStyles'
import { Logo } from './components/Logo'
// import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'


export const App = () => {
    
    const urlParams = new window.URLSearchParams( window.location.search )

    const detailId = urlParams.get('detail') 

    // console.log(detailId);

    return (
        <div>
            <GlobalStyle />
            <Logo />

            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Detail path='/detail/:detailId' />
            </Router> 

            {/* {
                detailId 
                ? <PhotoCardWithQuery id={detailId} />
                : <Router>
                    <Home path='/' />
                    <Home path='/pet/:id' />
                </Router> 
            } */}
        </div>
    )
} 