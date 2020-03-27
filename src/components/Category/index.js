import React from 'react'
// Anchor
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({cover = DEFAULT_IMAGE, path = '#', emoji = '?'}) => (
    // href es del a, pero como cambiamos al link hay que usar to
    // Anchor
    <Link to={path}> 
        <Image src={cover} />
        {emoji}
    </Link>
)