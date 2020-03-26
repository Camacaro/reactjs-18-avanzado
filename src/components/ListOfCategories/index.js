
import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import LoadingBar from 'react-top-loading-bar';
// import { categories as mockCategories } from '../../../api/db.json'

// custom Hooks
function useCategoriesData() {
    /* useState: retorna dos valores (un array de dos valores) y aplicamos
    destructuracion de array para obtenerlo, el primero es el valor inicial
    que asignamos en el useState , el segundo es una funcion (setCategories) que se encargara
    de cambiar los valores del estado inicial (categories)*/ 
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(false);

    const [loadingBarProgress, setLoadingBarProgress] = useState(0);

    // Esto se ejecuta cada vez que se renderiza este componente
    // useEffect( function, efectos_para_ejecutarse )
    // si efectos_para_ejecutarse = [] eso significa que solo se ejecutara la primera vez que se renderice, que se monta el componente
    // esto dara el efecto de componentDidMount
    useEffect( function () {
        setLoadingBarProgress(50)
        setLoading(true);
        window.fetch('https://petgram-server-jcamacaro.camacaro.now.sh/categories')   
        .then( res => res.json() )
        .then( response => {
            setCategories(response)
            setLoading(false)
            // LoadingBar.complete()
            setLoadingBarProgress(100)
        })
    }, [] )

    return { categories, loading, loadingBarProgress }
}

export const ListOfCategories = () => {
    
    const { categories, loading, loadingBarProgress } = useCategoriesData();
    
    const [showFixed, setShowFixed] = useState(false);

    // este toma un efecto de listener, porque se ejecuta cada vez qeu se renderiza el componente
    useEffect( function() {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200 

            // si estos dos son diferentes ejecuta  setShowFixed
            showFixed !== newShowFixed && setShowFixed(newShowFixed)
        }

        // escuchar el evento del scroll
        document.addEventListener('scroll', onScroll )

        // vamos a limpiar el efecto de escuchar el scroll 
        // porque sino lo dejariamos en memoria 
        // cada vez que se renderice se ejecuta y se limpia
        return () => { 
            document.removeEventListener('scroll', onScroll )
        }

        // ahora le añadimos una dependencia, se ejecutara cada vez
        // que showFixed cambie de estado 
    }, [showFixed] )

    const renderList = (fixed) => (
        // si se usa style component esto no es remondable className 
        // className={fixed ? 'fixed': ''}
        <List fixed={fixed} >
            {
                loading 
                ? <Item key='loading'> <Category/>  </Item> 
                : categories.map( category => 
                
                    <Item key={category.id}> 

                        {/* <Category cover={category.cover} emoji={category.emoji} />  */}
                        <Category {...category} path={`/pet/${category.id}`} /> 
                    
                    </Item>
                )
            }
        </List>
    )

    // if( loading ) {
    //     return 'cargando...'
    // }

    return (
        <Fragment>
            <LoadingBar
                progress={loadingBarProgress}
                height={3}
                color='#f11946'
                onLoaderFinished={() => 0}
            />
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}