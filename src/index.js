import React from 'react'
import ReactDom from 'react-dom'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'
import Context from './Context'

const cache = new InMemoryCache()

const link = new HttpLink({
    uri: 'https://petgram-server-jcamacaro.camacaro.now.sh/graphql'
})

const client = new ApolloClient({
    cache,
    link
})



// ReactDom.render(<App/>, document.getElementById('app'))

ReactDom.render(
    // value={ {isAuth: false}}
    // ese props ya se esta pasandode manera global en el archivo Contex
    <Context.Provider  >
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </Context.Provider>, 
document.getElementById('app'))