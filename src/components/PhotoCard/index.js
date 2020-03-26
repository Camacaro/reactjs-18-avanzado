import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Article, Img, ImgWrapper } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavBotton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {

    const key = `like-${id}`

    const [liked, setLiked] = useLocalStorage(key, false)

    const [show, articleRef] = useNearScreen();

    return (
        <Article ref={articleRef}>

            {
                show && <Fragment>
                    <a href={`/?detail=${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>
                    
                    <ToggleLikeMutation >
                        
                        {
                            // ToggleLikeMutation necesita un render props que es esta funcion
                            // para que le diga que renderizar en este caso FavButton
                            // necesitamos tener un tipo de accion al hacer la mutacion en este caso toggleLike
                            // a esta funcion le llegara como parametro la funcion de la mutacion que queremos hacer
                            // y le ponemos como nombre toggleLike y le tenemos que mandar los parametros que necesita 
                            (toggleLike) => {
                                
                                const handleFavClick = () => {
                                    
                                    !liked && toggleLike( {variables: {input: {id} } } )
                                    
                                    setLiked(!liked)
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
