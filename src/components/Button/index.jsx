import { Children } from 'react'
import { Button } from './styles'

import PropTypes from 'prop-types'

function DefaultButton({ children, theme, ...props }){
//... =spread operator = todo o resto
    //console.log(props)

    return (
        <Button{...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton