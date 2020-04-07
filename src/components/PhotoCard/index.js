import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Article, Img, ImgWrapper } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavBotton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

// liked, este vendra del props que la mutation me regrese
export const PhotoCard = ({id, liked, likes = 0, src = DEFAULT_IMAGE}) => {

    // ya esta parte no la vamos a necesitar porque estamos trayendo los datos desde el servidor 

    // const key = `like-${id}`

    // const [liked, setLiked] = useLocalStorage(key, false)

    const [show, articleRef] = useNearScreen();

    return (
        <Article ref={articleRef}>

            {
                show && <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>
                    {/* <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a> */}
                    
                    <ToggleLikeMutation >
                        
                        {
                            // ToggleLikeMutation necesita un render props que es esta funcion
                            // para que le diga que renderizar en este caso FavButton
                            // necesitamos tener un tipo de accion al hacer la mutacion en este caso toggleLike
                            // a esta funcion le llegara como parametro la funcion de la mutacion que queremos hacer
                            // y le ponemos como nombre toggleLike y le tenemos que mandar los parametros que necesita 
                            (toggleLike) => {
                                
                                const handleFavClick = () => {
                                    
                                    toggleLike( {variables: {input: {id} } } )

                                    // ya esta parte no la vamos a necesitar porque estamos trayendo los datos desde el servidor 
                                    // !liked && toggleLike( {variables: {input: {id} } } )
                                    //  setLiked(!liked)
                                } 
                                // // FavButton es nuestro children
                                // nota: likes viene en un props de ListOfPhotoCardsComponent que esta asociado con  el container 
                                // al ejecutar esta mutacion devuelde la varibale likes la cual la asocia a ese props y hace el aumento
                                // automaticamente porque me la esta devolviendo
                                return <FavButton liked={liked} likes={likes} onClick={ handleFavClick  } />
                            }
                        }
                    </ToggleLikeMutation>
               </Fragment> 
            }
            
        </Article>
    );
};


PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName, componentName) {
        const propValue = props[propName]

        if ( propValue === undefined ) {
            return new Error(`${propName} Value must be defined`)
        }

        if ( propValue < 0 ) {
            return new Error(`${propName} Value must be greater than 0`)
        }

    }

}