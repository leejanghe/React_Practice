import React from 'react'
import styled from 'styled-components'

const Marker = styled.div`
display: flex;
color: #fff;
`

const NumberTag = styled.div`
background-color: #2B75EE;
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
justify-content: center;
`


function CustomMarker(a) {

    return (
        <Marker>
            <NumberTag>{a.itemNumber}</NumberTag>
        </Marker>       
    )
}

export default CustomMarker
