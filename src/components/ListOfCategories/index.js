
import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
// import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {
    
    /* useState: retorna dos valores (un array de dos valores) y aplicamos
    destructuracion de array para obtenerlo, el primero es el valor inicial
    que asignamos en el useState , el segundo es una funcion (setCategories) que se encargara
    de cambiar los valores del estado inicial (categories)*/ 
    const [categories, setCategories] = useState([]);

    // Esto se ejecuta cada vez que se renderiza este componente
    // useEffect( function, efectos_para_ejecutarse )
    // si efectos_para_ejecutarse = [] eso significa que solo se ejecutara la primera vez que se renderice, que se monta el componente
    // esto dara el efecto de componentDidMount
    useEffect( function () {
        window.fetch('https://petgram-server-jcamacaro.camacaro.now.sh/categories')   
        .then( res => res.json() )
        .then( response => {
            setCategories(response)
        })
    }, [] )


    return (
        <List>
            {
                categories.map( category => 
                
                    <Item key={category.id}> 

                        {/* <Category cover={category.cover} emoji={category.emoji} />  */}
                        <Category {...category} /> 
                    
                    </Item>
                )
            }
        </List>
    )
}