import React from 'react'
import { GlobalStyle } from '../src/styles/GlobalStyles'
import { Logo } from './components/Logo'
// import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'
import { Detail } from './pages/Detail'
import NavBar from './components/NavBar'
import {User} from './pages/User'
import Favs from './pages/Favs'
import {NotRegisteredUser} from './pages/NotRegisteredUser'
import Context from './Context'


// Esto lo vamos a sustituir con el Context.Comsumer, funciona igual con el render props
// esto es un componente con render props 
// const UserLogged = ({children}) => {
//     // al children el componente que estara dentro de el recibira una 
//     // funcion donde podre obtener ela autentificacion y poder redireccionar
//     return children({isAuth: false})
// }


export const App = () => {
    
    // const urlParams = new window.URLSearchParams( window.location.search )

    // const detailId = urlParams.get('detail') 

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

            
            {/* <UserLogged> */}
            <Context.Consumer>    
                {
                    // recuperamos el objecto isAuth que nos retorna la funcion
                    ({isAuth}) => 
                        isAuth 
                        ? <Router>
                            <User  path='/user'/>
                            <Favs path='/favs' />
                        </Router>
                        : <Router>
                            <NotRegisteredUser path='/user'  />
                            <NotRegisteredUser path='/favs'  />
                        </Router>
                    
                }  
            </Context.Consumer>
            {/* </UserLogged> */}
            

            

            <NavBar />

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