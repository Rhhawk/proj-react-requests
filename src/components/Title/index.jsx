import { Children } from 'react'
import { Title } from './styles'

import PropTypes from 'prop-types'

function DefaultTitle({ children, theme, ...props }){
//... =spread operator = todo o resto
   // console.log(props)

    return (
        <Title{...props} theme={theme}>{children}</Title>
    )
}

DefaultTitle.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultTitle