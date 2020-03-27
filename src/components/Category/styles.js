import styled from 'styled-components'
import { fadeIn } from "../../styles/animation";
import { Link as LinkRouter } from '@reach/router'

// con styled se puede estilizar componentes tambien pero éste debe poder recibir
// un componente className
// para este caso usaremos Link para hacer un push redirect para una Single page 
// porque con el anchor (a) hace un recargo de pagina 
// styled.a `
// export const Anchor = styled( Link ) `
export const Link = styled( LinkRouter ) `
    ${fadeIn()}
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Image = styled.img`
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    border-radius: 50%;
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`