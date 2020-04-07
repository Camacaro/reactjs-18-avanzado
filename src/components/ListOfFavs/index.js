import React from 'react'
import { Grid, Image, Link } from './styles'
import PropTypes from 'prop-types';

export const ListOfFavs = ( { favs =  [] }) => {
    
    console.log(favs )

    return <Grid>
        {            
            favs.map( fav => 
                
                <Link key={fav.id} to={`/detail/${fav.id}`} >

                    <Image src={fav.src} />

                </Link>
            )
        }
    </Grid>
}

ListOfFavs.propTypes = {
    // un array de tipo objetos con sus parametros
    favs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            src: PropTypes.string
        })
    )
}