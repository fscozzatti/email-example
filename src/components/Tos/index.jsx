import React from 'react'
import PropTypes from 'prop-types'

const Tos = ({ tos }) => {
    var to = tos.length
    return (
        <div>
            {(to!==1) && 
            <span className="badge badge-secondary">
                +{to - 1 }
            </span>
            }  
        </div>             
    )
}

Tos.propTypes = {
    tos: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
        }).isRequired,
    )
}

export default Tos
