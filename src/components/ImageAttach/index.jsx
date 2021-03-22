import React from 'react'
import iconAttach from './../../images/icon_clip.svg';

const ImageAttach = ({ files }) => {
    var haveFiles = false
    if ( files ){haveFiles = true}
    return (
    <div>
        {haveFiles && <img className='imgContainerAttach' src={iconAttach} alt="Buscar" height="15px" width="15px" />}
    </div>
    )
}

export default ImageAttach
