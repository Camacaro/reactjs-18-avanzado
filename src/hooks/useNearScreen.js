import { useEffect, useState, useRef } from 'react';

export function useNearScreen() {

    // referencia hacia un elemento en el DOM
    const articleRef = useRef(null)

    const [show, setShow] = useState(false);

    useEffect( function() {
        // console.log(articleRef.current);

        // con esta funcion lo que hicimos es renderizar tipo un lazy load
        // cargar solo cuando se necesite

        // import dinamico, usamos este para que sea compatible con todos los navegadores}

        // verificamos si existe ese observer
        Promise.resolve(

            typeof window.IntersectionObserver !== 'undefined' 
            ? window.IntersectionObserver
            : import('intersection-observer')

        ).then( () => {
            // con esta funcion vamos a ver todas las entreas qeu se encuentre en el viewport
            const observer = new window.IntersectionObserver(function (entries) {
                // console.log(entries);

                const { isIntersecting } = entries[0];
                // console.log(isIntersecting);
                if ( isIntersecting ) {
                    // console.log('si');
                    setShow(true)

                    // evitar que se vuelva actualizar 
                    observer.disconnect()
                }
            })

            observer.observe( articleRef.current )

        })

        // se ejecutara solo cuando cambie la referencia
    }, [articleRef]);

    return [show, articleRef]
}