import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

// withPhotos esto nos permite envolver el componente y recuperar la funcion
// esto es un un HoC hight order Comment ya que es una funcion que recibe como parametro
// un componente  y devuelve otro componente ya sea con mejoras o con props inyectadas
// en este caso inyectaremos los props con todas las respuesta de las fotos 

// si quiero recibir por parametro con los props se lo mando igual solo que $categoryId
// es el key del prop
export const withPhotos = graphql(gql `
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    } 
`)