import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types';

export const SubmitButton = ({children, disabled, onClick}) => {
    
    return <Button onClick={onClick} disabled={disabled} > { children } </Button>
}

SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    // node es cualquier cosa que react pueda renderizar
    children: PropTypes.node.isRequired,
}