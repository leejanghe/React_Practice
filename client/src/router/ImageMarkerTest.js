import React, {useState} from 'react'
import ImageMarker from 'react-image-marker'
import styled from 'styled-components'

const Wrapper = styled.div`
width: 30%;
margin: 0 auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Btn = styled.button`
width: 30%;
margin-top: 1rem;
`

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

const sayHello = () => {
    console.log('hello')
}

const CustomMarker = (a) => {
    console.log(1,a)
    sayHello();
    return (
        <Marker>
            <NumberTag>{a.itemNumber}</NumberTag>
             <input />
        </Marker>

    )
}


function ImageMarkerTest() {

    const [markers, setMarkers] = useState([])

    return (
        <>
        <Wrapper>
        <ImageMarker
        style={{backgroundColor: '#blue'}}
        src="https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
        />

<Btn disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
</Btn>

<div>{markers.length}</div>

</Wrapper>

    </>
    )
}

export default ImageMarkerTest
