import { Children } from 'react'
import { Container } from './styles'

import PropTypes from 'prop-types'

function DefaultContainer({ children, theme, ...props }){
//... =spread operator = todo o resto
  //  console.log(props)

    return (
        <Container{...props} theme={theme}>{children}</Container>
    )
}

DefaultContainer.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultContainer