import React, { createContext, useState } from 'react'


const Context = createContext()

const Provider = ({children}) => {
    const [isAuth, setIsAuth] = useState( () => {
        return window.sessionStorage.getItem('token')
    } )

    const value = {
        isAuth,
        activateAuth: token => {
            setIsAuth(true)
            window.sessionStorage.setItem('token', token)
        },
        removeAuth: () => {
            setIsAuth(false)
            window.sessionStorage.removeItem('token')

        }
    }

    return (
        <Context.Provider value={value} >
            {children}
        </Context.Provider>
    )
}

export default {
    Consumer: Context.Consumer, 
    Provider,
    Created: Context
} 