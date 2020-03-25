import React, { useState, useRef, useEffect, Fragment } from 'react';
import { Article, Img, ImgWrapper, Button } from './styles';
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {

    // referencia hacia un elemento en el DOM
    const articleRef = useRef(null)

    const [show, setShow] = useState(false);

    useEffect( function() {

        // console.log(articleRef.current);

        // con esta funcion lo que hicimos es renderizar tipo un lazy load

        // con esta funcion vamos a ver todas las entreas qeu se encuentre en el viewport
        const observer = new window.IntersectionObserver(function (entries) {
            // console.log(entries);

            const { isIntersecting } = entries[0];
            // console.log(isIntersecting);
            if ( isIntersecting ) {
                console.log('si');
                setShow(true)

                // evitar que se vuelva actualizar 
                observer.disconnect()
            }
        })

        observer.observe( articleRef.current )

        // se ejecutara solo cuando cambie la referencia
    }, [articleRef]);


    return (
        <Article ref={articleRef}>

            {
                show && <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>

                    <Button>
                        <MdFavoriteBorder size='32px' /> {likes} likes!
                    </Button>       
               </Fragment> 
            }
            
        </Article>
    );
};
