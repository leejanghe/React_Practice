import React from 'react'
// import ImageMarker, {MarkerComponentProps} from 'react-image-marker'

function CustomMarker({MarkerComponentProps}) {
    return (
        <p className="custom-marker">My coustom marker - {MarkerComponentProps}</p>
    )
}

export default CustomMarker
